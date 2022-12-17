import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import BtnPraimary from "../../components/BtnPraimary/BtnPraimary";
import styles from "./AddEstate.module.scss";
import Tab from "./Tab/Tab";
import InputWithTitle from "../../components/InputWithTitle";
import AreaWithTitle from "../../components/areaWithTitle/AreaWithTitle";
import Dropdown from "./dropdown/Dropdown";

export default function AddEstate() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur",
  });

  const [minTime, setMinTime] = useState({ name: "выберите значение" })
  const [maxTime, setMaxTime] = useState({ name: "выберите значение" })


  function onSubmit(data) {
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
            <Tab
              title={"Отели"}
              value={1}
              id={"hotel"}
              {...register("property_type_id", {
                required: true,
              })}
            />
            <Tab
              title={"Аппартаменты"}
              value={2}
              id={"appartament"}
              {...register("property_type_id", {
                required: true,
              })}
            />
            <Tab
              title={"Дома"}
              value={3}
              id={"house"}
              {...register("property_type_id", {
                required: true,
              })}
            />
          </div>
          {errors?.property_type_id && <p className={styles.error}>выберите значение!</p>}

          <div className={styles.object__textareas}>

            <InputWithTitle
              title={"название объекта"}
              {...register("title", {
                required: true
              })}
            />
            {errors?.title && <p className={styles.error}>заполните поле</p>}
            <AreaWithTitle
              title={'описание объекта'}
              {...register("description", {
                required: true,
              })}
            />
            {errors?.description && <p className={styles.error}>заполните поле</p>}
            <InputWithTitle
              title="Адресс"
              type="address"
              {...register("address", {
                required: "Это обязательное поле",
              })}
            />
          </div>
          <div className={styles.select_time_elements}>
            <p>На какое минимальное и максимальное время можно снять объект</p>

            <div className={styles.select_time_elements}>
              <div>
                <p>min</p>
                <Dropdown
                  arr={arrHours}
                  activeElement={minTime}
                  setActiveElment={setMinTime}
                />
              </div>
              <div>
                <p>max</p>
                <Dropdown
                  arr={arrHours}
                  activeElement={maxTime}
                  setActiveElment={setMaxTime}
                />
              </div>
            </div>

            <p className={styles.attention}>
              Максимальное время можно не указывать
            </p>

          </div>
        </div>
        {/*//*   Особенности размещения */}
        <div className={styles.container}>
          <h3 className={styles.container__header}>Особенности размещения</h3>


          <div className={styles.feature}>
            <div className={styles.feature_item}>
              <p>Интернет</p>
            </div>
          </div>
          <label>
            Интернет
            {/* Требуется переделать */}
            <select>
              <option
                {...register("Internet", {
                  required: "Это обязательное поле",
                })}
              >
                Есть, бесплатно
              </option>
            </select>
          </label>
          <label>
            Парковка
            {/* Требуется переделать */}
            <select>
              <option
                {...register("Parking", {
                  required: "Это обязательное поле",
                })}
              >
                Есть, бесплатно
              </option>
            </select>
          </label>
          <label>
            Оплата
            {/* Требуется переделать */}
            <select>
              <option {...register("price_cat")}>Только карты </option>
            </select>
          </label>
          <label>
            Доступность с животными
            {/* Требуется переделать */}
            <select>
              <option {...register("pets")}>Можно с доплатой</option>
            </select>
          </label>
          <label>
            Время заезда и отъезда
            {/* Требуется переделать */}
            <label>
              заезд после
              <select>
                <option {...register("entry")}>12:00</option>
              </select>
            </label>
            <label>
              отъезд до
              <select>
                <option {...register("exit")}>13:00</option>
              </select>
            </label>
          </label>
          <label>
            Курение на территории
            {/* Требуется переделать */}
            <select>
              <option {...register("smoking")}>Разрешено</option>
            </select>
          </label>
        </div>
        {/*//*   Услуги на территории */}
        <div className={styles.container}>
          <h3 className={styles.container__header}>Услуги на территории</h3>
          <form>
            <label>
              Ресторан
              <input
                type="checkbox"
                value="restaurant"
                {...register("services")}
              />
            </label>
            <label>
              Доставка в номер
              <input
                type="checkbox"
                value="delivery"
                {...register("services")}
              />
            </label>
            <label>
              Фитнес-зал
              <input
                type="checkbox"
                value="fitness"
                {...register("services")}
              />
            </label>
            <label>
              Сауна
              <input type="checkbox" value="sauna" {...register("services")} />
            </label>
            <label>
              Спа-центр
              <input type="checkbox" value="spa" {...register("services")} />
            </label>
            <label>
              Бассейн
              <input
                type="checkbox"
                value="swimming"
                {...register("services")}
              />
            </label>
            <label>
              Джакузи
              <input
                type="checkbox"
                value="jacuzzi"
                {...register("services")}
              />
            </label>
            <label>
              Собственный пляж
              <input type="checkbox" value="beach" {...register("services")} />
            </label>
            <label>
              Игровая площадка
              <input type="checkbox" value="games" {...register("services")} />
            </label>
            <label>
              круглосуточная стойка регистрации
              <input
                type="checkbox"
                value="reception"
                {...register("services")}
              />
            </label>
          </form>
        </div>
        {/*//*   Категории номеров */}
        <div className={styles.container}>
          <h3 className={styles.header}>Категории номеров</h3>
          <form>
            <label>
              Название категории
              <textarea
                placeholder="Например, Стандарт или Люкс"
                {...register("category")}
              />
            </label>
            <label>
              Количество номеров в категории
              <textarea
                placeholder="5"
                className={styles.textarea_little}
                {...register("numbers")}
              />
            </label>
            <label>
              Цены за номер
              <select>
                <option {...register("price_time")}>2 часа</option>
              </select>
              <textarea
                placeholder="2 000            ₽"
                className={styles.textarea_little}
                {...register("price_time")}
              />
            </label>
            <label>
              Добавить фотографии
              <BtnPraimary title="Добавить" />
              <textarea placeholder="Перетащите сюда файлы с фото номера" />
            </label>
            <label>
              Удобства в номере
              <label>
                Холодильник
                <input
                  type="checkbox"
                  value="cold"
                  {...register("servicesInRoom")}
                />
              </label>
              <label>
                Кондиционер
                <input
                  type="checkbox"
                  value="conditioner"
                  {...register("servicesInRoom")}
                />
              </label>
              <label>
                Телевидение
                <input
                  type="checkbox"
                  value="TV"
                  {...register("servicesInRoom")}
                />
              </label>
              <label>
                Микроволновка
                <input
                  type="checkbox"
                  value="micro"
                  {...register("servicesInRoom")}
                />
              </label>
              <label>
                Электрический чайник
                <input
                  type="checkbox"
                  value="electro"
                  {...register("servicesInRoom")}
                />
              </label>
              <label>
                Ежедневная уборка
                <input
                  type="checkbox"
                  value="cleaning"
                  {...register("servicesInRoom")}
                />
              </label>
              <label>
                Отопление
                <input
                  type="checkbox"
                  value="warming"
                  {...register("servicesInRoom")}
                />
              </label>
              <label>
                Бесплатный Wi-Fi
                <input
                  type="checkbox"
                  value="Wi-Fi"
                  {...register("servicesInRoom")}
                />
              </label>
              <label>
                Чай в номере
                <input
                  type="checkbox"
                  value="tea"
                  {...register("servicesInRoom")}
                />
              </label>
              <label>
                Собственная ванная комната
                <input
                  type="checkbox"
                  value="bathroom"
                  {...register("servicesInRoom")}
                />
              </label>
              <label>
                Вид на море
                <input
                  type="checkbox"
                  value="sea"
                  {...register("servicesInRoom")}
                />
              </label>
            </label>
          </form>
        </div>

        <BtnPraimary title="Подать заявку" />
      </form>
    </div>
  );
}



const arrHours = [
  { name: "3-5 часов", prop: "3-5 часов" },
  { name: "5-12 часов", prop: "5-12 часов" },
  { name: "12-24 часов", prop: "12-24 часов" },
  { name: "больше суток", prop: "сутки и больше" },
]

const arrFeatureCategory = [
  { name: "нет", prop: "нет" },
  { name: "есть, платно", prop: "есть, платно" },
  { name: "есть, бесплатно", prop: "есть, платно" },
]

const arrPayCategory = [
  { name: "только карта", prop: "только карта" },
  { name: "только наличные", prop: "только наличные" },
  { name: "наличные и карта", prop: "наличные и карта" },
]