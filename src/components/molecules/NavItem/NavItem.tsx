import { NavLink } from "react-router-dom";
import styles from "./NavItem.module.css";
import clsx from "clsx";
import Text from "../../atoms/Text/Text";
import { NavItemProps } from "./NavItem.types";

const NavItem = (props: NavItemProps) => {
  const { to, label, className, icon } = props;
  return (
    <li className={styles.navItem}>
      <NavLink to={to} className={clsx(className, styles.navigation)}>
        {icon}
        <Text tag="p" type="caption">
          {label}
        </Text>
      </NavLink>
    </li>
  );
};

export default NavItem;
