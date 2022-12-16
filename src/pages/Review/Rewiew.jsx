import React from "react";
import { useState } from "react";
import BtnPraimary from "../../components/BtnPraimary/BtnPraimary";
import RateBtn from "../../components/RateBtn/RateBtn";

import styles from "./Review.module.scss";

export default function Rewiew() {
  const [dignity, setDignity] = useState("");
  const [limitation, setLimitation] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState({
    dignity,
    limitation,
    rating,
  });
  const factors = [
    {
      id: "clean",
      label: "Чистота",
    },
    {
      id: "personal",
      label: "Персонал",
    },
    {
      id: "place",
      label: "Местоположение",
    },
    {
      id: "equal",
      label: "Соотношение цена-качество",
    },
  ];
  const grades = [1, 2, 3, 4, 5];

  const handleChangeDignity = (e) => {
    setDignity(e.target.value);
  };
  const handleChangeLimitation = (e) => {
    setLimitation(e.target.value);
  };

  const sendReview = (e) => {
    e.preventDefault();
    setReview({
      dignity,
      limitation,
      rating,
    });
    console.log(review);
    setDignity("");
    setLimitation("");
    setRating(0);
  };

  return (
    <div className={styles.review}>
      <h3 className={styles.title}>Отзыв. Квартира на ул.Пулковской, 8</h3>
      <ul className={styles.list_rate}>
        {factors.map((factor) => (
          <li key={factor.id} className={styles.li_item}>
            <label htmlFor={factor.id} className={styles.label}>
              {factor.label}
            </label>
            <div id={factor.id} className={styles.grades}>
              <RateBtn grades={grades} rating={setRating} />
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.textArea_container}>
        <p>Напишите о достоинствах</p>
        <textarea
          value={dignity}
          onChange={handleChangeDignity}
          className={styles.textArea_Dignity}
          placeholder="Опишите, что вам понравилось"
        />
        <p>Напишите о достоинствах</p>
        <textarea
          value={limitation}
          onChange={handleChangeLimitation}
          placeholder="Опишите, что вам не понравилось"
          className={styles.textArea_Limitation}
        />
        <BtnPraimary title="Отправить отзыв" className="btn-primary" />
      </div>
    </div>
  );
}



