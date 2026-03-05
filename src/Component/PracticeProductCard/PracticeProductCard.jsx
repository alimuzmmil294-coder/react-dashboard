import React from "react";

const PracticeProductCard = ({ product, addtocart }) => {
  return (
    <div className="flex flex-wrap gap-2.5 ">
      <div className=" m-2 p-2.5 bg-[#089CFF] rounded-2xl flex flex-col w-[100%] gap-2.5">
        <h1 className="text-[#B9EAF7] text-2xl">{product.name}</h1>
        <h1 className="text-[#B9EAF7] text-[18px] ">{product.category}</h1>
        <h1 className="text-[#B9EAF7] text-[18px] ">{product.price}</h1>
        <h1 className="text-[#B9EAF7] text-[18px] ">{product.stock}</h1>
        <h1 className="text-[#B9EAF7] text-[18px] ">{product.rating}</h1>
        <button
          onClick={() => addtocart(product)}
          className="bg-white text-[#089CFF] px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PracticeProductCard;
