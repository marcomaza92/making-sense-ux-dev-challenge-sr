import { Cell, flexRender } from "@tanstack/react-table";
import { ProductProps } from "../Table/Table.types";
import type { RowProps } from "./Row.types";
import styles from "./Row.module.css";
import clsx from "clsx";

const Row = (props: RowProps) => {
  const { row } = props;
  return (
    <tr className={styles.tableRow}>
      {row.getVisibleCells().map((cell: Cell<ProductProps, unknown>) => (
        <td
          key={cell.id}
          className={clsx(
            styles.tableCell,
            (cell.column.columnDef.meta as { className?: string })?.className
          )}
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
      ))}
    </tr>
  );
};

export default Row;
