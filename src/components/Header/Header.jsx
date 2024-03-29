import React from "react";
import { Cart } from "../Cart/Cart";

const Header = () => {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex flex-col items-center sm:flex-row justify-between p-4 sm:p-6 lg:p-8 border-b-2 lg:px-16">
        <div className="flex items-center mb-4 sm:mb-0">
          <h1 className="text-m font-semibold leading-6 text-gray-900">
            Ecommerce
          </h1>
        </div>
        <div className="flex items-center">
          <div
            href="#"
            className="text-m font-semibold leading-6 text-gray-900"
          >
            <div className="flex items-center gap-2">
              <Cart />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
