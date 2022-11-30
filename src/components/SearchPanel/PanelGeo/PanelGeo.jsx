import React from 'react'
import s from './PanelGeo.module.scss'

export default function PanelGeo() {
   return (
      <div className={s.root}>
         <div className={s.tab}>
            <div className={s.tab_element}>
               Метро
            </div>
            <div className={s.tab_element}>
               Район
            </div>
         </div>
      </div>
   )
}
