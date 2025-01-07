import { BsSearch } from "react-icons/bs";
import AdminSideBar from "../components/AdminSideBar";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/deadpool2.jpg";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import DashboardTable from "../components/DashboardTable";

const Dashboard = () => { 
  return (
    <div className="adminContainer">
      {/* sideBar */}
      <AdminSideBar />

      {/* main */}
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs, etc." />
          <FaRegBell />
          <img src={userImg} alt="user" />
        </div>
        <section className="widgetContainer">
          <WidgetItem
            percent={53}
            amount={true}
            value={250000}
            heading="Revenue"
            color="#54be0c"
          />
          <WidgetItem
            percent={-30}
            amount={false}
            value={420}
            heading="Users"
            color="#ff0000"
          />
          <WidgetItem
            percent={90}
            amount={false}
            value={32000}
            heading="Transactions"
            color="#0e5b80"
          />
          <WidgetItem
            percent={42}
            amount={false}
            value={5900}
            heading="Products"
            color="#001aff"
          />
        </section>
        <section className="graphContainer">
          <div className="revenueChart">
            <h2>Revenue & Transaction</h2>
            {/* Graph here */}
            <BarChart
              data_1={[150, 377, 444, 500, 625, 750, 900]}
              data_2={[120, 912, 75, 343, 800, 325, 290, 309]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(18, 47, 92)"
              bgColor_2="rgb(32, 129, 129)"
            />
          </div>
          <div className="dashboardCategories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((i) => (
                <CategoryItem
                  key={i.heading}
                  heading={i.heading}
                  value={i.value}
                  color={`hsl(${i.value * 4}, ${i.value}%, 50%)`}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="transactionContainer">
          <div className="genderChart">
            <h2>Gender Ratio </h2>
            <DoughnutChart
              labels={["Male", "Female"]}
              data={[30, 25]}
              backgroundColor={[
                "hsl(305.1428571428571, 55.55555555555556%, 50.588235294117645%)",
                "hsl(213,100%,50%)",
              ]}
              cutout={90}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>
          {/* Table */}
          <DashboardTable data={data.transaction}/>
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {/* Extra $ shows as amount sign */}
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> +{percent}%
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%
        </span>
      )}
    </div>
    <div
      style={{
        background: `conic-gradient(
      ${color}, ${Math.abs((percent / 100) * 360)}deg,
      rgb(255,255,255) 0
        )`,
      }}
      className="widgetCircle"
    >
      <span
        style={{
          color,
        }}
      >
        {percent}%
      </span>
    </div>
  </article>
);

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="categoryItem">
    <h5> {heading} </h5>
    <div>
      <div
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      ></div>
    </div>
    <span>{value}%</span>
  </div>
);

export default Dashboard;
