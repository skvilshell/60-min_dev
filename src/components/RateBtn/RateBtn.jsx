import React from "react";
import styles from "./RateBtn.module.scss";

export default function RateBtn({ grades, rating }) {
  function getRate(e) {
    rating(e.target.value);
  }

  return (
    <>
      {grades.map((grade) => (
        <button key={grade} value={grade} onClick={getRate}>
          {grade}
        </button>
      ))}
    </>
  );
}
