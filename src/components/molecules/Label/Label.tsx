import styles from "./Label.module.css";
import Text from "../../atoms/Text/Text";
import { LabelProps } from "./Label.types";
import clsx from "clsx";

const Label = (props: LabelProps) => {
  const { type, text, icon } = props;
  return (
    <span className={clsx(styles.labelContainer, styles[type])}>
      {icon}
      <Text tag="p" type="caption" weight="medium">
        {text}
      </Text>
    </span>
  );
};

export default Label;
