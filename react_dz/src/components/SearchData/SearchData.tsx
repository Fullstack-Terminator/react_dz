import styles from "./SearchData.module.css";
import { useState, type ChangeEvent, type FormEvent } from "react";
import ButtonSearch from "../ButtonSearch/ButtonSearch";

function SearchData() {
  const [inputData, setInputData] = useState("");

  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
  };

  const searchFilm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputData);
  };

  return (
    <form className={styles["search-film"]} onSubmit={searchFilm}>
      <input
        type="text"
        value={inputData}
        onChange={inputChange}
        className={styles["input-icon"]}
        placeholder="Введите название"
      />

      <ButtonSearch text="Искать" />
    </form>
  );
}

export default SearchData;
