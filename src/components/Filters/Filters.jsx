import { useId } from "react";
import { useFilters } from "../../hooks/useFilters";

const Filters = () => {
  const minPriceFilterId = useId();
  const categoryFilterId = useId();
  const { filters, setFilters } = useFilters();

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="flex gap-8 justify-between px-16 py-8">
      <div className="flex gap-4 items-center">
        <label
          htmlFor={minPriceFilterId}
          className="text-m font-semibold leading-6 text-gray-900"
        >
          Min Price:{" "}
        </label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>€ {filters.minPrice}</span>
      </div>
      <div className="flex gap-4 items-center">
        <label
          htmlFor={categoryFilterId}
          className="text-m font-semibold leading-6 text-gray-900"
        >
          Category:
        </label>
        <select
          id={categoryFilterId}
          onChange={handleChangeCategory}
          className="p-2"
        >
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
          <option value="fragrances">Fragrances</option>
          <option value="skincare">Skincare</option>
        </select>
      </div>
    </section>
  );
};

export default Filters;
