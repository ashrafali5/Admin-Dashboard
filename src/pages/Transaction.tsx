import { Column } from "react-table";
import AdminSideBar from "../components/AdminSideBar";
import { ReactElement, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import TableHoc from "../components/TableHoc";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    user: "Ashraf Ali",
    amount: 800000,
    discount: 10000,
    quantity: 80,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/weff">manage</Link>,
  },
  {
    user: "Ashraf Ali",
    amount: 1000000,
    discount: 20000,
    quantity: 180,
    status: <span className="green">Shiped</span>,
    action: <Link to="/admin/transaction/weff">manage</Link>,
  },
  {
    user: "Ashraf Ali",
    amount: 1200000,
    discount: 130000,
    quantity: 1900,
    status: <span className="blue">Delivered</span>,
    action: <Link to="/admin/transaction/weff">manage</Link>,
  },
];

const Transaction = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHoc<DataType>(
      columns,
      data,
      "dashboardTransactionBox",
      "Transaction",
      true
    ),
    []
  );
  return (
    <div className="adminContainer">
      {/* sideBar */}

      <AdminSideBar />

      {/* main */}
      <main>{Table()}</main>
    </div>
  );
};

export default Transaction;
