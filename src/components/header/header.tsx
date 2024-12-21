import { Link } from "react-router-dom";
import { Toggle } from "../toggle/toggle";
import styles from "./header.module.css";

export const Header = () => {
  const user = "Robert";
  return (
    <header className={styles.header}>
      <Link to={`/`}>
        <img src="logo.png" alt="Home" />
      </Link>
      <div>
        <div>
          <Toggle />
        </div>
        <div>
          <img src="user.png" alt="User Avatar" />
          <p>Hi, {user}!</p>
        </div>
      </div>
    </header>
  );
};
