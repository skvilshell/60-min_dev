import React from 'react'
import styles from './MyAds.module.scss'
import BtnPraimary from '../../components/BtnPraimary/BtnPraimary'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function MyAds() {

    const title = "Стандарт"
    const date = "25.08.2022"
    const btnTitle = [
        {
            text: "Мои объявления",
            to: "/personal_account/ads"
        },
        {
            text: "Смена пароля",
            to: "/personal_account/change-password"
        },
        {
            text: "Ваша подписка",
            to: "/personal_account/subscription"
        },
        {
            text: "Тех. поддержка",
            to: "/personal_account/support"
        }
    ]
    const [btnActive, setBtnActive] = useState(-1)

    return (
        <div className={styles.root}>

            <Outlet />

            <div className={styles.info}>
                <div className={styles.container}>
                    <h3>Личный кабинет</h3>
                    <div className={styles.links}>
                        {btnTitle.map((item, index) => (
                            <Link
                                to={item.to}
                                className={index === btnActive ? styles.container__button__active : styles.container__button}
                                key={index}
                                onClick={() => { setBtnActive(index) }}
                            >
                                {item.text}
                            </Link>
                        ))}
                    </div>
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