import React from "react";

import { useForm } from "react-hook-form";
import BtnPraimary from "../../components/BtnPraimary/BtnPraimary";

import styles from "./Review.module.scss";

export default function Rewiew() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
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
  const grades = ["1", "2", "3", "4", "5"];

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.review}>
      <h1 className={styles.title}>Отзыв. Квартира на ул.Пулковской, 8</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.list_rate}>
        {factors.map((factor) => (
          <div>
            <label htmlFor={factor.id}>
              {factor.label}
              <div id={factor.id} className={styles.rate_item}>
                {grades.map((grade) => (
                  <label className={styles.rate__label}>
                    {grade}
                    <input
                      type="radio"
                      value={grade}
                      className={styles.rate__input}
                      {...register(`${factor.id}`, {
                        required: true,
                      })}
                    />
                  </label>
                ))}
              </div>
            </label>
          </div>
        ))}
        <div className={styles.textArea_container}>
          <p>Напишите о достоинствах</p>
          <textarea
            {...register("dignities", { required: true })}
            className={styles.textArea_Dignity}
          />
          <p>Напишите о недостатках</p>
          <textarea {...register("limitations", { required: true })} />
        </div>
        <div className={styles.btn_priamary}>
          <BtnPraimary title="Отправить отзыв" />
        </div>
      </form>
    </div>
  );
}
