import React from "react";
import { useState } from "react";
import star from '../../assets/img/star.svg'
import styles from "./Comment.module.scss"

export default function Comment({ name, rate, positive, negative }) {




    return (
        <div className={styles.root} >
            <div className={styles.header}>
                <p className={styles.name}>{name}</p>
                <div className={styles.rate}>
                    <img className={styles.rate__img} src={star} alt="Иконка звезды"></img>
                    <p className={styles.rate__text}>{rate}</p>
                </div>
            </div>
            {
                positive.replace(/\s/g, '').length > 0 && <p className={styles.positiveComment}> {positive}</p>
            }
            {
                negative.replace(/\s/g, '').length > 0 && <p className={styles.negativeComment}>{negative}</p>
            }
        </div>
    )
}