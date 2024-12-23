import Image from "../../atoms/Image/Image";
import Text from "../../atoms/Text/Text";
import styles from "./EmptyState.module.css";
import { EmptyStateProps } from "./EmptyState.types";

const EmptyState = (props: EmptyStateProps) => {
  const { type = "default" } = props;
  const emptyTypes: Record<string, Record<string, string>> = {
    default: {
      title: "Nothing to see here",
      description: "It seems like we couldn't find anything for your request",
      icon: "default.svg",
    },
    messages: {
      title: "No new messages",
      description: "There's currently no new messages",
      icon: "messages.svg",
    },
    orders: {
      title: "No orders yet",
      description: "There's currently no orders placed",
      icon: "orders.svg",
    },
    transactions: {
      title: "No transactions matching that criteria",
      description: "Try searching other terms",
      icon: "transactions.svg",
    },
  };

  return (
    <section className={styles.emptyState}>
      <Image src={`/emptyStates/${emptyTypes[type].icon}`} />
      <Text tag="p" type="subtitle1" weight="bold">
        {emptyTypes[type].title}
      </Text>
      <Text tag="p" type="body2">
        {emptyTypes[type].description}
      </Text>
    </section>
  );
};

export default EmptyState;
