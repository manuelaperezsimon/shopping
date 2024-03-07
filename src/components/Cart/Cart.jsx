import { useId, useState } from "react";
import { useCart } from "../../hooks/useCart";
import { CartIcon, ClearCartIcon, CloseIcon } from "../icons/Icons";
import Product from "../Product/Product";

export function Cart() {
  const cartCheckboxId = useId();
  const [isChecked, setIsChecked] = useState(false);
  const { cart, clearCart, addToCart } = useCart();

  return (
    <>
      <label htmlFor={cartCheckboxId} className="flex gap-2 cursor-pointer">
        <CartIcon />
      </label>
      <input
        id={cartCheckboxId}
        type="checkbox"
        hidden
        onClick={() => setIsChecked((prev) => !prev)}
      />
      <div
        className={`${
          isChecked ? "block" : "hidden"
        } fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 z-50 overflow-auto`}
      >
        <aside className="bg-white p-8 absolute top-0 right-12 bottom-0 overflow-auto w-96">
          <button
            onClick={() => setIsChecked(false)}
            className="absolute right-8"
          >
            <CloseIcon className="w-4 h-4 mr-1 cursor-pointer" />
          </button>
          <ul>
            {cart.map((product) => (
              <Product
                key={product.id}
                addToCart={() => addToCart(product)}
                {...product}
              />
            ))}
          </ul>
          {cart.length === 0 ? (
            <div className="flex justify-between">
              <span className="font-bold">Your cart is empty</span>
            </div>
          ) : (
            <button
              className="mt-4 px-3 py-2 border text-sm font-semibold text-white bg-black rounded-md focus:outline-none focus:ring focus:ring-black-300 flex gap-4 items-center"
              onClick={() => {
                clearCart();
                setIsChecked(false);
              }}
            >
              <ClearCartIcon className="w-4 h-4 mr-1" />
              Clear cart
            </button>
          )}
        </aside>
      </div>
    </>
  );
}
