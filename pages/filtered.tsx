import clientPromise from "../lib/mongodb";
import styles from "./channels.module.css";
import AutoLink from "../components/autolink";
import { useSearchParams } from "next/navigation";
import Filters from "../components/filters";
import { connect } from "http2";

export default function Filtered({ channels, videos }) {
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  const filter = searchParams.get("filter");

  let filterTypeTitle = "";

  if (filter) {
    filterTypeTitle = filter;
  } else {
    switch (category) {
      case "jewelry":
        filterTypeTitle = "Jewelry & Accessory Creators";
        break;
      case "kitchen":
        filterTypeTitle = "Kitchen & Dining Creators";
        break;
      default:
        filterTypeTitle = category?.charAt(0).toUpperCase() + category?.slice(1);
    }
  }
  return (
    <div className="container-fluid">
      <div className={`row flex-nowrap ${styles.nowrap}`}>
        <div className="mx-auto col-3 p-4 bg-dark d-none d-lg-block bg-dark">
          <Filters />
        </div>
        <div className="row ms-1">
          <div className="col col-lg-9">
            <div className="card mb-3 bg-light">
              <div className="card-body text-center align-items-center justify-content-center">
                <h3>{`${filterTypeTitle}`}</h3>
              </div>
            </div>
            <h3>Latest Discounts</h3>
            <div>
              {videos.map((video, i) => (
                <div>
                  <div className="mb-1">
                    <h4 className="card-title">{`Video: ${video.VideoTitle}`}</h4>
                    <p className={styles.p}>
                      <AutoLink text={video.ProcessedText} />{" "}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  try {
    const client = await clientPromise;
    const db = client.db("creator-discounts");
    const regex = new RegExp(".*" + context.query?.filter + ".*");

    let channels = [];
    let videos = [];

    if (context.query?.filter) {
      //Mongo cannot return only the video element matching the filter, so filter on server
      channels = await db.collection("channels").find({ "videos.DescriptionRaw": regex }).toArray();

      channels.forEach((doc) => {
        doc.videos.filter((video) => {
          if (regex.test(video.DescriptionRaw)) {
            videos.push(video);
          }
        });
      });
    } else if (context.query?.category) {
      channels = await db.collection("channels").find({}).toArray();
    }

    // if dev, always regenerate pages.
    // if production, regenerate page only once every 20 hours.
    if (process.env.NODE_ENV === "development") {
      return {
        props: { videos: JSON.parse(JSON.stringify(videos)) },
      };
    } else {
      return {
        props: { channels: JSON.parse(JSON.stringify(channels)), revalidate: 72000 },
      };
    }
  } catch (e) {
    console.error(e);
  }
}
