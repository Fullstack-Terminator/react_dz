import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login/Login.tsx";
import { Movie } from "./pages/Movie/Movie.tsx";
import { Favorites } from "./pages/Favorites/Favorites.tsx";
import { FilmLibrary } from "./pages/FilmLibrary/FilmLibrary.tsx";
import { Layout } from "./layout/Menu/Menu.tsx";
import { UserProvider } from "./context/UserProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <FilmLibrary />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>,
);
