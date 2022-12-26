import React from 'react'
import LKCard from '../../components/LKCard'
import styles from './MyAds.module.scss'
import BtnPraimary from '../../components/BtnPraimary/BtnPraimary'
import { useState } from 'react'

export default function MyAds() {
    const ads = ["Отель", "Отель", "Отель", "Отель", "Отель", "Отель"]
    const title = "Стандарт"
    const date = "25.08.2022"
    const btnTitle = [
        {
            text: "Мои объявления",
            to: "/account/properties"
        },
        {
            text: "Смена пароля",
            to: "/account/change-password"
        },
        {
            text: "Ваша подписка",
            to: "/account/subscription"
        },
        {
            text: "Тех. поддержка",
            to: "/account/support"
        }
    ]
    const [btnActive, setBtnActive] = useState(-1)

    return (
        <div className={styles.root}>
            <div className={styles.ads}>
                {ads.map((item, index) => (
                    <LKCard key={index} title={item} />
                ))}
            </div>
            <div className={styles.info}>
                <div className={styles.container}>
                    <h3>Личный кабинет</h3>
                    {btnTitle.map((item, index) => (
                        <div
                            className={index === btnActive ? styles.container__button__active : styles.container__button}
                            key={index}
                            onClick={() => { setBtnActive(index) }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div className={styles.subscribe}>
                    <h3>Ваша подписка</h3>
                    <h3 className={styles.subscribe__title}>{title}</h3>
                    <p className={styles.subscribe__date}>{date}</p>
                    <BtnPraimary title={"Настроить"} />
                </div>
            </div>
        </div>
    )
}