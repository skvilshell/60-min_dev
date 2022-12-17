import React, { useState } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import BtnPraimary from "../../components/BtnPraimary/BtnPraimary";
import styles from "./AddEstate.module.scss";
import InputWithTitle from "../../components/InputWithTitle";
import AreaWithTitle from "../../components/areaWithTitle/AreaWithTitle";
import Dropdown from "../AddEstate/dropdown/Dropdown";

export default function AddEstate() {
  const { control, register, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur",
  });
  const [activeElement, setActiveElment] = useState({ name: "выберите значение" })

  function onSubmit(data) {
    // try {
    //   axios({
    //     url: "https://60-min.ru/home/properties/addProperty",
    //     headears: {
    //       "Content-type": "application/json",
    //     },
    //     params: {
    //       property: data,
    //     },
    //     method: "post",
    //   }).then((res) => {
    //     console.log(res.data)
    //   }).catch((e) => console.log(e))
    // } catch (e) {
    //   console.log("Sending error", e);
    // }

    console.log(data)
  }
  return (
    <div className={styles.root}>
      <h2 className={styles.header}>Добавьте свой объект в каталог</h2>
      <p className={styles.attention}>
        Все пункты в дальнейшем можно будет поменять
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/*//*   оснновные сведения */}
        <div className={styles.container}>
          <h3 className={styles.container__header}>Основные сведения</h3>
          <p>Тип объекта</p>
          <div className={styles.tabs}>

            <Dropdown arr={arrHours} activeElement={activeElement} setActiveElment={setActiveElment} />

          </div>


        </div>


        <BtnPraimary title="Подать заявку" type="submit" />
      </form>
    </div>
  );
}


const arrHours = [
  { name: "3-5 часов", prop: "3-5 часов" },
  { name: "5-12 часов", prop: "5-12 часов" },
  { name: "12-24 часов", prop: "12-24 часов" },
  { name: "больше суток", prop: "сутки и больше" },
  { name: "больше суток", prop: "сутки и больше" },
  { name: "больше суток", prop: "сутки и больше" },
  { name: "больше суток", prop: "сутки и больше" },
  { name: "больше суток", prop: "сутки и больше" },
  { name: "больше суток", prop: "сутки и больше" },
  { name: "больше суток", prop: "сутки и больше" },
  { name: "больше суток", prop: "сутки и больше" },
  { name: "больше суток", prop: "сутки и больше" },
  { name: "больше суток", prop: "сутки и больше" },
  { name: "больше суток", prop: "сутки и больше" },
  { name: "больше суток", prop: "сутки и больше" },
  { name: "больше суток", prop: "сутки и больше" },
]
