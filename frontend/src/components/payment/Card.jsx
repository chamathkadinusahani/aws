import React from "react";
import styles from "./MyComponent.module.css";

const Card = ({ imageSrc, buttonText }) => (
  <div className={styles.column}>
    <div className={styles.card}>
      <img
        loading="lazy"
        src={imageSrc}
        alt=""
        className={styles.cardImage}
      />
      <button className={styles.cardBtn}>{buttonText}</button>
    </div>
  </div>
);

export default Card;