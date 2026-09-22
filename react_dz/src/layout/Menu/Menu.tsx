import { useContext } from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export function Layout() {
  const { name, isLogined, logOut } = useContext(UserContext);

  return (
    <div>
      <div>
        <Header isLogined={isLogined} name={name} onLogout={logOut} />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
