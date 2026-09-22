import { useCallback, useLayoutEffect, useState, type ReactNode } from "react";
import type { AppProps } from "../App.props";
import { UserContext } from "./UserContext";

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
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
        name: userName,
        isLogined: isLoggedIn,
        setIsLoggedIn,
        setUserName,
        logIn,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
