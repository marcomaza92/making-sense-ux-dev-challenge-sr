import { CardProps } from "./Card.types";
import styles from "./Card.module.css";
import Text from "../../atoms/Text/Text";
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

const Card = (props: CardProps) => {
  const { title, amount, historicalAmount, result, timePeriod } = props;
  return (
    <div className={clsx(styles.card, styles[result])}>
      <div className={styles.cardHeader}>
        <Text tag="p" type="body2">
          {title}
        </Text>
        <div className={clsx(styles.cardHeaderIcon, styles[result])}>
          {result &&
            (result === "positive" ? (
              <ArrowTrendingUpIcon />
            ) : (
              <ArrowTrendingDownIcon />
            ))}
        </div>
      </div>
      <Text tag="h4" type="heading4" weight="bold">
        {amount || "-"}
      </Text>
      <div
        className={clsx(styles.cardFooter, {
          [styles.reverse]: timePeriod !== "today",
        })}
      >
        <Text tag="p" type="caption">
          {timePeriod ?? "-"}
        </Text>
        <Text tag="p" type="caption">
          {historicalAmount || "-"}
        </Text>
      </div>
    </div>
  );
};

export default Card;
