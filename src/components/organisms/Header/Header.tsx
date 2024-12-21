import { Link } from "react-router-dom";
import { Toggle } from "../../molecules/Toggle/Toggle";
import styles from "./Header.module.css";
import Avatar from "../../molecules/Avatar/Avatar";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={`/`}>
        <img src="logo.png" alt="Home" />
      </Link>
      <div>
        <div>
          <Toggle />
        </div>
        <Avatar />
      </div>
    </header>
  );
};
