import {
  HomeIcon,
  EnvelopeIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./sidebar.module.css";
import clsx from "clsx";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <nav className={clsx(styles.sidebar, { [styles.collapsed]: collapsed })}>
      <ul>
        <li>
          <NavLink to={`/`} className={styles.navigation}>
            <HomeIcon />
            <span> Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={`/messages`} className={styles.navigation}>
            <EnvelopeIcon />
            <span> Messages</span>
          </NavLink>
        </li>
      </ul>
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={styles.collapse}
      >
        <span>Collapse</span>
        <ChevronLeftIcon />
      </button>
    </nav>
  );
};
