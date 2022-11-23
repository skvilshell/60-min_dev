import React from 'react'
import arrow from '../../assets/img/arrow.svg'
import styles from './BtnPanelList.module.scss'

export default function BtnPanelList({ title, onClick }) {
   return (
      <div className={styles.root} onClick={onClick}>
         <p className={styles.title} >
            {
               title.split(" ").map((str, index) => (
                  <span key={index}>{str} <br /> </span>
               ))
            }
         </p>
         <img className={styles.arrow} src={arrow} alt="" />
      </div>
   )
}
