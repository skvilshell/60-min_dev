import React, { useState } from 'react'
import BtnPanel from '../BtnPanel/BtnPanel'
import BtnPanelList from '../BtnPanelList/BtnPanelList'
import s from "./SearchPanel.module.scss"
import searchIcon from "../../assets/img/search_icon.svg"
import PanelGeo from './PanelGeo/PanelGeo'
import PanelCategories from './PanelCategoies/PanelCategories'
import { useSelector } from 'react-redux'



export default function SearchPanel() {
   const categories = [
      {
         title: useSelector(state => state.filter.typeRental.title),
         index: 1,
         items: [
            { title: "Отели", index: 0 },
            { title: "Квартиры", index: 1 },
            { title: "Местоположение", index: 2 },
         ],
         type: 0
      },
      {
         title: useSelector(state => state.filter.geo.title),
         index: 2,
         items: [],
         type: 1
      },
      {
         title: useSelector(state => state.filter.timeRental.title),
         index: 3,
         items: [
            { title: "x", index: 0 },
            { title: "от 3 - 5 часов", index: 1 },
            { title: "от 5 - 12 часов", index: 2 },
            { title: "от 5 - 12 часов", index: 3 },
            { title: "от 12 - 24 часов", index: 4 },
            { title: "Сутки и больше", index: 5 },
         ],
         type: 0
      },
      {
         title: useSelector(state => state.filter.price.title),
         index: 4,
         items: [
            { title: "до 1000", index: 0 },
            { title: "до 1500", index: 1 },
            { title: "до 2000", index: 2 },
            { title: "от 3000", index: 3 },
            { title: "любая цена", index: 4 },
         ],
         type: 0
      },
      {
         title: "",
         index: 5,
         items: [],
         type: 3
      }
   ]



   const [currentActive, setCurrentActive] = useState(0)


   return (
      <div className={s.root}>
         <BtnPanelList activeEl={currentActive} setActiveEl={setCurrentActive} obj={categories[0]} >
            <PanelCategories index={0} setActiveEl={setCurrentActive} obj={categories[0]} />
         </BtnPanelList>

         <BtnPanelList activeEl={currentActive} setActiveEl={setCurrentActive} obj={categories[1]} >
            <PanelGeo activeEl={currentActive} setActiveEl={setCurrentActive} />
         </BtnPanelList>

         <BtnPanelList activeEl={currentActive} setActiveEl={setCurrentActive} obj={categories[2]}>
            <PanelCategories index={0} obj={categories[2]} />
         </BtnPanelList>

         <BtnPanelList activeEl={currentActive} setActiveEl={setCurrentActive} obj={categories[3]} >
            <PanelCategories index={0} obj={categories[3]} />
         </BtnPanelList>


         <BtnPanel onClick={() => console.log(currentActive)} icon={searchIcon} className={s.active} title={'search'} />
      </div>
   )
}
