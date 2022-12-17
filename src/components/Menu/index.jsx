import React, { useEffect, useState } from "react";
import styles from './Menu.module.scss'
import exit from '../../assets/img/exit.svg'
import { useDispatch, useSelector } from "react-redux"
import { setCityId } from '../../redux/slices/citysCategoriesSlice'
import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.svg'

export default function Menu({email}){
    const navArr = ["главная", "отели", "квартиры", "экстрим"]
    var activeNav;
    const dispatch = useDispatch()
    const activeSortItem = useSelector(state => state.city.city)
    const [activePopup, setActivePopup] = useState(false)
    const sortItem = [
        { name: "Санкт-Петербург", sortProperty: 'spb' },
        { name: "Москва", sortProperty: 'msk' },
        { name: "Сочи", sortProperty: 'sochi' },
    ]

        if(window.location.href==="http://localhost:5173/")
    {
        activeNav=0;
    }
    else if(window.location.href==="http://localhost:5173/hotels")
    {
        activeNav=1;
    }
    else if(window.location.href==="http://localhost:5173/apartments")
    {
        activeNav=2;
    }
    else if(window.location.href==="http://localhost:5173/extreme")
    {
        activeNav=3;
    }


    return(
        <div className={styles.root}>
            <div className={styles.menu__exit}>
                <img src={exit} alt="крестик" onClick={()=>{console.log(1)}}></img>
            </div>
            <div className={styles.menu__container}>
                <p>{email}</p>
                <div className={styles.menu__window}>
                    <div className={styles.select}>
                        <div className={styles.sort__label} onClick={() => setActivePopup((prev) => !prev)}> 
                            <span >{activeSortItem.name}</span>
                            <svg className={activePopup ? styles.active : ''} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                                fill="#fff" />
                            </svg>
                        </div>

                        {
                            activePopup &&
                            <div className={styles.sort__popup}>
                            <ul>
                                {
                                    sortItem.map((item, i) => (
                                        <li
                                        key={`${i + item}`}
                                        onClick={() => { dispatch(setCityId(item)); setActivePopup(false) }}
                                        className={activeSortItem.sortProperty === item.sortProperty ? styles.active : ''}
                                        >{item.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        }
                        </div>
                    <div className={styles.menu__buttons}>
                        <ul className={styles.menu__button}>
                        {
                            navArr.map((item, index) =>
                                <li className={activeNav==index ? styles.active:""} key={index}>
                                    <Link to="/" >
                                        <p>{item}</p>
                                    </Link>
                                </li>
                            )
                        }
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.menu__logo}>
                <img className={styles.logo} src={logo} alt="Логотип" />
            </div>
        </div>
    )
}