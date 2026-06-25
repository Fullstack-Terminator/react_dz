import { useEffect, useState } from "react";
import styles from "./Header.module.css";

function Header({ isLoggedIn, userName, onLogout }) {
  function changeHeader() {
    if (isLoggedIn) {
      return (
        <div className={styles["menu-buttons"]}>
          <button className={styles["button-entrance"]}>
            {userName}
            <img src="./src/picture/user.svg" alt="Иконка профиля" />
          </button>
          <button className={styles["button-color"]} onClick={onLogout}>
            Выйти
          </button>
        </div>
      );
    } else {
      return (
        <button className={styles["button-entrance"]}>
          Войти
          <img src="./src/picture/entrance.svg" alt="Иконка входа" />
        </button>
      );
    }
  }

  return (
    <header className={styles["menu"]}>
      <div>
        <img src="./src/picture/favourites.svg" alt="Иконка избранного" />
      </div>
      <div className={styles["menu-buttons"]}>
        <button className={styles["button-color"]}>Поиск фильмов</button>
        <button className={styles["button-color"]}>Мои фильмы</button>
        {changeHeader()}
      </div>
    </header>
  );
}

export default Header;
