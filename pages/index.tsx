import clientPromise from "../lib/mongodb";
import styles from "./channels.module.css";
import AutoLink from "../components/autolink";

export default function Home({ channels }) {
  return (
    <div className="container">
      <div className="row py-2">
        <div className="col-12">
          <div className="card mb-3 bg-light">
            <div className="card-body text-center align-items-center justify-content-center">
              <p>Welcome to Creator Discounts, where you can find discounted merchandise from YouTube Creators.</p>
              <p className="d-none d-lg-block">Click the button to the left to filter by video creator category.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <h3>Latest Discounts</h3>
          <div>
            {channels.map((channel) => (
              <div>
                {channel.videos.map((video, i) => (
                  <div>
                    {video.DescriptionRaw.length > 0 && (
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
  );
}
export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("creator-discounts");

    const channels = await db.collection("channels").find({}).toArray();

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
