import {
  HomeIcon,
  EnvelopeIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import styles from "./Sidebar.module.css";
import clsx from "clsx";
import NavItem from "../../molecules/NavItem/NavItem";
import { SidebarProps } from "./Sidebar.types";
import Text from "../../atoms/Text/Text";

export const Sidebar = (props: SidebarProps) => {
  const isOpen = props.isOpen;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <nav
      className={clsx(styles.sidebar, {
        [styles.collapsed]: collapsed,
        [styles.active]: isOpen,
      })}
    >
      <ul
        className={clsx(styles.navList, {
          [styles.collapseLabelNavItem]: collapsed,
        })}
      >
        <NavItem to="/" label="Home" icon={<HomeIcon />} />
        <NavItem to="/messages" label="Messages" icon={<EnvelopeIcon />} />
      </ul>
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={styles.collapse}
      >
        <Text
          tag="p"
          type="caption"
          weight="medium"
          className={styles.collapseLabel}
        >
          Collapse
        </Text>
        <div className={styles.collapseIcon}>
          <ChevronLeftIcon />
        </div>
      </button>
    </nav>
  );
};
