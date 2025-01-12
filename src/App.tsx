import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";

const ToDashButton = lazy(() => import("./components/ToDashButton"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Product = lazy(() => import("./pages/Product"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Customers = lazy(() => import("./pages/Customers"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const ProductManagement = lazy(
  () => import("./pages/management/ProductManagement")
);
const TransactionManagement = lazy(
  () => import("./pages/management/TransactionManagement")
);
const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<ToDashButton />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Product />} />
          <Route path="/admin/transaction" element={<Transaction />} />
          <Route path="/admin/customers" element={<Customers />} />

          {/* Apps */}

          {/* Charts */}

          {/* Management */}
          <Route path="/admin/product/new" element={<NewProduct />}></Route>
          <Route
            path="/admin/product/:id"
            element={<ProductManagement />}
          ></Route>
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
          ></Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
