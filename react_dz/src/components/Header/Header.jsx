import "./Header.css";

function Header() {
  return (
    <header className="menu">
      <div>
        <img src="./src/picture/favourites.svg" alt="Иконка избранного" />
      </div>
      <div className="menu-buttons">
        <button className="button-color">Поиск фильмов</button>
        <button className="button-color">Мои фильмы</button>
        <button className="button-entrance button-color">
          Войти
          <img src="./src/picture/entrance.svg" alt="Иконка входа" />
        </button>
      </div>
    </header>
  );
}

export default Header;
