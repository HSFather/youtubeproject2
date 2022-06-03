import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video }) => (
  <section className={styles.detail}>
    <iframe
      title="youtube"
      id="ytplayer"
      type="text/html"
      width="720"
      height="405"
      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&disablekb=1&enablejsapi=1`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <h2>{video.snippet.title}</h2>
    <h3>{video.snippet.channelTitle}</h3>
    <pre className={styles.description} dir="auto">{video.snippet.description}</pre>
  </section>
);

export default VideoDetail;
