import React from "react";
import { CartIcon } from "../icons/Icons";

const Header = () => {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 border-b-2"
        aria-label="Global"
      >
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <h1 className="flex items-center gap-x-1 text-m font-semibold leading-6 text-gray-900">
              Ecommerce
            </h1>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-m font-semibold leading-6 text-gray-900">
            <div className="flex gap-4">
              <CartIcon />
              <span>1</span>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
