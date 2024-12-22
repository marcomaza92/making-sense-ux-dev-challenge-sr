import { Link } from "react-router-dom";
import { Toggle } from "../../molecules/Toggle/Toggle";
import styles from "./Header.module.css";
import Avatar from "../../molecules/Avatar/Avatar";
import Image from "../../atoms/Image/Image";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={`/`} className={styles.homeButton}>
        <Image src="logo.png" alt="Home" size="small" />
      </Link>
      <div className={styles.userActions}>
        <div>
          <Toggle />
        </div>
        <Avatar />
      </div>
    </header>
  );
};
