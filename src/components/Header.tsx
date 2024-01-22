import logo from "../assets/rocket.svg";

import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
      <p className={styles.text}>
        to<span>do</span>
      </p>
    </div>
  );
}
