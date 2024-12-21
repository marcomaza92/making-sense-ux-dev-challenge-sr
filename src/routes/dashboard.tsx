import { Table } from "../components/molecules/Table/Table";
import type { ProductProps } from "../components/molecules/Table/Table.types";
import data from "../data/data.json";

export const Dashboard = () => <Table data={data.orders as ProductProps[]} />;
