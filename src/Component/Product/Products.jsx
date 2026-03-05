import React, { useState } from "react";
import ProductCards from "../ProductCards/ProductCards";

const Products = () => {
  const [cart, setCart] = useState([]);
  const products2026 = [
    {
      id: "tech-001",
      name: "Lenovo Legion Pro Rollable",
      category: "Laptops",
      price: 2499.99,
      status: "Concept/Early Release",
    },
    {
      id: "home-002",
      name: "Roborock Saros Rover",
      category: "Smart Home",
      price: 1599.0,
      status: "Available",
    },
    {
      id: "wear-003",
      name: "Samsung Galaxy Z TriFold",
      category: "Mobile",

      price: 1899.99,
      status: "Pre-order",
    },
    {
      id: "health-004",
      name: "Withings Body Scan 2",
      category: "Wellness",

      price: 449.95,
      status: "Available",
    },
    {
      id: "audio-005",
      name: "TDM Neo Hybrid",
      category: "Audio",

      price: 349.0,
      status: "New Release",
    },
    {
      id: "life-006",
      name: "Lego Smart Play Bricks",
      category: "Toys",
      price: 129.99,
      status: "March 2026 Launch",
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  console.log(cart);

  return (
    <div>
      {products2026.map((product) => (
        <ProductCards
          key={product.id}
          products2026={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default Products;
