import React from 'react'
import s from './s.module.scss'
import { useSelector } from "react-redux"
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import { CardLarge, CardMedium } from '../../components/Skeletons'
import BtnPraimary from '../../components/BtnPraimary/BtnPraimary'


export default function Main() {

   const activeCity = useSelector(state => state.city.city)

   return (
      <main className={s.root}>
         <section className={s.section__search}>
            <h1 align="center">подобрать отель на час <br /> в городе {activeCity.name} </h1>
            <SearchPanel />
         </section>

         <section className={s.section__best}>

            <div className={s.title}>
               <div className={s.container}>
                  <div className={s.text}>
                     <h1>
                        ЛУЧШИЕ <br />
                        ВАРИАНТЫ<br />
                        в городе
                     </h1>
                     <h1 className={s.city}>
                        {activeCity.name}
                     </h1>
                  </div>
                  <CardLarge />
               </div>
            </div>

            <div className={s.container}>
               <div className={s.cards}>
                  {
                     [...new Array(6)].map((_, index) => <CardMedium key={index} />)
                  }
               </div>

               <BtnPraimary title={"подробнее"} />
            </div>
         </section>

         <section className={s.section__cause}>
            <div className={s.container}>
               <div className={s.title}>
                  <p>БОЛЕЕ 200 000 ЧЕЛОВЕК ИЩУТ <br />
                     ПОЧАСОВОЕ ЖИЛЬЕ НА</p>
                  <span>60 мин.рф</span>
               </div>
               <p>Люди ищут почасовые отели и аппартаменты <br />
                  на нашем сайте для следующих поводов</p>
               <div className={s.grid}>
                  <div className={s.grid_element + " " + s.grid_element1}>
                     Романтическое свидание
                  </div>
                  <div className={s.grid_element + " " + s.grid_element2}>
                     Романтическое свидание
                  </div>
                  <div className={s.grid_element + " " + s.grid_element3}>
                     Романтическое свидание
                  </div>
                  <div className={s.grid_element + " " + s.grid_element4}>
                     Романтическое свидание
                  </div>
                  <div className={s.grid_element + " " + s.grid_element5}>
                     Романтическое свидание
                  </div>
                  <div className={s.grid_element + " " + s.grid_element6}>
                     Романтическое свидание
                  </div>
               </div>
            </div>
         </section>
      </main>
   )
}
