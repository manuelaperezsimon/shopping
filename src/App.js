import React from "react";
import ProductList from "./components/ProductsList/ProductsList";
import productsData from "../src/mocks/products.json";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import { useFilters } from "./hooks/useFilters";
import { CartProvider } from "./context/cart";

function App() {
  const { products } = productsData;
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <Header />
      <Filters />
      <ProductList products={filteredProducts} />
    </CartProvider>
  );
}

export default App;
