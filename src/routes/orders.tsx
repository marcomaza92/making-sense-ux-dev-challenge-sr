import Text from "../components/atoms/Text/Text";
import EmptyState from "../components/molecules/EmptyState/EmptyState";

export const Orders = () => {
  const orders = [];
  return (
    <section className="orders">
      {orders.length === 0 ? (
        <EmptyState type="orders" />
      ) : (
        <Text tag="h4" type="heading4" weight="bold">
          Here are your orders
        </Text>
      )}
    </section>
  );
};
