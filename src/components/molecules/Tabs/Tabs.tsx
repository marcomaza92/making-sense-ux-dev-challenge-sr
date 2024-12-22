import { Outlet } from "react-router-dom";
import styles from "./Tabs.module.css";
import Tab from "../Tab/Tab";

export const Tabs = () => (
  <>
    <ul className={styles.tabs}>
      <Tab to={"/"} label={"Dashboard"} />
      <Tab to={"/orders"} label={"Orders"} />
    </ul>
    <Outlet />
  </>
);
