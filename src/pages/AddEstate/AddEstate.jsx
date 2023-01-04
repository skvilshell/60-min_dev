import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import BtnPraimary from "../../components/BtnPraimary/BtnPraimary";
import BtnSecondary from "../../components/BtnSecondary";
import styles from "./AddEstate.module.scss";
import Tab from "./Tab/Tab";
import InputWithTitle from "../../components/InputWithTitle";
import AreaWithTitle from "../../components/areaWithTitle/AreaWithTitle";
import Dropdown from "./dropdown/Dropdown";
import Checkbox from "./checkbox/Checkbox";

export default function AddEstate() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur",
  });

  const [minTime, setMinTime] = useState({ name: "выберите значение" })
  const [maxTime, setMaxTime] = useState({ name: "выберите значение" })
  const [numbers, setNumbers] = useState([])


  function onSubmit(data) {
    //   axios({
    //     url: "https://60-min.ru/home/properties/addProperty",
    //     headears: {
    //       "Content-type": "application/json",
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
            <Dropdown
              arr={arrHours}
              activeElement={minTime}
              setActiveElment={setMinTime}
            />
            <InputWithTitle
              title="Адресс"
              type="address"
              {...register("address", {
                required: "Это обязательное поле",
              })}
            />
          </div>
          {/* <div className={styles.select_time_elements}>
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

          </div> */}
        </div>
        {/*//*   Особенности размещения */}
        {/* <div className={styles.container}>
          <h3 className={styles.container__header}>Особенности размещения</h3>


          <div className={styles.feature}>
            <div className={styles.feature_item}>
              <p>Интернет</p>
              <Dropdown
                arr={arrHours}
                activeElement={maxTime}
                setActiveElment={setMaxTime}
              />
            </div>
            <div className={styles.feature_item}>
              <p>Парковка</p>
              <Dropdown
                arr={arrHours}
                activeElement={maxTime}
                setActiveElment={setMaxTime}
              />
            </div>
            <div className={styles.feature_item}>
              <p>Оплата</p>
              <Dropdown
                arr={arrHours}
                activeElement={maxTime}
                setActiveElment={setMaxTime}
              />
            </div>
            <div className={styles.feature_item}>
              <p>Доступность с животными</p>
              <Dropdown
                arr={arrHours}
                activeElement={maxTime}
                setActiveElment={setMaxTime}
              />
            </div>
            <div className={styles.timediff}>
              <p>Время заезда и отъезда</p>
              <div className={styles.feature_item}>
                <p>заезд от</p>
                <Dropdown
                  arr={arrHours}
                  activeElement={maxTime}
                  setActiveElment={setMaxTime}
                />
              </div>
              <div className={styles.feature_item}>
                <p>отъезд до</p>
                <Dropdown
                  arr={arrHours}
                  activeElement={maxTime}
                  setActiveElment={setMaxTime}
                />
              </div>
            </div>

            <div className={styles.feature_item}>
              <p>Курение на территории</p>
              <Dropdown
                arr={arrHours}
                activeElement={maxTime}
                setActiveElment={setMaxTime}
              />
            </div>
          </div>

        </div> */}
        {/*//*   Услуги на территории */}
        {/* <div className={styles.container}>
          <h3 className={styles.container__header}>Услуги на территории</h3>
          <div className={styles.service}>

            <Checkbox
              id={'one'}
              text={"Ресторан"}
              {...register('service')}
            />
            <Checkbox
              id={'second'}
              text={"Бассейн"}
              {...register('service')}
            />
            <Checkbox
              id={'three'}
              text={"Доставка в номер"}
              {...register('service')}
            />
            <Checkbox
              id={'four'}
              text={"Джакузи"}
              {...register('service')}
            />
            <Checkbox
              id={'five'}
              text={"Фитнес-зал"}
              {...register('service')}
            />
            <Checkbox
              id={'six'}
              text={"Собственный пляж"}
              {...register('service')}
            />
            <Checkbox
              id={'seven'}
              text={"Сауна"}
              {...register('service')}
            />
            <Checkbox
              id={'eight'}
              text={"Игровая площадка"}
              {...register('service')}
            />
            <Checkbox
              id={'nine'}
              text={"Спа-центр"}
              {...register('service')}
            />
            <Checkbox
              id={'ten'}
              text={"Круглосуточная стойка регистрации"}
              {...register('service')}
            />

          </div>
        </div> */}
        {/*//*   Категории номеров */}
        <h3 className={styles.header}>Категории номеров</h3>
        <div className={styles.container}>
          <h3>Новая котегория</h3>
          <InputWithTitle
            title={"название котегории"}
            {...register("title", {
              required: true
            })}
          />
          {errors?.title && <p className={styles.error}>заполните поле</p>}
          <InputWithTitle
            title={"количсество номеров в категории"}
            {...register("title", {
              required: true
            })}
          />
          {errors?.title && <p className={styles.error}>заполните поле</p>}
        </div>


        <div className={styles.sumbit_butttons}>
          <BtnSecondary title="Добавить категорию номера" />
          {numbers && <BtnPraimary title="Подать заявку" type='submit' />}
        </div>
      </form>
    </div>
  );
}

const addNewNumber = () => {
  setNumbers((prev) => [...prev, {
    title: '',
    sity_id: null,
    district_id: null,
    metro_id: null,
    sity: "",
    address: '',
    status: 0,
    description: ''
  },])
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

