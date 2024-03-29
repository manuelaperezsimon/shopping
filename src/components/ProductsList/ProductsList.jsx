import React from "react";
import { useCart } from "../../hooks/useCart";
import { AddToCartIcon, RemoveFromCartIcon } from "../icons/Icons";

const ProductList = ({ products }) => {
  const { addToCart, cart, removeFromCart } = useCart();
  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="ml-4 mr-4 mt-10 sm:ml-8 sm:mr-8 lg:px-8">
      <ul className="grid gap-4 sm:gap-6 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 list-none">
        {products?.map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <li
              key={product.id}
              className="bg-white rounded-md shadow-lg sm:shadow-gray-200/50 mt-8 h-full"
            >
              <div className="flex flex-col h-full">
                <img
                  className="w-full h-40 object-scale-down mb-6"
                  src={product.thumbnail}
                  alt={product.title}
                />
                <div className="flex flex-col justify-between p-4 h-full">
                  <div>
                    <p className="text-m font-semibold text-gray-900 mb-2">
                      {product.title}
                    </p>
                    <p className="text-sm text-gray-700 mb-4">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <p className="text-sm text-gray-900">
                      <strong>Price:</strong> € {product.price}
                    </p>
                    <button
                      className={`flex items-center mt-2 px-3 py-2 gap-4 border text-sm font-semibold text-black rounded-md ${
                        isProductInCart
                          ? "bg-slate-400"
                          : "hover:bg-black-600 focus:bg-black-600"
                      } focus:outline-none focus:ring focus:ring-black-300`}
                      onClick={() =>
                        isProductInCart
                          ? removeFromCart(product)
                          : addToCart(product)
                      }
                    >
                      {isProductInCart ? (
                        <>
                          <RemoveFromCartIcon className="w-4 h-4 mr-1" />
                          <span>Remove from Cart</span>
                        </>
                      ) : (
                        <>
                          <AddToCartIcon className="w-4 h-4 mr-1" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default ProductList;
