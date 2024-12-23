import React from "react";
import type { ProductDetailsProps } from "./ProductDetails.types";
import styles from "./ProductDetails.module.css";

import Image from "../../atoms/Image/Image";
import Text from "../../atoms/Text/Text";
import { Cell } from "@tanstack/react-table";
import { ProductProps } from "../Table/Table.types";
import Button from "../../atoms/Button/Button";
import Label from "../Label/Label";
import clsx from "clsx";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { statusIcons } from "../../../data/constants";

const ProductDetails = (props: ProductDetailsProps) => {
  const { row, onStatusUpdate } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [confirmationText, setConfirmationText] = useState("");

  const handleOpenDialog = (event: React.MouseEvent<HTMLButtonElement>) => {
    setConfirmationText(
      (event.target as HTMLButtonElement).innerText.toLowerCase()
    );
    setIsOpen(true);
  };

  const handleUpdateStatus = () => {
    const newStatus = confirmationText === "approve" ? "Approved" : "Rejected";
    if (onStatusUpdate) {
      onStatusUpdate(row.original.id, newStatus);
    }
    setIsOpen(false);
  };

  return (
    <div className={styles.productDetailsContainer}>
      <div className={styles.productDetailsHeader}>
        <Image size="productDetail" src={row.original.image} />
      </div>
      <div className={styles.productDetailsContent}>
        <div className={styles.productDetailsTitle}>
          {row.getVisibleCells().map((cell: Cell<ProductProps, unknown>) =>
            cell.column.id === "product" ? (
              <Text
                tag="h4"
                type="heading4"
                weight="bold"
                className={styles.rowDetailTitle}
              >
                {String(cell.getValue())}
              </Text>
            ) : cell.column.id === "moreInfo" ? (
              <Text
                tag="p"
                type="subtitle1"
                className={styles.rowDetailSubtitle}
              >
                {String(cell.getValue())}
              </Text>
            ) : null
          )}
        </div>
        <div className={styles.productDetailsInformation}>
          {row
            .getVisibleCells()
            .filter(
              (cell) =>
                cell.column.id !== "product" &&
                cell.column.id !== "moreInfo" &&
                cell.column.id !== "image" &&
                cell.column.id !== "customer"
            )
            .map((cell: Cell<ProductProps, unknown>) => (
              <div
                key={cell.id}
                className={clsx(styles.rowDetail, {
                  [styles.firstItem]: cell.column.id === "status",
                  [styles.secondItem]: cell.column.id === "date",
                })}
              >
                <Text tag="p" type="body2" className={styles.rowDetailLabel}>
                  {`${String(cell.column.columnDef.header)}:`}
                </Text>

                {cell.column.id !== "status" ? (
                  <Text tag="p" type="body2" className={styles.rowDetailValue}>
                    {cell.column.id === "id"
                      ? `#${String(cell.getValue())}`
                      : String(cell.getValue())}
                  </Text>
                ) : (
                  <Label
                    type={`status${String(cell.getValue())}`}
                    text={String(cell.getValue())}
                    icon={statusIcons[String(cell.getValue()).toLowerCase()]}
                  />
                )}
              </div>
            ))}
          {row.original.status.toLowerCase() === "pending" && (
            <div className={styles.productDetailsActions}>
              <Button
                type="error"
                variant="outline"
                onClick={(event) => handleOpenDialog(event)}
              >
                <Text
                  tag="p"
                  type="caption"
                  weight="bold"
                  className={styles.uppercase}
                >
                  Reject
                </Text>
              </Button>
              <Button
                type="success"
                onClick={(event) => handleOpenDialog(event)}
              >
                <Text
                  tag="p"
                  type="caption"
                  weight="bold"
                  className={styles.uppercase}
                >
                  Approve
                </Text>
              </Button>
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <Modal
          type="confirmationStatus"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className={styles.productConfirmationModal}>
            <Text
              tag="h5"
              type="heading5"
              weight="bold"
            >{`Are you sure you want to ${confirmationText} this order?`}</Text>
            <Text
              tag="p"
              type="body1"
            >{`You are about to ${confirmationText} an order. This action cannot be undone`}</Text>
            <div className={styles.productSummary}>
              <div className={styles.productSummaryImage}>
                <Image src={row.original.image} alt="" size="thumbnail" />
              </div>
              <div className={styles.productSummaryInfo}>
                <Text tag="p" type="body2" weight="bold">
                  {row.original.product}
                </Text>
                <Text tag="p" type="caption">
                  {row.original.moreInfo}
                </Text>
              </div>
            </div>
            <div className={styles.productSummaryActions}>
              <Button type="secondary" onClick={() => setIsOpen(!isOpen)}>
                <Text
                  tag="p"
                  type="caption"
                  weight="bold"
                  className={styles.uppercase}
                >
                  Cancel
                </Text>
              </Button>
              <Button type="primary" onClick={handleUpdateStatus}>
                <Text
                  tag="p"
                  type="caption"
                  weight="bold"
                  className={styles.uppercase}
                >
                  {`Yes, ${confirmationText}`}
                </Text>
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProductDetails;
