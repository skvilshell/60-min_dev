import React from "react"
import styles from "./Room.module.scss"
import preview from '../../assets/img/sec3_item.jpg'
import { useState } from "react"
import BtnPraimary from "../BtnPraimary/BtnPraimary"

export default function Room({ title, comforts, price }) {

    const times = ["1 час", "3 часа", "Ночь", "Сутки"]
    const [showComforts, setShowComforts] = useState(true)

    const subComforts = comforts.slice(0, 4)

    return (
        <div className={styles.root}>
            <img className={styles.preview} src={preview} alt="Превью помещения"></img>
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.times}>
                    {times.map((item, index) => (
                        <div className={styles.time} key={index} ><p>{item}</p></div>
                    ))}
                </div>

                {showComforts
                    ?
                    <>
                        <div className={styles.comforts} onClick={() => { setShowComforts(false) }}>
                            {subComforts.map((item, index) => (
                                <div className={styles.comfort} key={index}><p>{item}</p></div>
                            ))}
                        </div>
                        <div className={styles.rent}>
                            <h3 className={styles.price}>{price} ₽</h3>
                            <BtnPraimary
                                Click={() => { console.log("hello") }}
                                title={"Забронировать"} />
                        </div>
                    </>
                    :
                    <div className={styles.fullContainer} onClick={() => { setShowComforts(true) }}>
                        {
                            comforts.map((item, index) => (
                                <div className={styles.comfort} key={index}>
                                    <p>{item}</p>
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    )
}