import { CardProps } from "../components/molecules/Card/Card.types";
import { Table } from "../components/molecules/Table/Table";
import type { ProductProps } from "../components/molecules/Table/Table.types";
import Cards from "../components/organisms/Cards/Cards";
import data from "../data/data.json";

export const Dashboard = () => {
  return (
    <section>
      <Cards cards={data.cards as CardProps[]} />
      <Table data={data.orders as ProductProps[]} />
    </section>
  );
};
