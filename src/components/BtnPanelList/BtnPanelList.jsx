import React, { useState } from 'react'
import arrow from '../../assets/img/arrow.svg'
import styles from './BtnPanelList.module.scss'

export default function BtnPanelList({ obj, children, activeEl, setActiveEl }) {


   return (
      <div className={styles.root} onClick={() => setActiveEl(obj.index)}>
         <div className={styles.wrapper + " " + ((activeEl === obj.index) && styles.active)} >
            <p className={styles.title} >
               {
                  obj.title.split(" ").map((str, index) => (
                     <span key={index}>{str} <br /> </span>
                  ))
               }
            </p>
            <svg className={styles.arrow} width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M2.27113 25L0 22.7697L10.4577 12.5L0 2.23029L2.27113 0L15 12.5L2.27113 25Z" fill="#3A3A3A" />
            </svg>
         </div>
         {(activeEl === obj.index) && children}
      </div>

   )
}
