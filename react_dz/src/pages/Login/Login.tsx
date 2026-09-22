import cn from "classnames";
import styles from "./Login.module.css";
import Heading from "../../components/Heading/Heading";
import LoginAccount from "../../components/LoginAccount/LoginAccount";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export function Login() {
  const { logIn } = useContext(UserContext);

  return (
    <>
      <div className={cn(styles["profile"])}>
        <Heading text="Вход" />
        <LoginAccount onLogin={logIn} />
      </div>
    </>
  );
}
