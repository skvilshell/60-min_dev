import React from 'react'
import styles from './LKCard.module.scss'
import preview from '../../assets/img/preview.svg'
import BtnSuccess from '../BtnSuccess/BtnSucces'

export default function LKCard({title}){
    const btnTitle=["Редактировать","Статистика","Отзывы"]

    return(
        <div className={styles.root}>
            <h2 className={styles.title}>{title}</h2>
            <img className={styles.preview} src={preview} alt="Превью" />
            <div className={styles.container}>
                {btnTitle.map((item,index)=>(
                    <div className={styles.button} key={index}>
                        <BtnSuccess title={item}/>
                    </div>
                ))}
            </div>
        </div>
    )
}