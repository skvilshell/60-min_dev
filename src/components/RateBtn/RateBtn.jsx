import React from "react";
import styles from "./RateBtn.module.scss";

export default function RateBtn({ grades, rating }) {
  function getRate(e) {
    rating(e.target.value);
  }

  return (
    <div className={styles.root}>
      {grades.map((grade) => (
        <label
          key={grade}
          value={grade}
          onClick={getRate}
          className={styles.rating}
        >
          <input type="radio" name="" className={styles.radio} />
          <span>{grade}</span>
        </label>
      ))}
    </div>
  );
}
