import AdminSideBar from "../../components/AdminSideBar";

const TransactionManagement = () => {
  return (
    <div className="adminContainer">
      {/* sideBar */}
      <AdminSideBar />

      {/* main */}
      <main className="transactionManage">
        <h1>TransactionManagement</h1>
      </main>
    </div>
  );
};

export default TransactionManagement;
