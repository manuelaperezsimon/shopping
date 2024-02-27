import React from "react";

import { AddToCartIcon } from "../icons/Icons";

const ProductList = ({ products }) => {
  return (
    <main className="ml-28 mr-28 mt-10">
      <ul className="flex flex-wrap gap-24 divide-gray-100 justify-between list-none">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex justify-between gap-x-6 py-6 w-[28%] shadow-lg shadow-gray-200/50 rounded-md"
          >
            <div className="flex min-w-0 gap-x-2">
              <img
                className="flex-none bg-gray-50"
                src={product.thumbnail}
                alt={product.title}
                width={120}
                height={120}
              />
              <div className="min-w-0 flex-auto flex flex-col justify-around p-4">
                <p className="text-m leading-6 text-gray-900 mb-6">
                  <strong>{product.title}</strong>
                </p>
                <p className="mt-1 leading-6 text-gray-900 mb-4 text-left">
                  {product.description}
                </p>
                <p className="mt-1 leading-6 text-gray-900 mb-6">
                  <strong>Price:</strong> € {product.price}
                </p>
                <button className="flex gap-2 font-bold items-end">
                  <AddToCartIcon />
                  Add to Cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ProductList;
