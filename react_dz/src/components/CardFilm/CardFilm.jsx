import styles from "./CardFilm.module.css";

function CardFilm({ estimation, image, title }) {
  return (
    <div className={styles["container-card"]}>
      <div className={styles["card-film"]}>
        <div className={styles["estimation"]}>
          <img src="./src/picture/star.svg" alt="star" />
          <p>{estimation}</p>
        </div>
        <div className={styles["img-container"]}>
          <img className={styles["poster"]} src={image} alt={title} />
        </div>

        <p className={styles["title-film"]}>{title}</p>
        <button className={styles["favourites-film"]}>
          <img src="./src/picture/like.svg" alt="like" />
          <p className={styles["btn-text"]}>В избранное</p>
        </button>
      </div>
    </div>
  );
}

export default CardFilm;
