import { Row } from "@tanstack/react-table";
import { ProductProps, ProductStatusProps } from "../Table/Table.types";

export interface RowProps {
  row: Row<ProductProps>;
  onStatusUpdate: (id: number, newStatus: ProductStatusProps) => void;
}
