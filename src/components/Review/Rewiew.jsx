import React from "react";
import { useState } from "react";
import RateBtn from "../RateBtn/RateBtn";
import BtnPraimary from "../BtnPraimary/BtnPraimary";
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
      label: "Оцените чистоту",
    },
    {
      id: "personal",
      label: "Оцените персонал",
    },
    {
      id: "place",
      label: "Оцените местоположение",
    },
    {
      id: "equal",
      label: "Оцените соотношение цена-качество",
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
      <p className={styles.title}>Отзыв. Квартира на ул.Пулковской, 8</p>
      <ul className={styles.list_rate}>
        {factors.map((factor) => (
          <li key={factor.id}>
            <label htmlFor={factor.id}>{factor.label}</label>
            <div id={factor.id} className={styles.grades}>
              <RateBtn grades={grades} rating={setRating} />
            </div>
          </li>
        ))}
      </ul>
      <p>Напишите о достоинствах</p>
      <textarea value={dignity} onChange={handleChangeDignity} />
      <p>Напишите о достоинствах</p>
      <textarea value={limitation} onChange={handleChangeLimitation} />
      <button onClick={sendReview}>Отправить отзыв</button>
    </div>
  );
}
