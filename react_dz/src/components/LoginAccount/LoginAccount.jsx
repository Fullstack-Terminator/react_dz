import styles from "./LoginAccount.module.css";
import { useEffect, useState } from "react";
import ButtonSearch from "../ButtonSearch/ButtonSearch";

function LoginAccount({ onLogin }) {
  const [inputName, setInputName] = useState("");

  const inputChange = (event) => {
    setInputName(event.target.value);
    console.log(event.target.value);
  };

  const searchProfile = (e) => {
    e.preventDefault();
    onLogin(inputName);
  };

  return (
    <form className={styles["search-profile"]} onSubmit={searchProfile}>
      <input
        type="text"
        value={inputName}
        onChange={inputChange}
        className={styles["input"]}
        placeholder="Ваше имя"
      />
      <ButtonSearch text="Войти в профиль" />
    </form>
  );
}

export default LoginAccount;
