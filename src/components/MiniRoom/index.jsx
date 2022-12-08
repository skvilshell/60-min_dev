import React from "react";
import styles from "./MiniRoom.module.scss"
import preview from '../../assets/img/preview.svg'
import { useState } from "react";
import BtnPraimary from "../BtnPraimary/BtnPraimary";

export default function MiniRoom({ title, comforts, price }) {
    const times = ["1 час", "3 часа", "Ночь", "Сутки"]
    const [showComforts, setShowComforts] = useState(true)

    const subComforts = comforts.slice(0, 4)

    return (
        <div className={styles.root}>
            <h3 className={styles.title}>{title}</h3>
            <img className={styles.preview} src={preview} alt="Превью помещения"></img>
            <div className={styles.times}>
                {times.map((item, index) => (
                    <div className={styles.time} key={index} ><p>{item}</p></div>
                ))}
            </div>
            <div className={styles.comforts+" "+(showComforts&&styles.active)} onClick={() => { setShowComforts(!showComforts) }}>

                {showComforts
                    ?
                    subComforts.map((item, index) => (
                        <div className={styles.comfort} key={index}><p>{item}</p></div>
                    ))
                    :
                    comforts.map((item, index) => (
                        <div className={styles.comfort} key={index}><p>{item}</p></div>
                    ))
                }
            </div>
            <div className={styles.rent}>
                <p className={styles.price}>{price} ₽</p>

                <BtnPraimary
                    title={"Забронировать"}
                    Click={() => { }} />
            </div>
        </div>)
}