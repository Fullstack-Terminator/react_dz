import { Link } from "react-router-dom";
import styles from "./CardFilm.module.css";
import type { CardFilmProps } from "./CardFilm.props";

function CardFilm(props: CardFilmProps) {
  return (
    <Link to={`/movie/${props.id}`} className={styles["container-card"]}>
      <div className={styles["card-film"]}>
        <div className={styles["estimation"]}>
          <img src="./src/picture/star.svg" alt="star" />
          <p>{props.estimation}</p>
        </div>
        <div className={styles["img-container"]}>
          <img
            className={styles["poster"]}
            src={props.image}
            alt={props.title}
          />
        </div>

        <p className={styles["title-film"]}>{props.title}</p>
        <button className={styles["favourites-film"]}>
          <img src="./src/picture/like.svg" alt="like" />
          <p className={styles["btn-text"]}>В избранное</p>
        </button>
      </div>
    </Link>
  );
}

export default CardFilm;
