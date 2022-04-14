import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Products from "./components/products/Products";
import Dashboard from "./components/Dashboard";
import ProductsSearch from "./components/products/ProductsSearch";
import AddProduct from "./components/products/AddProduct";
import SingleProduct from "./components/products/SingleProduct";
import ProductsList from "./components/products/ProductsList";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="dashboard"> Dashboard </Link>
        <Link to="products/search"> Products </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Products />}>
          <Route path="search" element={<ProductsSearch />} />
          <Route path="all" element={<ProductsList />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
