// import { useState } from "react";
import AdminSideBar from "../../components/AdminSideBar";
// import { OrderItemType, OrderType } from "../../types";

// const img =
//   "https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg";

// const orderItems: OrderItemType[] = [
//   {
//     _id: "asdddsads",
//     name: "Puma Shoes",
//     photo: img,
//     quantity: 4,
//     price: 60000,
//   },
// ];

const TransactionManagement = () => {
  //   const [order, setOrder] = useState<OrderType>({
  //     name: "Ashraf Ali",
  //     address: "5 main road",
  //     city: "Badarpur",
  //     country: "India",
  //     state: "Delhi",
  //     pinCode: 110044,
  //     status: "Delivered",
  //     subtotal: 5000,
  //     discount: 1000,
  //     shippingCharges: 0,
  //     tax: 75,
  //     total: 5000 + 75 + 0 - 1000,
  //     orderItems,
  //     _id: "asdsdsdr",
  //   });

  //   const {
  //     name,
  //     address,
  //     city,
  //     country,
  //     state,
  //     pinCode,
  //     status,
  //     subtotal,
  //     discount,
  //     shippingCharges,
  //     tax,
  //     total,
  //   } = order;

  return (
    <div className="adminContainer">
      {/* sideBar */}
      <AdminSideBar />

      {/* main */}
      <main className="transactionManage">
        <section>
          <h2>Order Items</h2>
        </section>
      </main>
    </div>
  );
};

export default TransactionManagement;
