import React from 'react'
import s from './BtnSecondary.module.scss'

export default function BtnSecondary({ title }) {
   return (
      <button className={s.root}>
         {title}
      </button>
   )
}