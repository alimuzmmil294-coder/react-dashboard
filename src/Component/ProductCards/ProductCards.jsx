import React from "react";

const ProductCards = ({ products2026, addToCart }) => {
  return (
    <div className="flex flex-wrap gap-5 p-4 w-full">
      <div className="border rounded-lg p-4 w-100 flex flex-col">
        <h2 className="text-xl font-bold mb-2">{products2026.name}</h2>
        <h2 className="text-lg text-gray-700">{products2026.category}</h2>
        <h2 className="text-lg text-gray-700">${products2026.price}</h2>
        <h2 className="text-sm text-gray-500">{products2026.status}</h2>
        <button
          onClick={() => addToCart(products2026)}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCards;
