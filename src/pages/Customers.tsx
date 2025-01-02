import AdminSideBar from "../components/AdminSideBar";

const Customers = () => {
  return (
    <div className="adminContainer">
      {/* sideBar */}

      <AdminSideBar />

      {/* main */}
      <main>
        <h1>Customer</h1>
      </main>
    </div>
  );
};

export default Customers;
