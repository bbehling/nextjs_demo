import clientPromise from "../lib/mongodb";
import styles from "./channels.module.css";

export default function Home({ channels }) {
  return (
    <div className="container">
      <h1>You Tube Channels</h1>
      <div>
        {channels.map((channel) => (
          <div className="card mb-3">
            <div className="card-body">
              <h2 className="card-title">{channel.title}</h2>
              {channel.videos.map((video, i) => (
                <div>
                  {video.DescriptionRaw.length > 0 && (
                    <div className="mb-1">
                      <h4 className="card-title">{`Video Title: ${video.VideoTitle}`}</h4>
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#raw${i}${channel.channelId}`}
                            >
                              <h4>Raw Description</h4>
                            </button>
                          </h2>
                          <div
                            id={`raw${i}${channel.channelId}`}
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p className={styles.p}>{video.DescriptionRaw}</p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#ai${i}${channel.channelId}`}
                            >
                              <h4>Processed Description</h4>
                            </button>
                          </h2>
                          <div
                            id={`ai${i}${channel.channelId}`}
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <p className={styles.p}>{video.ProcessedText}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("creator-discounts");

    const channels = await db.collection("channels").find({}).toArray();

    return {
      props: { channels: JSON.parse(JSON.stringify(channels)) },
    };
  } catch (e) {
    console.error(e);
  }
}
