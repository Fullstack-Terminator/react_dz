import styles from "./ButtonSearch.module.css";

function ButtonSearch({ text }) {
  return <button className={styles["button-search"]}>{text}</button>;
}

export default ButtonSearch;
