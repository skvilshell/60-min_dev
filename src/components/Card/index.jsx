import React from "react";
import style1 from './Card.module.scss'
import style2 from './MiniCard.module.scss'
import style3 from './SmallCard.module.scss'
import preview from '../../assets/img/preview.svg'
import BtnPraimary from "../BtnPraimary/BtnPraimary";





export default function Card({ title, position, metro, time, price, size1 }) {
    const styles = [style1, style2, style3]
    const size = size1 || 0
    return (
        <div className={styles[size].root}>
            <img src={preview} alt="Превью помещения" />
            <div className={styles[size].text}>
                <div className={styles[size].container}>
                    <h3 className={styles[size].title}>{title}</h3>
                    {
                        size !== 2 && <p className={styles[size].position}>{position}</p>
                    }
                    <p className={styles[size].metro}>{metro}</p>
                    <p className={styles[size].time}>{time}</p>
                </div>
            </div>
            <div className={styles[size].price__button}>
                <h3><span>от </span>{price}<span> руб</span></h3>
                {
                    size !== 2 && <BtnPraimary
                        className={styles[size].btn}
                        title={"подробнее"}
                    />
                }
            </div>
        </div>
    )
}