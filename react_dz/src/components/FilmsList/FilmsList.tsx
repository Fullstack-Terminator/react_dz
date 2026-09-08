import type { FilmListProps } from "./FilmsList.props";
import styles from "./FilmsList.module.css";

function FilmsList({ children }: FilmListProps) {
  return <div className={styles["films-list"]}>{children}</div>;
}

export default FilmsList;
