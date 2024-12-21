export type ProductStatusProps = "Approved" | "Pending" | "Rejected";

export type ProductProps = {
  id: number;
  customer: string;
  date: string;
  product: string;
  status: ProductStatusProps;
  email: string;
  amount: string;
  paymentMethod: string;
};

export type TableProps = {
  data: ProductProps[];
};
