import { useState } from "react";
import type { CardFilmProps } from "../../components/CardFilm/CardFilm.props";
import cn from "classnames";
import styles from "./FilmLibrary.module.css";
import Heading from "../../components/Heading/Heading";
import Subtitle from "../../components/Subtitle/Subtitle";
import SearchData from "../../components/SearchData/SearchData";
import FilmsList from "../../components/FilmsList/FilmsList";
import CardFilm from "../../components/CardFilm/CardFilm";

export function FilmLibrary() {
  const data = [
    {
      id: 1,
      estimation: 324,
      image: "./src/picture/poster/Black_Widow.jpg",
      title: "Black Widow",
    },
    {
      id: 2,
      estimation: 124,
      image: "./src/picture/poster/Shang_Chi.jpg",
      title: "Shang Chi",
    },
    {
      id: 3,
      estimation: 235,
      image: "./src/picture/poster/Loki.jpg",
      title: "Loki",
    },
    {
      id: 4,
      estimation: 123,
      image: "./src/picture/poster/How_I_Met_Your_Mother.jpg",
      title: "How I Met Your Mother",
    },
    {
      id: 5,
      estimation: 8125,
      image: "./src/picture/poster/Money_Heist.jpg",
      title: "Money Heist",
    },
    {
      id: 6,
      estimation: 123,
      image: "./src/picture/poster/Friends.jpg",
      title: "Friends",
    },
    {
      id: 7,
      estimation: 12,
      image: "./src/picture/poster/The_Big_Bang_Theory.jpg",
      title: "The Big Bang Theory",
    },
    {
      id: 8,
      estimation: 456,
      image: "./src/picture/poster/Two_And_a_Half_Men.jpg",
      title: "Two And a Half Men",
    },
  ];

  const [items] = useState<CardFilmProps[]>(data);

  return (
    <>
      <div className={cn(styles["search"])}>
        <Heading text="Поиск" />
        <Subtitle />
        <SearchData />
      </div>
      <FilmsList>
        {items.map((el) => (
          <CardFilm
            id={el.id}
            estimation={el.estimation}
            image={el.image}
            title={el.title}
          />
        ))}
      </FilmsList>
    </>
  );
}
