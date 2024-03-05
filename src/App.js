import React from "react";
import ProductList from "./components/ProductsList/ProductsList";
import productsData from "../src/mocks/products.json";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import { useFilters } from "./hooks/useFilters";

function App() {
  const { products } = productsData;
  const { filterProducts, setFilters } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <div className="App">
      <Header />
      <Filters />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
