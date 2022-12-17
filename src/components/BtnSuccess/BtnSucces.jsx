import React from 'react'
import styles from './style.module.scss'

export default function BtnSucces({ title, ...prop }) {
   return (
      <button className={styles.root} {...prop}>
         {title}
      </button>
   )
}
