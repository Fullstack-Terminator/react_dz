import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles["menu"]}>
      <div>
        <img src="./src/picture/favourites.svg" alt="Иконка избранного" />
      </div>
      <div className={styles["menu-buttons"]}>
        <button className={styles["button-color"]}>Поиск фильмов</button>
        <button className={styles["button-color"]}>Мои фильмы</button>
        <button className={styles["button-entrance"]}>
          Войти
          <img src="./src/picture/entrance.svg" alt="Иконка входа" />
        </button>
      </div>
    </header>
  );
}

export default Header;
