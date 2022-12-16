import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import BtnSuccess from "../BtnSuccess/BtnSucces";
import Popup from "../Popup/Popup";
import { useSelector } from "react-redux";


export default function Header() {

  const city = useSelector(state => state.city.city.name)

  let i = 0;
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
    { showLocation: true, isAuth: false },
    { showLocation: false, isAuth: false },
    { showLocation: false, isAuth: true },
  ];
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <header className={styles.root}>
      <div className={styles.logo_loc}>
        <img className={styles.logo} src={logo} alt="Логотип" />
        {settings[i].showLocation && <Popup />}
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
          <div className={styles.addition}></div>
          <div className={styles.user__info}>
            <div className={styles.user}></div>
            <div className={styles.header__mail}>
              <p>ivanivanovgmail.com</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.header__container2}>
          <Link to='/login'>
            <BtnSuccess title="Войти" />
          </Link>
          <div
            className={styles.addition}
            onClick={() => {
              setShowMenu(0);
            }}
          ></div>
        </div>
      )}
    </header>
  );
}
