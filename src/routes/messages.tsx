import Text from "../components/atoms/Text/Text";
import EmptyState from "../components/molecules/EmptyState/EmptyState";

export const Messages = () => {
  const messages = [];
  return (
    <section className="messages">
      {messages.length === 0 ? (
        <EmptyState type="messages" />
      ) : (
        <Text tag="h4" type="heading4" weight="bold">
          Here are your messages
        </Text>
      )}
    </section>
  );
};
