import React, { useEffect, useRef, useState } from 'react'
import BtnPanel from '../../../components/BtnPanel/BtnPanel'
import BtnPanelList from '../../../components/BtnPanelList/BtnPanelList'
import s from "./SearchPanel.module.scss"
import searchIcon from "../../../assets/img/search_icon.svg"
import PanelGeo from './PanelGeo/PanelGeo'
import PanelCategories from './PanelCategoies/PanelCategories'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



export default function SearchPanelMini() {
   const categories = [

      {
         title: useSelector(state => state.filter.geo.name),
         index: 2,
         type: 1
      },
      {
         title: useSelector(state => state.filter.timeRental.name),
         index: 3,
         child: {
            items: [
               { name: "3-5 часов", prop: "3-5 часов" },
               { name: "5-12 часов", prop: "5-12 часов" },
               { name: "12-24 часов", prop: "12-24 часов" },
               { name: "больше суток", prop: "сутки и больше" },
            ],
            type: 1
         },
         type: 0
      },
   ]




   const [currentActive, setCurrentActive] = useState(0)
   const type = useSelector(s => s.filter.typeRental)
   const price = useSelector(s => s.filter.price)
   const geo = useSelector(s => s.filter.geo)
   const rental = useSelector(s => s.filter.timeRental)
   const to = `/catalog/${type.to}?${geo.id ? geo.type + "=" + geo.id : geo.type}&rental_hours_selected=${rental.prop}`

   return (
      <div className={s.wrapper}>
         <div className={s.root}>
            <BtnPanelList activeEl={currentActive} setActiveEl={setCurrentActive} obj={categories[0]} >
               <PanelGeo activeEl={currentActive} setActiveEl={setCurrentActive} />
            </BtnPanelList>

            <BtnPanelList activeEl={currentActive} setActiveEl={setCurrentActive} obj={categories[1]}>
               <PanelCategories setActiveEl={setCurrentActive} obj={categories[1].child} />
            </BtnPanelList>
         </div>
         <Link to={to}>
            <BtnPanel onClick={() => console.log(currentActive)} icon={searchIcon} ClassName={s.active} title={'search'} />
         </Link>
      </div>

   )
}
