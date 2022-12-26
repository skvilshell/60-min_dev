import React, { useState, useEffect, useRef } from 'react'
import s from './PanelGeo.module.scss'
import { useDispatch, useSelector } from "react-redux"
import { setGeo } from '../../../redux/slices/filter'





export default function PanelGeo({ setActiveEl, activeEl }) {

   const [variant, setVariant] = useState(0)
   const [active, setActive] = useState(false)
   const [geoL, setGeoL] = useState({ name: "Местоположение" })
   const [geoM, setGeoM] = useState({ name: "Местоположение" })
   const dispatch = useDispatch()
   const metro = useSelector(state => state.metro.metro)
   const district = useSelector(state => state.district.district)






   const arrow = (<svg className={active ? "" : s.active} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
         d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
         fill="#3A3A3A" />
   </svg>)

   const currentVariant = {
      id: variant ? geoL.id : geoM.id,
      name: variant ? geoL.name : geoM.name,
      type: variant ? "district_id" : "metro_id",
   }

   const currentTitle = useSelector(state => state.filter.geo.name)

   return (
      <div className={s.root}>
         <div className={s.tab}>
            <div
               className={s.tab_element + " " + (!variant && s.active)}
               onClick={() => { setVariant(0) }}
            >
               Метро
            </div>
            <div
               className={s.tab_element + " " + (variant && s.active)}
               onClick={() => setVariant(1)}
            >
               Район
            </div>
         </div>
         <div
            onClick={() => {
               dispatch(setGeo(currentVariant))
               setActiveEl(0)
            }}
            className={s.plus}
         >
            +
         </div>
         <div className={s.dropdown}>
            <div
               className={s.dropdown_btn}
               onClick={() => setActive(!active)}
            >
               <p>{variant ? geoL.name : geoM.name}</p>
               {arrow}
            </div>
            {active && (
               <div className={s.dropdown_content}>
                  {
                     (variant ? district : metro).map((item) => (
                        <div
                           key={item.id}
                           className={s.dropdow_element + " " + ((item.name === (variant ? geoL : geoM) || (item.name === currentTitle)) && s.active)}
                           onClick={() => {
                              variant ? setGeoL(item) : setGeoM(item)
                              setActive(!active)
                           }}
                        >
                           {item.name}
                        </div>
                     ))
                  }
               </div>
            )}
         </div>
      </div>
   )
}
