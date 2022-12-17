import React from "react";
import styles from "./Reviews__score.module.scss"

export default function Reviews__score({title,score}){
    length=score*20

    return(
        <div className={styles.root}>
            <p className={styles.title}>{title}</p>
            <div className={styles.wrapper}>
                <div className={styles.score} style={{width:length + "%"}}>
                    <p>{score}</p>
                </div>
            </div>
        </div>
    )
}