import React from 'react'
import styles from './LKCard.module.scss'
import preview from '../../assets/img/preview.svg'
import BtnSuccess from '../BtnSuccess/BtnSucces'
import { Navigate } from 'react-router-dom'

export default function LKCard({ title }) {
    const btnTitle = [
        "Редактировать", "Статистика", "Отзывы"
    ]
    
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>{title}</h2>
                <img className={styles.preview} src={preview} alt="Превью" />
            </div>
            <div className={styles.container}>
                {btnTitle.map((item, index) => (
                    <BtnSuccess
                        key={index}
                        title={item}
                        onClick={() => Navigate(item.to)} />
                ))}
            </div>
        </div>
    )
}