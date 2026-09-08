import styles from "./Heading.module.css";
import type { HeadingProps } from "./Heading.props";

function Heading({ text }: HeadingProps) {
  return <div className={styles["header"]}>{text}</div>;
}

export default Heading;
