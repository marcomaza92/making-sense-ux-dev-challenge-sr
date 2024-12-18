import { ProductProps, Table } from "../components/table/table";
import data from "../data/data.json";

export const Dashboard = () => <Table data={data.orders as ProductProps[]} />;
