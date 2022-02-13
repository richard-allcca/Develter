/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Avatar.module.css";

const Avatar = ({ src, alt, text }) => {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={src} alt={alt} />
      {/* {text && <strong>{alt}</strong>} */}
      {/* <p>{text}</p> */}
    </div>
  );
};

export default Avatar;
