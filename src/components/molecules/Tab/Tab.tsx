import { NavLink } from "react-router-dom";
import styles from "./Tab.module.css";
import Text from "../../atoms/Text/Text";
import { TabProps } from "./Tab.types";

const Tab = (props: TabProps) => {
  const { to, label } = props;
  return (
    <li className={styles.tab}>
      <NavLink to={to}>
        <Text tag="p" type="body2">
          {label}
        </Text>
      </NavLink>
    </li>
  );
};

export default Tab;
