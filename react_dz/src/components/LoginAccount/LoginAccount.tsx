import styles from "./LoginAccount.module.css";
import { useState, type ChangeEvent, type FormEvent } from "react";
import ButtonSearch from "../ButtonSearch/ButtonSearch";
import type { LoginAccountProps } from "./LoginAccount.props";

function LoginAccount({ onLogin }: LoginAccountProps) {
  const [inputName, setInputName] = useState("");

  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value);
  };

  const searchProfile = (e: FormEvent<HTMLFormElement>) => {
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
