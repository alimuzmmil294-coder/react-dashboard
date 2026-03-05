import React from "react";

const ProductsCart2 = ({ product, addToCart }) => {
  return (
    <div>
      <div className="flex  h-full rounded-md flex-col w-[300px]  p-5 my-5 bg-blue-950 hover:bg-blue-800 shadow-lg text-white relative">
        <h1 className="text-3xl">{product.name}</h1>
        <h1 className="text-[20px]">{product.category}</h1>
        <h1 className="text-[20px]">{product.price}</h1>
        <h1 className="text-[20px]">{product.stock}</h1>
        <h1 className="text-[20px]">{product.rating}</h1>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-white text-blue-950 font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductsCart2;
