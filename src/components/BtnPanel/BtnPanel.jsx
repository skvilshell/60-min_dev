import React from 'react'
import s from './BtnPanel.module.scss'

export default function BtnPanel({ title, Click, icon, ClassName }) {

   return (
      <div className={s.root + " " + ClassName} onClick={Click}>
         {
            icon ? <img src={icon} alt="" /> : title
         }

      </div>
   )
}
