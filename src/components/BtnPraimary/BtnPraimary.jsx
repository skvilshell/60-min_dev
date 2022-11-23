import React from 'react'
import s from './BtnPraimary.module.scss'

export default function BtnPraimary({ title }) {
   return (
      <button className={s.root}>
         {title}
      </button>
   )
}
