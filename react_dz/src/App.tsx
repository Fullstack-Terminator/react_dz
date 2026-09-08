import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Heading from "./components/Heading/Heading";
import Subtitle from "./components/Subtitle/Subtitle";
import SearchData from "./components/SearchData/SearchData";
import CardFilm from "./components/CardFilm/CardFilm";
import FilmsList from "./components/FilmsList/FilmsList";
import LoginAccount from "./components/LoginAccount/LoginAccount";
import { useState, useCallback, useLayoutEffect } from "react";
import cn from "classnames";
import { UserContext } from "./context/user.context";
import { type CardFilmProps } from "./components/CardFilm/CardFilm.props";
import type { AppProps } from "./App.props";

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

  const [items] = useState<CardFilmProps[]>(data);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");

  const getProfiles = useCallback((): AppProps[] => {
    try {
      return JSON.parse(localStorage.getItem("profiles") ?? "[]");
    } catch {
      return [];
    }
  }, []);

  const checkLoginStatus = (): void => {
    const profiles = getProfiles();
    if (profiles) {
      const loggedUser = profiles.find(
        (item: AppProps) => item.isLogined === true,
      );
      if (loggedUser) {
        setIsLoggedIn(true);
        setUserName(loggedUser.name);
      } else {
        setIsLoggedIn(false);
        setUserName("");
      }
    }
  };

  useLayoutEffect(() => {
    setTimeout(() => {
      checkLoginStatus();
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logIn = (name: string) => {
    const profiles = getProfiles();

    if (!profiles) {
      return;
    }

    const existingUser = profiles.find((item) => item.name === name);

    if (existingUser) {
      existingUser.isLogined = true;
    } else {
      profiles.push({ name: name, isLogined: true });
    }

    localStorage.setItem("profiles", JSON.stringify(profiles));
    checkLoginStatus();
  };

  const logOut = () => {
    const profiles = getProfiles();
    profiles.forEach((item) => {
      if (item.isLogined === true) {
        item.isLogined = false;
      }
    });
    localStorage.setItem("profiles", JSON.stringify(profiles));
    checkLoginStatus();
  };

  return (
    <UserContext.Provider
      value={{
        isLogined: isLoggedIn,
        setIsLoggedIn,
        name: userName,
        setUserName,
      }}
    >
      <>
        <Header isLogined={isLoggedIn} name={userName} onLogout={logOut} />
        <div className={cn(styles["search"])}>
          <Heading text="Поиск" />
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
        <div className={cn(styles["profile"])}>
          <Heading text="Вход" />
          <LoginAccount onLogin={logIn} />
        </div>
      </>
    </UserContext.Provider>
  );
}

export default App;
