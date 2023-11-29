import clientPromise from "../lib/mongodb";
import styles from "./channels.module.css";

export default function Channels({ channels }) {
  return (
    <div>
      <h1>Top 20 Movies of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <ul>
        {channels.map((channel) => (
          <li>
            <h2>{channel.title}</h2>
            {channel.videos.map((video) => (
              <ul>
                <li>
                  <p className={styles.p}>{video.Description}</p>
                </li>
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
