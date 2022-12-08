import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Residential.module.scss"
import iconLocation from '../../assets/img/location.svg'
import star from '../../assets/img/star.svg'
import { useState } from "react";
import Reviews__score from "../Reviews__score/index";
import Comment from "../Comment";
import Room from "../Room";
import Card from "../../components/Card";
import MiniRoom from "../MiniRoom";
import BtnPraimary from "../BtnPraimary/BtnPraimary";
import Carusel from "../Carusel/Carusel";
import arrImage from '../../assets/db/images.json'

export default function Residential({ title, position, rate, description, inTime, outTime, features, rendTitle, metro, clock, numbers, mainPrice }) {
    const path = ["Каталог отелей", "Апартаменты в Санкт-Петербурге", title];



    const [size, setSize] = useState(false)

    useEffect(() => {
        if (innerWidth < 840) {
            setSize(true)
        }

        if (window.innerWidth < 576) {
            j = 0
        }
    }, [innerWidth])

    const comments = [
        {
            name: "Мария",
            rate: 4,
            positive: "Понравилось то, что наш номер был зеркальным. Это было хорошо. 100% вернемся сюда снова.",
            negative: "Администратор Наталья не клиентоориентированна, хамит и грубит клиентам когда те не с первого раза понимают предоставленную информацию."
        },
        {
            name: "Мария",
            rate: 5,
            positive: "Понравилось то, что наш номер был зеркальным. Это было хорошо. 100% вернемся сюда снова.",
            negative: "Администратор Наталья не клиентоориентированна, хамит и грубит клиентам когда те не с первого раза понимают предоставленную информацию."
        },
        {
            name: "Мария",
            rate: 4,
            positive: "Понравилось то, что наш номер был зеркальным. Это было хорошо. 100% вернемся сюда снова.",
            negative: "Администратор Наталья не клиентоориентированна, хамит и грубит клиентам когда те не с первого раза понимают предоставленную информацию."
        },
        {
            name: "Мария",
            rate: 0, positive: "",
            negative: "Администратор Наталья не клиентоориентированна, хамит и грубит клиентам когда те не с первого раза понимают предоставленную информацию."
        },
        {
            name: "Мария",
            rate: 4,
            positive: "Понравилось то, что наш номер был зеркальным. Это было хорошо. 100% вернемся сюда снова.Понравилось то, что наш номер был зеркальным. Это было хорошо. 100% вернемся сюда снова.Понравилось то, что наш номер был зеркальным. Это было хорошо. 100% вернемся сюда снова.Понравилось то, что наш номер был зеркальным. Это было хорошо. 100% вернемся сюда снова.", negative: "Администратор Наталья не клиентоориентированна, хамит и грубит клиентам когда те не с первого раза понимают предоставленную информацию."
        },
        {
            name: "Мария", rate: 4,
            positive: "Понравилось то, что наш номер был зеркальным. Это было хорошо. 100% вернемся сюда снова.",
            negative: "Администратор Наталья не клиентоориентированна, хамит и грубит клиентам когда те не с первого раза понимают предоставленную информацию."
        },
        {
            name: "Мария",
            rate: 40,
            positive: "Понравилось то, что наш номер был зеркальным. Это было хорошо. 100% вернемся сюда снова.",
            negative: ""
        },
        {
            name: "Мария",
            rate: 4,
            positive: "Понравилось то, что наш номер был зеркальным. Это было хорошо. 100% вернемся сюда снова.",
            negative: "Администратор Наталья не клиентоориентированна, хамит и грубит клиентам когда те не с первого раза понимают предоставленную информацию."
        }
    ];

    const sliceComments = comments.slice(0, 4)
    const limitComments = comments.slice(0, 10)

    const rooms = [
        {
            title: "Стандарт",
            comforts: ["Чай в номере", "Бесплатный Wi-Fi", "Холодильник", "Кондиционер", "Чай в номере", "Бесплатный Wi-Fi", "Холодильник", "Кондиционер"],
            price: "1000"
        },
        {
            title: "Полулюкс",
            comforts: ["Чай в номере", "Бесплатный Wi-Fi", "Холодильник", "Кондиционер"],
            price: "1000"
        },
        {
            title: "Люкс",
            comforts: ["Чай в номере", "Бесплатный Wi-Fi", "Холодильник", "Кондиционер"],
            price: "1000"
        }
    ]

    let j = 1


    const cards = [
        { title: "SPB HOTEL", position: "ул. Марата, д. 61, кв. 13 (в арку на что то там еще", metro: "Владимирская", time: "от 2х часов", price: "1,000", size: j },
        { title: "SPB HOTEL", position: "ул. Марата, д. 61, кв. 13 (в арку на что то там еще", metro: "Владимирская", time: "от 2х часов", price: "1,000", size: j },
        { title: "SPB HOTEL", position: "ул. Марата, д. 61, кв. 13 (в арку на что то там еще", metro: "Владимирская", time: "от 2х часов", price: "1,000", size: j },
        { title: "SPB HOTEL", position: "ул. Марата, д. 61, кв. 13 (в арку на что то там еще", metro: "Владимирская", time: "от 2х часов", price: "1,000", size: j },
        { title: "SPB HOTEL", position: "ул. Марата, д. 61, кв. 13 (в арку на что то там еще", metro: "Владимирская", time: "от 2х часов", price: "1,000", size: j },
        { title: "SPB HOTEL", position: "ул. Марата, д. 61, кв. 13 (в арку на что то там еще", metro: "Владимирская", time: "от 2х часов", price: "1,000", size: j },
    ]

    const reviews__scores = [{ title: "Чистота", score: 5 },
    { title: "Местоположение", score: 4.5 },
    { title: "Персонал", score: 4.2 },
    { title: "цена-качество", score: 2 }]

    const [showDescription, setShowDescription] = useState(true)
    const [showFeatures, setShowFeatures] = useState(true)
    const [showComments, setShowComments] = useState(true)

    const subDescription = description.substring(0, 190);
    

    const feature = features;
    const sliceFeatures = features.slice(0, 3)

    const addedFeuture = ["Ресторан", "Фитнес-зал", "Джакузи", "Бассейн", "Доставка в номер", "Круглосуточная стойка регистрации"]

    return (
        <div className={styles.root}>
            {
                //! ДОРАБОТАТЬ БЛОК
            }
            <div className={styles.path}>
                {
                    path.map((item, index) =>
                        <div className={styles.path__text} key={index}>
                            <Link to="/">{item}</Link>
                            <p>{index !== path.length - 1 && ">"}</p>
                        </div>
                    )
                }
            </div>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.container}>
                <div className={styles.position}>
                    <img className={styles.position__img} src={iconLocation} alt="Геолокация"></img>
                    <p className={styles.position__text}>{position}</p>
                </div>
                <div className={styles.rate}>
                    <img className={styles.rate__img} src={star} alt="Иконка звезды"></img>
                    <p className={styles.rate__text}>{rate}</p>
                </div>
            </div>
            <div className={styles.body}>
                < Carusel arr={arrImage} />
                <div className={styles.rend}>
                    <p className={styles.title}>{rendTitle}</p>
                    <div className={styles.information}>
                        <div className={styles.mainContainer}>
                            <p className={styles.metro}>{metro}</p>
                            <p className={styles.clock}>{clock}</p>
                            <p className={styles.numbers}>{numbers}</p>
                        </div>
                        <div className={styles.mainPrice}>
                            <p className={styles.mainPrice__text}>от <span>{mainPrice}</span> руб/час</p>
                            <BtnPraimary title={"Забронировать"} />
                        </div>
                    </div>
                </div>
                <div className={styles.description}>
                    <h2 className={styles.description__title}>Описание</h2>
                    {
                        showDescription
                            ? <p
                                className={styles.description__text}>
                                {subDescription}
                                <button
                                    type="button"
                                    onClick={() => { setShowDescription(false) }}>...Читать далее</button>
                            </p>
                            : <p
                                className={styles.description__text}>
                                {description}
                                <button
                                    type="button"
                                    onClick={() => { setShowDescription(true) }}>...Скрыть</button></p>
                    }
                </div>
                <div className={styles.features}>
                    <h2 className={styles.features__title}>Особенности размещения</h2>
                    <div className={styles.features__time}>
                        <div className={styles.features__in}>
                            <p className={styles.features__inTitle}>заезд после </p>
                            <p className={styles.features__inTime}>{inTime}</p>
                        </div>
                        <div className={styles.features__out}>
                            <p className={styles.features__outTitle}>отъезд до</p>
                            <p className={styles.features__outTime}>{outTime}</p>
                        </div>
                    </div>

                    {showFeatures
                        ?
                        <div className={styles.block__feature}>
                            {sliceFeatures.map((item, index) =>
                                <p className={styles.feature} key={index}>{item}</p>
                            )}
                            <button type="button" onClick={() => { setShowFeatures(0) }}>Читать далее</button>
                        </div>
                        :
                        <div className={styles.block__feature}>
                            {feature.map((item, index) =>
                                <p className={styles.feature} key={index}>{item}</p>
                            )}
                            <div className={styles.addedFeutures}>
                                <p>Услуги:</p>

                                {addedFeuture.map((item, index) => (
                                    <div className={styles.addedFeuture} key={index}>{item}</div>
                                ))}
                            </div>
                            <button type="button" onClick={() => { setShowFeatures(1) }}>Скрыть</button>
                        </div>
                    }
                </div>
                <div className={styles.reviews}>
                    <h2 className={styles.reviews__title}>Отзывы</h2>
                    <div className={styles.reviews__scores}>
                        {reviews__scores.map((item, index) => (
                            <Reviews__score title={item.title} key={index} score={item.score} />
                        ))}
                    </div>
                    <div className={styles.comments}>
                        {showComments
                            ?
                            sliceComments.map((item, index) => (
                                <Comment key={index} name={item.name} rate={item.rate} positive={item.positive} negative={item.negative} />
                            ))
                            :
                            limitComments.map((item, index) => (
                                <Comment
                                    key={index}
                                    name={item.name}
                                    rate={item.rate}
                                    positive={item.positive} negative={item.negative} />
                            ))
                        }

                    </div>
                    <button
                        type="button"
                        onClick={() => { setShowComments(!showComments) }}
                    > {showComments ? "Показать ещё" : "Скрыть"}</button>
                </div>
                <div className={styles.rooms}>
                    <h2 className={styles.mainTitle}>Номера</h2>
                    <div className={styles.container__rooms}>
                        {rooms.map((item, index) => (
                            size
                                ? <MiniRoom key={index} title={item.title} comforts={item.comforts} price={item.price} />
                                : <Room key={index} title={item.title} comforts={item.comforts} price={item.price} />
                        ))}
                    </div>
                </div>
                <div className={styles.similar}>
                    <h2 className={styles.mainTitle}>Похожие</h2>
                    <div className={styles.cards}>
                        {cards.map((item, index) => (
                            <div className={styles.card} key={index}>
                                <Card title={item.title} position={item.position} metro={item.metro} time={item.time} price={item.price} size={item.size} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}