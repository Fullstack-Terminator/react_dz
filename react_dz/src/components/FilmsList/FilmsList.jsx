import styles from "./FilmsList.module.css";

function FilmsList({ children }) {
  return <div className={styles["films-list"]}>{children}</div>;
}

export default FilmsList;
