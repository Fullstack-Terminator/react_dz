import { createContext, type Dispatch, type SetStateAction } from "react";

export interface UserContextType {
  name: string;
  isLogined: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  setUserName: Dispatch<SetStateAction<string>>;
}

export const UserContext = createContext<UserContextType>({
  name: "",
  isLogined: false,
  setIsLoggedIn: () => {},
  setUserName: () => {},
});
