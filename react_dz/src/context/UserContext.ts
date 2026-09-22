import { createContext, type Dispatch, type SetStateAction } from "react";

export interface UserContextType {
  name: string;
  isLogined: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  setUserName: Dispatch<SetStateAction<string>>;
  logIn: (name: string) => void;
  logOut: () => void;
}

export const UserContext = createContext<UserContextType>({
  name: "",
  isLogined: false,
  setIsLoggedIn: () => {},
  setUserName: () => {},
  logIn: () => {},
  logOut: () => {},
});
