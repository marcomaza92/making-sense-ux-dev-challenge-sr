import { Cell, flexRender } from "@tanstack/react-table";
import { ProductProps } from "../Table/Table.types";
import type { RowProps } from "./Row.types";

const Row = (props: RowProps) => {
  const { row } = props;
  return (
    <tr>
      {row.getVisibleCells().map((cell: Cell<ProductProps, unknown>) => (
        <td key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
      ))}
    </tr>
  );
};

export default Row;
