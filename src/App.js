import React from "react";
import ProductList from "./components/ProductsList/ProductsList";
import productsData from "../src/mocks/products.json";
import Header from "./components/Header/Header";

function App() {
  const { products } = productsData;
  return (
    <div className="App">
      <Header />
      <ProductList products={products} />
    </div>
  );
}

export default App;
