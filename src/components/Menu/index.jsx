import React, { useEffect, useState } from "react";
import styles from './Menu.module.scss'
import exit from '../../assets/img/exit.svg'
import { useDispatch, useSelector } from "react-redux"
import { setCityId } from '../../redux/slices/citysCategoriesSlice'
import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.svg'
import Popup from "../Popup/Popup";
import { setShowMenu } from "../../redux/slices/menu";

export default function Menu({ email }) {
    const activeSortItem = useSelector(state => state.city.city)
    const showMenu = useSelector(state => state.menu.menu)
    const dispatch = useDispatch()
    const navArr = [
        {
            title: "главная",
            to: "/"
        },
        {
            title: "отели",
            to: `/catalog/hotel?city=${activeSortItem}`
        },
        {
            title: "квартиры",
            to: `/catalog/appartment?city=${activeSortItem}`
        },
        {
            title: "экстрим",
            to: `/catalog/house?city=${activeSortItem}`
        },
        {
            title: "партнерам",
            to: `/catalog/partner`
        }
    ]



    return (
        <div className={styles.root + " " + (showMenu && styles.showMenu)}>
            <span onClick={()=>dispatch(setShowMenu(false))} className={styles.close}>&#215;</span>
            <div className={styles.menu__container}>
                <p>{email}</p>
                <div className={styles.menu__window}>
                    <Popup />
                    <div className={styles.menu__buttons}>
                        {
                            navArr.map((item, index) =>
                                <div
                                    className={styles["link" + index]} key={index}>
                                    <Link to={item.to} >
                                        <p>{item.title}</p>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <img className={styles.logo} src={logo} alt="Логотип" />
        </div>
    )
}