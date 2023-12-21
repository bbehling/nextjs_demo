import clientPromise from "../lib/mongodb";
import styles from "./channels.module.css";
import AutoLink from "../components/autolink";
import Filters from "../components/filters";

export default function Home({ channels }) {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="mx-auto col-3 p-4 bg-dark d-none d-lg-block bg-dark">
          <Filters />
        </div>
        <div className="row ms-1 py-2">
          <div className="col col-lg-9">
            <div className="card mb-3 bg-light">
              <div className="card-body text-center align-items-center justify-content-center">
                <p>Welcome to Creator Discounts, where you can find discounted merchandise from YouTube Creators.</p>
              </div>
            </div>
            <h3>Latest Discounts</h3>
            <div>
              {channels.map((channel, k) => (
                <div>
                  {channel.videos.map((video, i) => (
                    <div>
                      {video.ProcessedText !== null && video.ProcessedText !== "" && i === 0 && k <= 6 && (
                        <div className="mb-1">
                          <h4 className="card-title">{`Video: ${video.VideoTitle}`}</h4>
                          <p className={styles.p}>
                            <AutoLink text={video.ProcessedText} />{" "}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("creator-discounts");

    const channels = await db.collection("channels").find().toArray();

    // if dev, always regenerate pages.
    // if production, regenerate page only once every 20 hours.
    if (process.env.NODE_ENV === "development") {
      return {
        props: { channels: JSON.parse(JSON.stringify(channels)) },
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
