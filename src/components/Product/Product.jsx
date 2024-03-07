const Product = ({ thumbnail, title, price, quantity, addToCart }) => {
  return (
    <>
      <li className="border-b border-gray-700 pb-4 mt-10">
        <img src={thumbnail} className="aspect-w-16 aspect-h-9 w-full" />
      </li>
      <div className="mt-2">
        <span className="text-gray-700">
          <strong>{title}</strong> - € {price}
        </span>
      </div>
      <footer className="flex gap-2 items-center">
        <small>
          Qty: <span className="ml-2">{quantity}</span>
        </small>
        <button className="p-2" onClick={addToCart}>
          +
        </button>
      </footer>
    </>
  );
};

export default Product;
