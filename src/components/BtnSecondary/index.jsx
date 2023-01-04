import React from 'react'
import s from './BtnSecondary.module.scss'

export default function BtnSecondary({ title, ...props }) {
   return (
      <button className={s.root} {...props}>
         {title}
      </button>
   )
}