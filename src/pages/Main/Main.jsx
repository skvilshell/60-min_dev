import React, { useEffect, useState } from "react";
import s from "./s.module.scss";
import { useSelector, useDispatch } from "react-redux";
import SearchPanel from "../../components/SearchPanel/SearchPanel";
import { CardLarge, CardMedium } from "../../components/Skeletons";
import BtnPraimary from "../../components/BtnPraimary/BtnPraimary";

import svgMap from "../../assets/img/map.svg";
import svgStat from "../../assets/img/statistic.svg";
import svgAllin from "../../assets/img/allin.svg";
import Card from '../../components/Card'
import axios from 'axios'
import { setMetro } from "../../redux/slices/metros";
import { Link } from "react-router-dom";
import { setGeo } from "../../redux/slices/filter";
import { setDistrict } from "../../redux/slices/district";


export default function Main() {
  const dispatch = useDispatch()

  const activeCity = useSelector(state => state.city.city)
  const metros = useSelector(state => state.metro.metro)
  const district = useSelector(state => state.district.district)

  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://60-min.ru/getHotelsFiltered',
      params: {
        city: activeCity
      }
    }).then(res => {
      setCards(res.data.properties1)
      dispatch(setMetro(res.data.metros))
      dispatch(setDistrict(res.data.districts.filter((i) => i.city === activeCity)))
      console.log(district);
    }).catch(e => console.log(e))

    setLoading(true)
  }, [activeCity])

  return (
    <main id="search" className={s.root}>
      <section className={s.section__search}>
        <h1 align="center">
          подобрать отель на час <br /> в городе {activeCity.name}{" "}
        </h1>
        <SearchPanel />
      </section>

      <section className={s.section__best}>
        <div className={s.title}>
          <div className={s.container}>
            <div className={s.text}>
              <h1>
                ЛУЧШИЕ <br />
                ВАРИАНТЫ
                <br />в городе
              </h1>
              <h1 className={s.city}>{activeCity.name}</h1>
            </div>
            {
              loading
                ?
                <Card
                  title={cards[0]?.title}
                  position={cards[0]?.address}
                  metro={`${metros[cards[0]?.metro_id]?.name || 'нет'}`}
                  time={'от 2х'}
                  price={"1000"}
                  to={`/property/${cards[0]?.id}`}
                />
                : <CardLarge />
            }
          </div>
        </div>

        <div className={s.container}>
          <div className={s.cards}>
            {
              loading
                ? cards.map((item) =>
                  <Card
                    key={item.id}
                    title={item?.title}
                    position={item?.address}
                    metro={`${metros[item?.metro_id]?.name || 'нет'}`}
                    time={'от 2х'}
                    price={"1000"}
                    to={`/property/${item?.id}`}
                  />
                )
                : [...new Array(6)].map((_, i) => <CardMedium key={i} />)
            }
          </div>
        </div>
      </section>

      <section className={s.section__cause}>
        <div className={s.container}>
          <div className={s.title}>
            <p>
              БОЛЕЕ 200 000 ЧЕЛОВЕК ИЩУТ <br />
              ПОЧАСОВОЕ ЖИЛЬЕ НА
            </p>
            <span>60 мин.рф</span>
          </div>
          <p>
            Люди ищут почасовые отели и аппартаменты <br />
            на нашем сайте для следующих поводов
          </p>
          <div className={s.grid}>
            <div className={s.grid_element + " " + s.grid_element1}>
              <h3>Романтическое свидание</h3>
            </div>
            <div className={s.grid_element + " " + s.grid_element2}>
              <h3>Для новобрачных</h3>
            </div>
            <div className={s.grid_element + " " + s.grid_element3}>
              <h3>Отдохнуть</h3>
            </div>
            <div className={s.grid_element + " " + s.grid_element4}>
              <h3>Поговорить по душам</h3>
            </div>
            <div className={s.grid_element + " " + s.grid_element5}>
              <h3>Фотосессия</h3>
            </div>
            <div className={s.grid_element + " " + s.grid_element6}>
              <h3>Вечеринка</h3>
            </div>
          </div>
        </div>
      </section>

      <section className={s.section__superiority}>
        <div className={s.block}>
          <div className={s.block_text}>
            <h2 className={s.block_title}>
              самый полный каталог почасового жилья{" "}
            </h2>
            <p className={s.block_subtitle}>
              Большой выбор жилья как в центре, так и в спальных районах крупных
              туристических городов. На сайте доступны предложения из Москвы,
              Санкт-Петербурга и Сочи.
            </p>
          </div>
          <img src={svgMap} alt="..." />
        </div>

        <div className={s.block}>
          <img src={svgStat} alt="..." />
          <div className={s.block_text}>
            <h2 className={s.block_title}>работа без посредников и наценок</h2>
            <p className={s.block_subtitle}>
              Сайт напрямую сотрудничает с отелями и арендодателями, поэтому
              цены остаются на том же уровне.{" "}
            </p>
          </div>
        </div>

        <div className={s.block}>
          <div className={s.block_text}>
            <h2 className={s.block_title}>
              вся важная информация о квартирах и отелях в одном месте{" "}
            </h2>
            <p className={s.block_subtitle}>
              Больше не надо сравнивать условия проживания, фотографии и цены на
              разных сайтах. Выбор жилья стал проще и быстрее!
            </p>
          </div>
          <img src={svgAllin} alt="..." />
        </div>
      </section>

      <section className={s.section__caution}>
        <p>
          Чем больше срок аренды, тем меньше стоимость одного часа. Выгодно
          остаться на подольше!
        </p>
        <a href="#search">
          <BtnPraimary title={"Подобрать решение для вас"} />
        </a>
      </section>
    </main>
  );
}
