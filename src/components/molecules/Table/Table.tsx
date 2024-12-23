import React, { useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import type {
  ProductProps,
  ProductStatusProps,
  TableProps,
} from "./Table.types";
import Row from "../Row/Row";
import styles from "./Table.module.css";
import Text from "../../atoms/Text/Text";
import Label from "../Label/Label";
import clsx from "clsx";
import { statusIcons } from "../../../data/constants";
import Search from "../Search/Search";
import EmptyState from "../EmptyState/EmptyState";

const defaultColumns: ColumnDef<ProductProps>[] = [
  {
    header: "Customer",
    accessorKey: "customer",
    cell: (info) => (
      <>
        <Text tag="p" type="body2" weight="bold">
          {String(info.getValue())}
        </Text>
        <Text tag="p" type="caption" weight="medium">
          {info.row.original.email}
        </Text>
      </>
    ),
  },
  {
    header: "Date",
    accessorKey: "date",
    meta: { className: styles.hiddenOnMobileAndTablet },
    cell: (info) => (
      <Text tag="p" type="body2">
        {String(info.getValue())}
      </Text>
    ),
  },
  {
    header: "Product",
    accessorKey: "product",
    cell: (info) => (
      <Text tag="p" type="body2">
        {String(info.getValue())}
      </Text>
    ),
  },
  {
    header: "Status",
    accessorKey: "status",
    meta: { className: styles.hiddenOnMobile },
    cell: (info) => (
      <Label
        type={`status${String(info.getValue())}`}
        text={String(info.getValue())}
        icon={statusIcons[String(info.getValue()).toLowerCase()]}
      />
    ),
  },
  {
    header: "Amount",
    accessorKey: "amount",
    meta: {
      className: `${styles.hiddenOnMobileAndTablet} ${styles.textRight}`,
    },
    cell: (info) => (
      <div className={styles.tableCellContent}>
        <Text tag="p" type="body2" weight="bold">
          {String(info.getValue())}
        </Text>
      </div>
    ),
  },
  {
    header: "Payment Method",
    accessorKey: "paymentMethod",
    meta: { className: styles.alwaysHidden },
  },
  {
    header: "Transaction ID",
    accessorKey: "id",
    meta: { className: styles.alwaysHidden },
  },
  {
    header: "More Info",
    accessorKey: "moreInfo",
    meta: { className: styles.alwaysHidden },
  },
  {
    header: "Image",
    accessorKey: "image",
    meta: { className: styles.alwaysHidden },
  },
];

export const Table = (props: TableProps) => {
  const { data: initialData } = props;
  const [data, setData] = useState(initialData);
  const [searchValue, setSearchValue] = useState("");
  const [columns] = React.useState(() => [...defaultColumns]);
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const handleStatusUpdate = (id: number, newStatus: ProductStatusProps) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
  });

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const filteredData = table
    .getRowModel()
    .rows.filter((item) =>
      item.original.customer.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <Text tag="h5" type="heading5" weight="bold">
          Transactions
        </Text>
        <Text tag="p" type="body2">
          Recent transactions from your store.
        </Text>
      </div>
      <div className={styles.tableSearch}>
        <Search onSearchChange={handleSearchChange} />
      </div>
      {filteredData.length === 0 ? (
        <div className={styles.tableEmptyState}>
          <EmptyState type="transactions" />
        </div>
      ) : (
        <table className={styles.tableContent}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr className={styles.tableHeaderRow} key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    onClick={header.column.getToggleSortingHandler()}
                    className={clsx(
                      styles.tableHeaderCell,
                      (header.column.columnDef.meta as { className?: string })
                        ?.className
                    )}
                  >
                    <Text tag="p" type="caption" weight="medium">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </Text>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {filteredData.map((row) => (
              <Row key={row.id} row={row} onStatusUpdate={handleStatusUpdate} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
