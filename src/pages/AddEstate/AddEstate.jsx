import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import BtnPraimary from "../../components/BtnPraimary/BtnPraimary";
import styles from "./AddEstate.module.scss";

export default function AddEstate() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  async function onSubmit(data) {
    console.log(data);
    try {
      await axios({
        url: "https://60-min.ru/home/properties/addProperty",
        headears: {
          "Content-type": "application/json",
        },
        params: {
          property: data,
        },
        method: "GET",
      }).then(({ data }) => {
        return data;
      });
    } catch (e) {
      console.log("Sending error", e);
    }
  }
  return (
    <div>
      <h1 className={styles.header}>Добавьте свой объект в каталог</h1>
      <p className={styles.attention}>
        Все пункты в дальнейшем можно будет поменять
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container}>
          <h1 className={styles.container__header}>Основные сведения</h1>
          <form>
            <div className={styles.property_type}>
              <label className={styles.property_id}>
                <div>Тип объекта</div>
                <div>
                  <label className={styles.property_label}>
                    <input
                      type="radio"
                      value="1"
                      className={styles.property_input}
                      {...register("property_type_id", {
                        required: "Это обязательное поле",
                      })}
                    />
                    Отели
                  </label>
                  <label className={styles.property_label}>
                    <input
                      type="radio"
                      value="2"
                      className={styles.property_input}
                      {...register("property_type_id", {
                        required: "Это обязательное поле",
                      })}
                    />
                    Аппартаменты
                  </label>
                  <label className={styles.property_label}>
                    <input
                      type="radio"
                      value="3"
                      className={styles.property_input}
                      {...register("property_type_id", {
                        required: "Это обязательное поле",
                      })}
                    />
                    Дома
                  </label>
                </div>
              </label>
            </div>

            <div className={styles.object__textareas}>
              <label>
                Название объекта
                <textarea
                  placeholder="Отель Plaza"
                  {...register("title", { required: "Это обязательное поле" })}
                />
                <p className={styles.object__atention}>
                  Оно будет отображаться на сайте (если у объекта нет названия,
                  укажите адрес: улицу и дом)
                </p>
              </label>
              <label>
                Описание объекта
                <textarea
                  placeholder="В паре предложений опишите основные преимущества вашего объекта"
                  {...register("description", {
                    required: "Это обязательное поле",
                  })}
                />
              </label>
              <label>
                Подробное описание объекта
                <textarea
                  placeholder="Подробно расскажите о своём объекте"
                  {...register("description", {
                    required: "Это обязательное поле",
                  })}
                />
              </label>
              <label>
                Адрес объекта
                <textarea
                  placeholder="Введите полный адрес, начиная с города"
                  {...register("address", {
                    required: "Это обязательное поле",
                  })}
                />
              </label>
              <label>
                На какое минимальное и максимальное время можно снять объект
                <label>
                  min
                  {/* Требуется переделать */}
                  <select>
                    <option {...register("minimum", { required: true })}>
                      2 часа
                    </option>
                  </select>
                </label>
                <label>
                  max
                  {/* Требуется переделать */}
                  <select>
                    <option {...register("minimum")}>2 суток</option>
                  </select>
                </label>
                <p className={styles.attention}>
                  Максимальное время можно не указывать
                </p>
              </label>
            </div>
          </form>
        </div>

        <div className={styles.container}>
          <h1 className={styles.container__header}>Особенности размещения</h1>
          <form>
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
          </form>
        </div>
        <div className={styles.container}>
          <h1 className={styles.container__header}>Услуги на территории</h1>
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
        <div className={styles.container}>
          <h1 className={styles.header}>Категории номеров</h1>
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
