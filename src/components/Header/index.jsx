import React from 'react'
import styles from './Header.module.scss'
import { Link } from "react-router-dom"

export default function Header({ index, setShowMenu }) {
   return (
      <header className={styles.root}>
         <div className="header__container3">
            <div className="header__title">
               <div id="logo"></div>
               <div className="header__text">
                  <h1>60-мин.рф</h1>
                  <p>отели на час</p>
               </div>
            </div>
            <div className="header__container">

               {settings[i].showLocation
                  ? <div className="header__position">
                     <div id="position"></div>
                     <select>
                        <option value="1">Сантк-Петербург</option>
                        <option value="2">Москва</option>
                        <option value="3">Донбасс</option>
                     </select>
                  </div>
                  : null}

               {settings[i].showMenu
                  ? <div className="header__menu">
                     <Link to="/">
                        <div className="header__button">
                           <p>главная</p>
                        </div>
                     </Link>
                     <Link to="/">
                        <div className="header__button">
                           <p>отели</p>
                        </div>
                     </Link>
                     <Link to="/">
                        <div className="header__button">
                           <p>квартиры</p>
                        </div>
                     </Link>
                     <Link to="/">
                        <div className="header__button">
                           <p>экстрим</p>
                        </div>
                     </Link>
                     <Link to="/">
                        <div className="header__button">
                           <p>партнерам</p>
                        </div>
                     </Link>
                  </div>
                  : null}
            </div>

            {
            settings[i].isAuth
               ? <div className="header__user">

                  {settings[i].showGreenButton
                     ? <GreenButton title="Добавить объект" />
                     : null}

                  <div id="addition"></div>

                  {settings[i].showUserInfo
                     ? <div className="user__info">
                        <div id="user"></div>
                        <div className="header__mail">
                           <p>ivanivanovgmail.com</p>
                        </div>
                     </div>
                     : null}

               </div>
               : <div className="header__container2">
                  <GreenButton title="Войти" />
                  <div id="addition" onClick={() => { props.setShowMenu(1) }}></div>
               </div>
            }
         </div>
      </header>
   )
}
