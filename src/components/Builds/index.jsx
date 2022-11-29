import React, { useState } from "react";
import styles from './builds.module.scss'
import { useDispatch, useSelector } from "react-redux"
import { setCityId } from '../../redux/slices/citysCategoriesSlice'
import Card from "../../components/Card";
import { Link } from "react-router-dom";
import { CardLarge, CardMedium, CardSmall, CardSmallest } from "../Skeletons";


export default function Builds({ facility }) {
    var i = 0;
    let dimension768 = false, dimension576 = false, load = false, dimension420 = false, dimension1000 = true;

    if (window.innerWidth < 768 && window.innerWidth > 576) {
        i = 1;
        dimension768 = true;
        dimension1000 = false
    }

    if (window.innerWidth < 576 && window.innerWidth > 420) {
        dimension576 = true;
        dimension1000 = false
    }

    if (window.innerWidth < 420) {
        dimension420 = true;
        dimension1000 = false
    }

    const premises = [
        {
            title: "SPB HOTEL",
            position: "ул. Марата, д. 61, кв. 13 (в арку на что то там еще",
            metro: "Владимирская", time: "от 2х часов", price: "1,000", size: i
        },
        {
            title: "SPB HOTEL",
            position: "ул. Марата, д. 61, кв. 13 (в арку на что то там еще",
            metro: "Владимирская",
            time: "от 2х часов",
            price: "1,000",
            size: i
        },
        {
            title: "SPB HOTEL",
            position: "ул. Марата, д. 61, кв. 13 (в арку на что то там еще",
            metro: "Владимирская",
            time: "от 2х часов",
            price: "1,000",
            size: i
        },
        {
            title: "SPB HOTEL", position: "ул. Марата, д. 61, кв. 13 (в арку на что то там еще", metro: "Владимирская", time: "от 2х часов", price: "1,000", size: i
        },
        {
            title: "SPB HOTEL", position: "ул. Марата, д. 61, кв. 13 (в арку на что то там еще", metro: "Владимирская", time: "от 2х часов", price: "1,000", size: i
        },
        {
            title: "SPB HOTEL", position: "ул. Марата, д. 61, кв. 13 (в арку на что то там еще", metro: "Владимирская", time: "от 2х часов", price: "1,000", size: i
        },
    ]

    const dispatch = useDispatch()
    const activeSortItem = useSelector(state => state.city.city)
    const [activePopup, setActivePopup] = useState(false)
    const sortItem = [
        { name: "Санкт-Петербург", sortProperty: 'spb' },
        { name: "Москва", sortProperty: 'msk' },
        { name: "Сочи", sortProperty: 'sochi' },
    ]

    return (
        <div className={styles.root}>
            <div className={styles.builds__header}>
                <div className={styles.container}>
                    <div className={styles.select}>
                        <div className={styles.sort__label} onClick={() => setActivePopup((prev) => !prev)}>

                            <span >{activeSortItem.name}</span>
                            <svg className={activePopup ? styles.active : ''} width="10" height="6" viewBox="0 -1 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="rgb(148, 148, 148)">
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
                    <h1>{facility}</h1>
                    {
                        dimension768 && <div className={styles.mainFacility}>

                            {load
                                ? <CardLarge />
                                :
                                <Card
                                    title={premises[0].title}
                                    position={premises[0].position}
                                    metro={premises[0].metro}
                                    time={premises[0].time}
                                    price={premises[0].price}
                                    size={0}
                                    key={0}
                                />
                            }
                        </div>
                    }
                </div>
                <div className={styles.zaglushka}></div>
            </div>
            <div className={styles.facilitys}>
                {premises.map((premises, index) =>
                    load
                        ? <div>
                            {dimension1000 && <CardLarge />}
                            {dimension768 && <CardMedium />}
                            {dimension576 && <CardSmall />}
                            {dimension420 && <CardSmallest />}
                        </div>
                        :
                        dimension576
                            ?
                            <Link to="/">
                                <Card
                                    title={premises.title}
                                    position={premises.position}
                                    metro={premises.metro}
                                    time={premises.time}
                                    price={premises.price}
                                    size={premises.size}
                                    key={index} />
                            </Link>
                            :
                            <Card
                                title={premises.title}
                                position={premises.position}
                                metro={premises.metro}
                                time={premises.time}
                                price={premises.price}
                                size={premises.size}
                                key={index} />)}
            </div>
            <div className={styles.zaglushka2}></div>
        </div>
    )
}
