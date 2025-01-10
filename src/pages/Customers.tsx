import { Link } from "react-router-dom";
import AdminSideBar from "../components/AdminSideBar";
import { ReactElement, useCallback, useState } from "react";
import { Column } from "react-table";
import TableHoc from "../components/TableHoc";
import { FaTrash } from "react-icons/fa";

interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img =
  "https://cdn.pixabay.com/photo/2024/05/07/00/59/hulk-8744607_1280.jpg";
const img2 =
  "https://hips.hearstapps.com/hmg-prod/images/thor-1658259662.jpeg?crop=0.563xw:1.00xh;0.214xw,0&resize=640:*";

const arr: DataType[] = [
  {
    avatar: <img src={img} alt="Hulk" />,
    name: "Hulk",
    email: "hulk@example.com",
    gender: "male",
    role: "Administrator",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: <img src={img2} alt="Thor" />,
    name: "Thor",
    email: "thor@example.com",
    gender: "male",
    role: "Editor",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];

const Customers = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHoc<DataType>(
      columns,
      data,
      "dashboardCustomerBox",
      "Customers",
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

export default Customers;
