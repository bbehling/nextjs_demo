import clientPromise from "../lib/mongodb";
import styles from "./channels.module.css";

export default function Channels({ channels }) {
  return (
    <div>
      <h1>You Tube Channels</h1>
      <ul>
        {channels.map((channel) => (
          <li>
            <h2>{channel.title}</h2>
            {channel.videos.map((video) => (
              <ul>
                {video.DescriptionRaw.length > 0 && (
                  <div>
                    <h3>Raw Description</h3>
                    <p className={styles.p}>{video.DescriptionRaw}</p>
                    <h3>Processed Description</h3>
                    <p className={styles.p}>{video.ProcessedText}</p>
                  </div>
                )}
              </ul>
            ))}
          </li>
        ))}
      </ul>
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
