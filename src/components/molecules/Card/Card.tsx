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
    <div
      tabIndex={0}
      role="listitem"
      className={clsx(styles.card, styles[result])}
    >
      <div className={styles.cardHeader}>
        <Text tag="p" type="body2" aria-label={title}>
          {title}
        </Text>
        <div className={clsx(styles.cardHeaderIcon, styles[result])}>
          {result &&
            (result === "positive" ? (
              <ArrowTrendingUpIcon aria-hidden="true" />
            ) : (
              <ArrowTrendingDownIcon aria-hidden="true" />
            ))}
        </div>
      </div>
      <Text
        tag="h4"
        type="heading4"
        weight="bold"
        className={styles.negativeText}
        aria-label={amount}
      >
        {amount || "-"}
      </Text>
      <div
        className={clsx(styles.cardFooter, {
          [styles.reverse]: timePeriod !== "today",
        })}
      >
        <Text tag="p" type="caption" aria-label={timePeriod}>
          {timePeriod ?? "-"}
        </Text>
        <Text tag="p" type="caption" aria-label={historicalAmount}>
          {historicalAmount || "-"}
        </Text>
      </div>
    </div>
  );
};

export default Card;
