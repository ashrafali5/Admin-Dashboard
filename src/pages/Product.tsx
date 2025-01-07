import { ReactElement, useCallback, useState } from "react";
import AdminSideBar from "../components/AdminSideBar";
import TableHoc from "../components/TableHoc";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img =
  "https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg";
const img2 =
  "https://ziontechnologies.co.in/wp-content/uploads/2022/09/photo-1517336714731-489689fd1ca8.jpeg";

const arr: DataType[] = [
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cock Nigga 2025",
    price: 699,
    stock: 3,
    action: <Link to="/admin/product/sajsklfj">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="MackBook" />,
    name: "Mackbook",
    price: 199999,
    stock: 231,
    action: <Link to="/admin/product/lkjsid">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cock Nigga 2025",
    price: 699,
    stock: 3,
    action: <Link to="/admin/product/sajsklfj">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="MackBook" />,
    name: "Mackbook",
    price: 199999,
    stock: 231,
    action: <Link to="/admin/product/lkjsid">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cock Nigga 2025",
    price: 699,
    stock: 3,
    action: <Link to="/admin/product/sajsklfj">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="MackBook" />,
    name: "Mackbook",
    price: 199999,
    stock: 231,
    action: <Link to="/admin/product/lkjsid">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cock Nigga 2025",
    price: 699,
    stock: 3,
    action: <Link to="/admin/product/sajsklfj">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="MackBook" />,
    name: "Mackbook",
    price: 199999,
    stock: 231,
    action: <Link to="/admin/product/lkjsid">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cock Nigga 2025",
    price: 699,
    stock: 3,
    action: <Link to="/admin/product/sajsklfj">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="MackBook" />,
    name: "Mackbook",
    price: 199999,
    stock: 231,
    action: <Link to="/admin/product/lkjsid">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cock Nigga 2025",
    price: 699,
    stock: 3,
    action: <Link to="/admin/product/sajsklfj">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="MackBook" />,
    name: "Mackbook",
    price: 199999,
    stock: 231,
    action: <Link to="/admin/product/lkjsid">Manage</Link>,
  },
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cock Nigga 2025",
    price: 699,
    stock: 3,
    action: <Link to="/admin/product/sajsklfj">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="MackBook" />,
    name: "Mackbook",
    price: 199999,
    stock: 231,
    action: <Link to="/admin/product/lkjsid">Manage</Link>,
  },
];

const Product = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHoc<DataType>(columns, data, "dashboardProductBox", "Products", true),
    []
  );

  return (
    <div className="adminContainer">
      {/* sideBar */}
      <AdminSideBar />

      {/* main */}
      <main>{Table()}</main>
      <Link to="/admin/product/new" className="createProductBtn">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Product;
