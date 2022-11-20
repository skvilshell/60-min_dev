import React from 'react'
import styles from './style.module.scss'

export default function BtnSucces({ title }) {
   return (
      <button className={styles.root}>
         {title}
      </button>
   )
}
