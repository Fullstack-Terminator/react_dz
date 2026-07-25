import styles from "./Heading.module.css";

function Heading({ text }) {
  return <div className={styles["header"]}>{text}</div>;
}

export default Heading;
