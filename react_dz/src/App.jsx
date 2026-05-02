import "./App.css";
import Header from "./components/Header/Header";
import ButtonSearch from "./components/ButtonSearch/ButtonSearch";
import Heading from "./components/Heading/Heading";
import Subtitle from "./components/Subtitle/Subtitle";
import SearchData from "./components/SearchData/SearchData";
import CardFilm from "./components/CardFilm/CardFilm";
import FilmsList from "./components/FilmsList/FilmsList";

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

  return (
    <>
      <Header />
      <div className="search">
        <Heading />
        <Subtitle />
        <SearchData />
      </div>
      <FilmsList>
        <CardFilm
          estimation={data[0].estimation}
          image={data[0].image}
          title={data[0].title}
        />
        <CardFilm
          estimation={data[1].estimation}
          image={data[1].image}
          title={data[1].title}
        />
        <CardFilm
          estimation={data[2].estimation}
          image={data[2].image}
          title={data[2].title}
        />
        <CardFilm
          estimation={data[3].estimation}
          image={data[3].image}
          title={data[3].title}
        />
        <CardFilm
          estimation={data[4].estimation}
          image={data[4].image}
          title={data[4].title}
        />
        <CardFilm
          estimation={data[5].estimation}
          image={data[5].image}
          title={data[5].title}
        />
        <CardFilm
          estimation={data[6].estimation}
          image={data[6].image}
          title={data[6].title}
        />
        <CardFilm
          estimation={data[7].estimation}
          image={data[7].image}
          title={data[7].title}
        />
      </FilmsList>
    </>
  );
}

export default App;
