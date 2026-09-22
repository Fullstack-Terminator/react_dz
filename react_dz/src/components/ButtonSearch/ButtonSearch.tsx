import styles from "./ButtonSearch.module.css";
import type { ButtonSearchProps } from "./ButtonSearch.props";

function ButtonSearch({ text }: ButtonSearchProps) {
  return <button className={styles["button-search"]}>{text}</button>;
}

export default ButtonSearch;
