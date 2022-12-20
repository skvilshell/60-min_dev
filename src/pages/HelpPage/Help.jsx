import React from "react";
import { useForm } from "react-hook-form";
import svgPhone from "../../assets/img/acc_supp_phone.svg";
import svgMail from "../../assets/img/acc_supp_mail.svg";
import BtnPraimary from "../../components/BtnPraimary/BtnPraimary";

import styles from "./Help.module.scss";

export default function Help() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className={styles.root}>
      <div className={styles.support}>
        <h3>Связаться с технической поддержкой или нашим специалистом</h3>
        <div className={styles.info}>
          <img src={svgPhone} alt="phone_logo" className={styles.logo} />
          <p>
            Позвоните нам по номеру +7 (812) 273-98-32, если Ваш вопрос срочный.
          </p>
        </div>
        <div className={styles.info}>
          <img src={svgMail} alt="mail_logo" className={styles.logo} />
          <p>
            Если Ваш вопрос может быть обсужден в письменной форме, напишите нам
            сообщение ниже. Мы пришлём ответ Вам на почту.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            className={styles.area}
            placeholder="Опишите свою проблему"
            {...register("Support", {
              required: true,
            })}
          />

          <BtnPraimary title="Отправить" disabled={!isValid} />
        </form>
      </div>
    </div>
  );
}
