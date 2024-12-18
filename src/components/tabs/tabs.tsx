import { NavLink, Outlet } from "react-router-dom";
import classes from "./tabs.module.css";

export const Tabs = () => (
  <>
    <ul className={classes.tabs}>
      <li>
        <NavLink to={`/`}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={`/orders`}>Orders</NavLink>
      </li>
    </ul>
    <Outlet />
  </>
);
