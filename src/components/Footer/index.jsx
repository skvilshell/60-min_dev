import React from 'react'
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.svg'

export default function Footer() {
    return (
        <footer className={styles.root}>
            <div className={styles.footer__container1}>
                <div className={styles.footer__info}>
                    <div className={styles.footer__title}>
                        <img className={styles.logo} src={logo} alt="Логотип" />
                    </div>
                    <div className={styles.footer__menu}>
                        <Link to="/" className={styles.footer__button}>
                            Отели
                        </Link>
                        <Link to="/" className={styles.footer__button}>
                            Квартиры
                        </Link>
                        <Link to="/" className={styles.footer__button}>
                            Экстрим
                        </Link>
                    </div>
                </div>
                <div className={styles.footer__actions}>
                    <Link to="/" className={styles.footer__button}>
                        Стать партнёром
                    </Link>
                    <Link to="/" className={styles.footer__button}>
                        Добавить объект
                    </Link>
                </div>
            </div>
            <div className={styles.footer__container2}>
                <p>© 2020 Бронирование отелей на час “60-Мин.РФ” <br />
                <a href="https://бестовер-разрабыСайто.ru">Сайт сделалан</a> </p>
            </div>
        </footer>
    )
}
