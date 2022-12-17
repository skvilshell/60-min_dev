import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Residential.module.scss"
import iconLocation from '../../assets/img/location.svg'
import star from '../../assets/img/Star.svg'
import { useState } from "react";
import Reviews__score from "../../components/Reviews__score/index";
import Comment from "../../components/Comment";
import Room from "../../components/Room";
import Card from "../../components/Card";
import MiniRoom from "../../components/MiniRoom";
import BtnPraimary from "../../components/BtnPraimary/BtnPraimary";
import Carusel from "../../components/Carusel/Carusel";
import arrImage from '../../assets/db/images.json'
import axios from "axios";

export default function Residential() {

    const { id } = useParams()
    const [size, setSize] = useState(false)
    const [activeModal, setActiveModal] = useState(false)
    const [card, setCard] = useState({})



    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://60-min.ru/getProperty',
            params: {
                id: id
            }
        }).then(res => {
            setCard(res.data)
        })
    }, [])

    const numbersCategory = card.numbers?.map((item) => {
        return item.number_category
    })

    const sliceComments = card.comments?.slice(0, 4)
    const limitComments = card.comments?.slice(0, 10)

    let j = 1

    const [showDescription, setShowDescription] = useState(true)
    const [showFeatures, setShowFeatures] = useState(true)
    const [showComments, setShowComments] = useState(true)
    const subDescription = card.property?.description?.substring(0, 190);



    //! статика
    const comforts = ["Чай в номере", "Бесплатный Wi-Fi", "Холодильник", "Кондиционер", "Чай в номере", "Бесплатный Wi-Fi", "Холодильник", "Кондиционер"]
    const reviews__scores = [
        { title: "Чистота", score: 5 },
        { title: "Местоположение", score: 4.5 },
        { title: "Персонал", score: 4.2 },
        { title: "цена-качество", score: 2 }
    ]
    const feature = ["Чай в номере", "Холодильник", "Кондиционер", "Бесплатный Wi-Fi"];
    const sliceFeatures = feature.slice(0, 3)

    const addedFeuture = ["Ресторан", "Фитнес-зал", "Джакузи", "Бассейн", "Доставка в номер", "Круглосуточная стойка регистрации"]

    return (
        <div className={styles.root}>


            {
                activeModal &&
                <div className={styles.modalbg}>
                    <div className={styles.modal}>
                        <i onClick={() => setActiveModal(false)}>&#215;</i>
                        <h2>Забронировать</h2>
                        <h3>бронь по номеру</h3>
                        <a href="tel:#"><h3>+7(999)115-9845</h3></a>
                    </div>
                </div>
            }

            <h2 className={styles.title}>{card?.property?.title}</h2>
            <div className={styles.container}>
                <div className={styles.position}>
                    <img className={styles.position__img} src={iconLocation} alt="Геолокация"></img>
                    <p className={styles.position__text}>{card?.property?.address}</p>
                </div>
                <div className={styles.rate}>
                    <img className={styles.rate__img} src={star} alt="Иконка звезды"></img>
                    <p className={styles.rate__text}>5</p>
                </div>
            </div>
            <div className={styles.body}>
                < Carusel arr={arrImage} />
                <div className={styles.rend}>
                    <p className={styles.title}>{subDescription}</p>
                    <div className={styles.information}>
                        <div className={styles.mainContainer}>
                            <p className={styles.metro}>{card?.metro}</p>
                            <p className={styles.clock}>5 мин.</p>
                            <p className={styles.numbers}>{numbersCategory?.join()}</p>
                        </div>
                        <div className={styles.mainPrice}>
                            <p className={styles.mainPrice__text}>от <span>100</span> руб/час</p>
                            <BtnPraimary onClick={() => setActiveModal(true)} title={"Забронировать"} />
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
                                    className={styles.btnLook}
                                    type="button"
                                    onClick={() => { setShowDescription(false) }}>...Читать далее</button>
                            </p>
                            : <p
                                className={styles.description__text}>
                                {card.property.description}
                                <button
                                    type="button"
                                    className={styles.btnLook}
                                    onClick={() => { setShowDescription(true) }}>...Скрыть</button></p>
                    }
                </div>
                <div className={styles.features}>
                    <h2 className={styles.features__title}>Особенности размещения</h2>
                    <div className={styles.features__time}>
                        <div className={styles.features__in}>
                            <p className={styles.features__inTitle}>заезд после </p>
                            <p className={styles.features__inTime}>10:00</p>
                        </div>
                        <div className={styles.features__out}>
                            <p className={styles.features__outTitle}>отъезд до</p>
                            <p className={styles.features__outTime}>13:00</p>
                        </div>
                    </div>

                    {showFeatures
                        ?
                        <div className={styles.block__feature}>
                            {sliceFeatures.map((item, index) =>
                                <p className={styles.feature} key={index}>{item}</p>
                            )}
                            <button className={styles.btnLook} type="button" onClick={() => { setShowFeatures(0) }}>Читать далее</button>
                        </div>
                        :
                        <div className={styles.block__feature}>
                            {feature.map((item, index) =>
                                <p classNa me={styles.feature} key={index}>{item}</p>
                            )}
                            <div className={styles.addedFeutures}>
                                <p>Услуги:</p>

                                {addedFeuture.map((item, index) => (
                                    <div className={styles.addedFeuture} key={index}>{item}</div>
                                ))}
                            </div>
                            <button className={styles.btnLook} type="button" onClick={() => { setShowFeatures(1) }}>Скрыть</button>
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
                            sliceComments?.map((item) => (
                                <Comment
                                    key={item.id}
                                    name={item.name}
                                    rate={item.status}
                                    positive={item.like}
                                    negative={item.dislike} />
                            ))
                            :
                            limitComments?.map((item) => (
                                <Comment
                                    key={item.id}
                                    name={item.name}
                                    rate={item.status}
                                    positive={item.like}
                                    negative={item.dislike} />
                            ))
                        }

                    </div>
                    <button
                        className={styles.btnLook}
                        type="button"
                        onClick={() => { setShowComments(!showComments) }}
                    > {showComments ? "Показать ещё" : "Скрыть"}</button>
                </div>
                <div className={styles.rooms}>
                    <h2 className={styles.mainTitle}>Номера</h2>
                    <div className={styles.container__rooms}>
                        {card.numbers?.map((item, index) => (
                            size
                                ? <MiniRoom
                                    setActiveModal={setActiveModal}
                                    key={item.id}
                                    title={item.number_category}
                                    comforts={comforts}
                                    price={1000}
                                />
                                : <Room
                                    setActiveModal={setActiveModal}
                                    onClick={() => setActiveModal(true)}
                                    key={item.id}
                                    title={item.number_category}
                                    comforts={comforts}
                                    price={1000}
                                />
                        ))}
                    </div>
                </div>
                {/* <div className={styles.similar}>
                    <h2 className={styles.mainTitle}>Похожие</h2>
                    <div className={styles.cards}>
                        {cards?.map((item, index) => (
                            <div className={styles.card} key={index}>
                                <Card title={item.title} position={item.position} metro={item.metro} time={item.time} price={item.price} size={item.size} />
                            </div>
                        ))}
                    </div>
                </div> */}
            </div>
        </div>
    )
}