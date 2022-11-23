import React from 'react'
import s from './BtnPanel.module.scss'

export default function BtnPanel({ title, onClick, icon,className }) {

   return (
      <div className={s.root + " " + className} onClick={onClick}>
         {icon?<img src={icon} alt="" />:title
         }

      </div>
   )
}
