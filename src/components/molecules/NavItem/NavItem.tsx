import { NavLink } from "react-router-dom";
import styles from "./NavItem.module.css";
import clsx from "clsx";

export interface NavItemProps {
  to: string;
  label: string;
  className?: string;
  icon: React.ReactElement;
}

const NavItem = (props: NavItemProps) => {
  const { to, label, className, icon } = props;
  return (
    <li className={styles.navItem}>
      <NavLink to={to} className={clsx(className, styles.navigation)}>
        {icon}
        <span>{label}</span>
      </NavLink>
    </li>
  );
};

export default NavItem;
