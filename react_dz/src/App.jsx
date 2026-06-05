import styles from "./App.module.css";
import Header from "./components/Header/Header";
import ButtonSearch from "./components/ButtonSearch/ButtonSearch";
import Heading from "./components/Heading/Heading";
import Subtitle from "./components/Subtitle/Subtitle";
import SearchData from "./components/SearchData/SearchData";
import CardFilm from "./components/CardFilm/CardFilm";
import FilmsList from "./components/FilmsList/FilmsList";
import { useState } from "react";

function App() {
  const data = [
    {
      estimation: 324,
      image: "./src/picture/poster/Black_Widow.jpg",
      title: "Black Widow",
    },
    {
      estimation: 124,
      image: "./src/picture/poster/Shang_Chi.jpg",
      title: "Shang Chi",
    },
    {
      estimation: 235,
      image: "./src/picture/poster/Loki.jpg",
      title: "Loki",
    },
    {
      estimation: 123,
      image: "./src/picture/poster/How_I_Met_Your_Mother.jpg",
      title: "How I Met Your Mother",
    },
    {
      estimation: 8125,
      image: "./src/picture/poster/Money_Heist.jpg",
      title: "Money Heist",
    },
    {
      estimation: 123,
      image: "./src/picture/poster/Friends.jpg",
      title: "Friends",
    },
    {
      estimation: 12,
      image: "./src/picture/poster/The_Big_Bang_Theory.jpg",
      title: "The Big Bang Theory",
    },
    {
      estimation: 456,
      image: "./src/picture/poster/Two_And_a_Half_Men.jpg",
      title: "Two And a Half Men",
    },
  ];

  const [items, setItems] = useState(data);

  return (
    <>
      <Header />
      <div className={styles["search"]}>
        <Heading />
        <Subtitle />
        <SearchData />
      </div>
      <FilmsList>
        {items.map((el) => (
          <CardFilm
            estimation={el.estimation}
            image={el.image}
            title={el.title}
          />
        ))}
      </FilmsList>
    </>
  );
}

export default App;
