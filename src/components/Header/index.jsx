import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import BtnSuccess from "../BtnSuccess/BtnSucces";
import Popup from "../Popup/Popup";

export default function Header() {
  let i = 0;
  const navArr = ["главная", "отели", "квартиры", "экстрим", "партнерам"];
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
            <Link to="/">
              <p>{item}</p>
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
          <BtnSuccess title="Войти" />
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
