import React, { useEffect, useRef, useState } from 'react'
import BtnPanel from '../BtnPanel/BtnPanel'
import BtnPanelList from '../BtnPanelList/BtnPanelList'
import s from "./SearchPanel.module.scss"
import searchIcon from "../../assets/img/search_icon.svg"
import PanelGeo from './PanelGeo/PanelGeo'
import PanelCategories from './PanelCategoies/PanelCategories'
import { useDispatch, useSelector } from 'react-redux'
import { setTypeRental } from '../../redux/slices/filter'



export default function SearchPanel() {
   const categories = [
      {
         title: useSelector(state => state.filter.typeRental.title),
         index: 1,
         child: {
            items: [
               { title: "Квартиры", index: 1 },
               { title: "Отели", index: 2 },
               { title: "Загородные дома", index: 3 },
               { title: "любое решение", index: 0 },
            ],
            type: 0
         },

         type: 0
      },
      {
         title: useSelector(state => state.filter.geo.title),
         index: 2,
         type: 1
      },
      {
         title: useSelector(state => state.filter.timeRental.title),
         index: 3,
         child: {
            items: [
               { title: "3-5 часов", index: 1 },
               { title: "5-12 часов", index: 2 },
               { title: "12-24 часов", index: 3 },
               { title: "больше суток", index: 4 },
               { title: "любое время", index: 0 },
            ],
            type: 1
         },

         type: 0
      },
      {
         title: useSelector(state => state.filter.price.title),
         index: 4,
         child: {
            items: [
               { title: "до 1000", index: 1 },
               { title: "до 1500", index: 2 },
               { title: "до 2000", index: 3 },
               { title: "от 3000", index: 4 },
               { title: "любая цена", index: 0 },
            ],
            type: 2
         },
         type: 0
      },
   ]




   const [currentActive, setCurrentActive] = useState(0)


   return (
      <div className={s.wrapper}>
         <div className={s.root}>
            <BtnPanelList activeEl={currentActive} setActiveEl={setCurrentActive} obj={categories[0]} >
               <PanelCategories setActiveEl={setCurrentActive} obj={categories[0].child} />
            </BtnPanelList>

            <BtnPanelList activeEl={currentActive} setActiveEl={setCurrentActive} obj={categories[1]} >
               <PanelGeo activeEl={currentActive} setActiveEl={setCurrentActive} />
            </BtnPanelList>

            <BtnPanelList activeEl={currentActive} setActiveEl={setCurrentActive} obj={categories[2]}>
               <PanelCategories setActiveEl={setCurrentActive} obj={categories[2].child} />
            </BtnPanelList>

            <BtnPanelList activeEl={currentActive} setActiveEl={setCurrentActive} obj={categories[3]} >
               <PanelCategories setActiveEl={setCurrentActive} obj={categories[3].child} />
            </BtnPanelList>
         </div>
         <BtnPanel onClick={() => console.log(currentActive)} icon={searchIcon} ClassName={s.active} title={'search'} />
      </div>

   )
}
