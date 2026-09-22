import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import type { HeaderProps } from "./Header.props";
import cn from "classnames";

function Header({ isLogined, name, onLogout }: HeaderProps) {
  // const { isLogined, name } = useContext(UserContext);

  function changeHeader() {
    if (isLogined) {
      return (
        <div className={styles["menu-buttons"]}>
          <div className={styles["button-entrance"]}>
            {name}
            <img src="./src/picture/user.svg" alt="Иконка профиля" />
          </div>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              cn(styles["button-color"], { [styles.active]: isActive })
            }
            onClick={onLogout}
          >
            Выйти
          </NavLink>
        </div>
      );
    } else {
      return (
        <NavLink
          to="/login"
          className={({ isActive }) =>
            cn(styles["button-entrance"], { [styles.active]: isActive })
          }
        >
          Войти
          <img src="./src/picture/entrance.svg" alt="Иконка входа" />
        </NavLink>
      );
    }
  }

  return (
    <header className={styles["menu"]}>
      <div>
        <img src="./src/picture/favourites.svg" alt="Иконка избранного" />
      </div>
      <div className={styles["menu-buttons"]}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            cn(styles["button-color"], { [styles.active]: isActive })
          }
        >
          Поиск фильмов
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            cn(styles["button-color"], { [styles.active]: isActive })
          }
        >
          Мои фильмы
        </NavLink>
        {changeHeader()}
      </div>
    </header>
  );
}

export default Header;
