import AdminSideBar from "../../components/AdminSideBar";
import { BarChart } from "../../components/Charts";

const BarCharts = () => {
  return (
    <div className="adminContainer">
      <AdminSideBar />
      <main className="chart-container">
        <h1>Bar Charts</h1>
        <section>
          <BarChart
            data_1={[91, 95, 100, 205, 310, 355, 360]}
            data_2={[92, 90, 180, 110, 150, 202, 380]}
            title_1="Products"
            title_2="Users"
            bgColor_1={`hsl(260,50%,30%)`}
            bgColor_2={`hsl(360,90%,90%)`}
          />
          <h2>Top Selling Products & Top Customers </h2>
        </section>

        <section>
          <BarChart
            horizontal={true}
            data_1={[91, 95, 100, 205, 310, 355, 360]}
            data_2={[]}
            title_1="Products"
            title_2="Users"
            bgColor_1={`hsl(260,50%,30%)`}
            bgColor_2=""
          />
          <h2>Top Selling Products & Top Customers </h2>
        </section>
      </main>
    </div>
  );
};

export default BarCharts;
