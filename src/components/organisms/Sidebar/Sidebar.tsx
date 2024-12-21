import {
  HomeIcon,
  EnvelopeIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

import styles from "./Sidebar.module.css";
import clsx from "clsx";
import NavItem from "../../molecules/NavItem/NavItem";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <nav className={clsx(styles.sidebar, { [styles.collapsed]: collapsed })}>
      <ul className={styles.navList}>
        <NavItem to="/" label="Home" icon={<HomeIcon />} />
        <NavItem to="/messages" label="Messages" icon={<EnvelopeIcon />} />
      </ul>
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={styles.collapse}
      >
        <span className={styles.collapseLabel}>Collapse</span>
        <ChevronLeftIcon />
      </button>
    </nav>
  );
};
