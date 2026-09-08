import styles from "./Subtitle.module.css";

function Subtitle() {
  return (
    <p className={styles["subtitle"]}>
      Введите название фильма, сериала или мультфильма для поиска и добавления в
      избранное.
    </p>
  );
}

export default Subtitle;
