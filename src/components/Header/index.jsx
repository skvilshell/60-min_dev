import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import user_logo from "../../assets/img/user.svg"
import BtnSuccess from "../BtnSuccess/BtnSucces";
import Popup from "../Popup/Popup";
import { useDispatch, useSelector } from "react-redux";
import { setShowMenu } from "../../redux/slices/menu";


export default function Header() {

  const city = useSelector(state => state.city.city.name)
  const dispatch = useDispatch()

  let i = 1;
  const navArr = [
    {
      title: "главная",
      to: "/"
    },
    {
      title: "отели",
      to: `/catalog/hotel?city=${city}`
    },
    {
      title: "квартиры",
      to: `/catalog/appartment?city=${city}`
    },
    {
      title: "экстрим",
      to: `/catalog/house?city=${city}`
    },
    {
      title: "партнерам",
      to: `/catalog/partner`
    }
  ];

  const settings = [
    { isAuth: false },
    { isAuth: true }
  ];

  return (
    <header className={styles.root}>
      <div className={styles.logo_loc}>
        <img className={styles.logo} src={logo} alt="Логотип" />
        <div className={styles.popup}><Popup /></div>
      </div>

      <ul className={styles.header__menu}>
        {navArr.map((item, index) => (
          <li key={index}>
            <Link to={`${item.to}`}>
              <p>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>

      {settings[i].isAuth ? (
        <div className={styles.header__user}>
          <BtnSuccess title="Добавить объект" />
          <div className={styles.user__info}>
            <Link to='/login'>
              <p className={styles.header__mail}>
                ivanivanovgmail.com
              </p>
            </Link>
            <Link to='/login'>
              <img className={styles.user_logo} src={user_logo} alt="" />
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.header__container2}>
          <Link to='/login'>
            <BtnSuccess title="Войти" />
          </Link>
        </div>
      )}
      <div onClick={() => dispatch(setShowMenu(true))} className={styles.burger_menu}>
        <span className={styles.burger_item}></span>
        <span className={styles.burger_item}></span>
        <span className={styles.burger_item}></span>
      </div>
    </header>
  );
}
