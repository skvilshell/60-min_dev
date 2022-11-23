import React from 'react'
import BtnPanel from '../BtnPanel/BtnPanel'
import BtnPanelList from '../BtnPanelList/BtnPanelList'
import s from "./SearchPanel.module.scss"
import searchIcon from "../../assets/img/search_icon.svg"


export default function SearchPanel() {
   const categories = [
      {
         title: "Тип заведения",
         index: 0,
         items: [
            { title: "Отели", index: 0 },
            { title: "Квартиры", index: 1 },
            { title: "Местоположение", index: 2 },
         ],
         type: 0
      },
      {
         title: "Местоположение",
         index: 1,
         items: [],
         type: 1
      },
      {
         title: "Срок аренды",
         index: 2,
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
         title: "Цена",
         index: 3,
         items: [
            { title: "до 1000", index: 0 },
            { title: "до 1500", index: 1 },
            { title: "до 2000", index: 2 },
            { title: "от 3000", index: 3 },
         ],
         type: 0
      }, {
         title: "",
         index: 4,
         items: [],
         type: 3
      }
   ]
   return (
      <div className={s.root}>
         <BtnPanelList title={categories[0].title} />
         <BtnPanelList title={categories[1].title} />
         <BtnPanelList title={categories[2].title} />
         <BtnPanelList title={categories[3].title} />
         <BtnPanel icon={searchIcon} className={s.active} title={'search'} />
      </div>
   )
}
