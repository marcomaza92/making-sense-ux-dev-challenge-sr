import { Cell, flexRender } from "@tanstack/react-table";
import { ProductProps } from "../Table/Table.types";
import type { RowProps } from "./Row.types";
import styles from "./Row.module.css";
import clsx from "clsx";
import { useState } from "react";
import Modal from "../Modal/Modal";
import ProductDetails from "../ProductDetails/ProductDetails";

const Row = (props: RowProps) => {
  const { row, onStatusUpdate } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <tr onClick={() => setIsOpen(true)} className={styles.tableRow}>
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

      {isOpen && (
        <Modal
          type="productDetails"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <ProductDetails row={row} onStatusUpdate={onStatusUpdate} />
        </Modal>
      )}
    </>
  );
};

export default Row;
