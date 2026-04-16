import "./SearchData.css";
import { useState } from "react";
import ButtonSearch from "../ButtonSearch/ButtonSearch";

function SearchData() {
  const [inputData, setInputData] = useState("");

  const inputChange = (event) => {
    setInputData(event.target.value);
  };

  const searchFilm = (e) => {
    e.preventDefault();
    console.log(inputData);
  };

  return (
    <form className="search-film" onSubmit={searchFilm}>
      <input
        type="text"
        value={inputData}
        onChange={inputChange}
        className="input-icon"
        placeholder="Введите название"
      />

      <ButtonSearch text="Искать" />
    </form>
  );
}

export default SearchData;
