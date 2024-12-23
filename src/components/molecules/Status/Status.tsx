import clsx from "clsx";
import styles from "./Status.module.css";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import type { ProductStatusProps } from "../Table/Table.types";
import Text from "../../atoms/Text/Text";

const getStatusStyles = (status: ProductStatusProps) => {
  return clsx(styles.container, {
    [styles.approved]: status === "Approved",
    [styles.pending]: status === "Pending",
    [styles.rejected]: status === "Rejected",
  });
};

export const Status = ({ status }: { status: ProductStatusProps }) => {
  return (
    <div className={getStatusStyles(status)}>
      {status === "Approved" && <CheckCircleIcon aria-hidden="true" />}
      {status === "Pending" && <ExclamationTriangleIcon aria-hidden="true" />}
      {status === "Rejected" && <XMarkIcon aria-hidden="true" />}
      <Text tag="p" type="caption">
        {status}
      </Text>
    </div>
  );
};
