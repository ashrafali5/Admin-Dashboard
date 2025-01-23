import { useState } from "react";
import AdminSideBar from "../../components/AdminSideBar";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";

const img =
  "https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg";

const orderItems: OrderItemType[] = [
  {
    _id: "asdddsads",
    name: "Puma Shoes",
    photo: img,
    quantity: 4,
    price: 60000,
  },
  {
    _id: "asdddsads",
    name: "Puma Shoes",
    photo: img,
    quantity: 4,
    price: 60000,
  },
  {
    _id: "asdddsads",
    name: "Puma Shoes",
    photo: img,
    quantity: 4,
    price: 60000,
  },
  {
    _id: "asdddsads",
    name: "Puma Shoes",
    photo: img,
    quantity: 4,
    price: 60000,
  },
];

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Ashraf Ali",
    address: "5 main road",
    city: "Badarpur",
    country: "India",
    state: "Delhi",
    pinCode: 110044,
    status: "Processing",
    subtotal: 5000,
    discount: 1000,
    shippingCharges: 0,
    tax: 75,
    total: 5000 + 75 + 0 - 1000,
    orderItems,
    _id: "asdsdsdr",
  });

  const {
    name,
    address,
    city,
    country,
    state,
    pinCode,
    status,
    subtotal,
    discount,
    shippingCharges,
    tax,
    total,
  } = order;

  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };

  return (
    <div className="adminContainer">
      {/* sideBar */}
      <AdminSideBar />

      {/* main */}
      <main className="transactionManage">
        <section>
          <h2>Order Items</h2>
          {order.orderItems.map((i) => (
            <ProductCard
              name={i.name}
              photo={i.photo}
              quantity={i.quantity}
              price={i.price}
              _id={i._id}
            />
          ))}
        </section>
        <article className="shippingInfoCard">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name:{name}</p>
          <p>
            Address:{`${address}, ${city}, ${state}, ${country}, ${pinCode}`}
          </p>
          <h5>Amount Info</h5>
          <p>Subtotal:{subtotal}</p>
          <p>Shipping Charges:{shippingCharges}</p>
          <p>Tax:{tax}</p>
          <p>Discount:{discount}</p>
          <p>Total:{total}</p>

          <h5>Status Info</h5>
          <p>
            Status:{" "}
            <span
              className={
                status === "Delivered"
                  ? "blue"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              {status}
            </span>
          </p>
          <button onClick={updateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  );
};

const ProductCard = ({ name, photo, quantity, price, _id }: OrderItemType) => (
  <div className="transictionProductCard">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      ${price} X {quantity} = ${price * quantity}
    </span>
  </div>
);

export default TransactionManagement;
