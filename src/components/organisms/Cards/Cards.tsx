import Card from "../../molecules/Card/Card";
import { CardProps } from "../../molecules/Card/Card.types";
import type { CardsProps } from "./Cards.types";
import styles from "./Cards.module.css";
import { useEffect, useRef } from "react";

const Cards = (props: CardsProps) => {
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateCardsWidth = () => {
      const viewportWidth = window.innerWidth;
      if (cardsRef.current) {
        cardsRef.current.style.setProperty(
          "--cardsWidth",
          `${viewportWidth}px`
        );
      }
    };

    updateCardsWidth();
    window.addEventListener("resize", updateCardsWidth);

    return () => window.removeEventListener("resize", updateCardsWidth);
  }, []);

  const { cards } = props;
  return (
    <div className={styles.cards} ref={cardsRef}>
      {cards.map((card: CardProps) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          amount={card.amount}
          historicalAmount={card.historicalAmount}
          timePeriod={card.timePeriod}
          result={card.result}
        />
      ))}
    </div>
  );
};

export default Cards;
