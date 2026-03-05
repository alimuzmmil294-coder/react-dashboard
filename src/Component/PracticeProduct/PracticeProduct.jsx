import React, { useState } from "react";
import PracticeProductCard from "../PracticeProductCard/PracticeProductCard";

const PracticeProduct = () => {
  const products = [
    {
      id: 1,
      name: "Minimalist Leather Wallet",
      category: "Accessories",
      price: 45.0,
      stock: 120,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Noise-Cancelling Headphones",
      category: "Electronics",
      price: 299.99,
      stock: 45,
      rating: 4.9,
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      category: "Apparel",
      price: 25.5,
      stock: 200,
      rating: 4.5,
    },
    {
      id: 4,
      name: "Smart Fitness Watch",
      category: "Electronics",
      price: 180.0,
      stock: 30,
      rating: 4.2,
    },
    {
      id: 5,
      name: "Ceramic Coffee Mug",
      category: "Home & Kitchen",
      price: 15.0,
      stock: 85,
      rating: 4.7,
    },
    {
      id: 6,
      name: "Yoga Mat (Non-Slip)",
      category: "Fitness",
      price: 55.0,
      stock: 60,
      rating: 4.6,
    },
    {
      id: 7,
      name: "Portable Bluetooth Speaker",
      category: "Electronics",
      price: 89.99,
      stock: 110,
      rating: 4.4,
    },
    {
      id: 8,
      name: "Stainless Steel Water Bottle",
      category: "Home & Kitchen",
      price: 28.0,
      stock: 150,
      rating: 4.8,
    },
    {
      id: 9,
      name: "Running Shoes",
      category: "Apparel",
      price: 120.0,
      stock: 40,
      rating: 4.3,
    },
    {
      id: 10,
      name: "LED Desk Lamp",
      category: "Home & Office",
      price: 35.0,
      stock: 75,
      rating: 4.1,
    },
    {
      id: 11,
      name: "Mechanical Keyboard",
      category: "Electronics",
      price: 110.0,
      stock: 25,
      rating: 4.9,
    },
    {
      id: 12,
      name: "Reusable Grocery Bags (Set of 5)",
      category: "Eco-Friendly",
      price: 18.5,
      stock: 300,
      rating: 4.7,
    },
    {
      id: 13,
      name: "Cast Iron Skillet",
      category: "Home & Kitchen",
      price: 65.0,
      stock: 20,
      rating: 4.8,
    },
    {
      id: 14,
      name: "Professional Chef's Knife",
      category: "Home & Kitchen",
      price: 145.0,
      stock: 15,
      rating: 4.9,
    },
    {
      id: 15,
      name: "Duffle Bag",
      category: "Travel",
      price: 75.0,
      stock: 50,
      rating: 4.4,
    },
    {
      id: 16,
      name: "Electric Toothbrush",
      category: "Personal Care",
      price: 95.0,
      stock: 90,
      rating: 4.6,
    },
    {
      id: 17,
      name: "Succulent Plant Set",
      category: "Garden",
      price: 32.0,
      stock: 40,
      rating: 4.5,
    },
    {
      id: 18,
      name: "Gaming Mouse Pad",
      category: "Electronics",
      price: 22.0,
      stock: 130,
      rating: 4.2,
    },
    {
      id: 19,
      name: "Wool Blend Throw Blanket",
      category: "Home & Decor",
      price: 50.0,
      stock: 35,
      rating: 4.7,
    },
    {
      id: 20,
      name: "Wireless Charging Pad",
      category: "Electronics",
      price: 29.99,
      stock: 100,
      rating: 4.3,
    },
  ];

  const [cart, setCart] = useState([]);
  const [querry, setQuerry] = useState("");

  // console.log(querry);

  function addtocart(product) {
    const exists = cart.find((item) => item.id === product.id);

    if (!exists) {
      setCart([...cart, product]);
    } else {
      alert("Already Exists!");
    }
  }

  return (
    <div className="">
      <input
        type="text"
        name=""
        className="border"
        id=""
        onChange={(e) => setQuerry(e.target.value)}
      />
      {/* console.log(querry); */}
      <main className="">
        <div className="flex flex-wrap gap-2.5 ">
          {products
            .filter((product) =>
              product.name.toLowerCase().includes(querry.toLowerCase()),
            )
            .map((product) => (
              <PracticeProductCard product={product} addtocart={addtocart} />
            ))}
        </div>
      </main>
      <h2 className="text-3xl border ">Cart </h2>
      <div className="">
        {cart.map((item) => (
          <PracticeProductCard product={item} />
        ))}
      </div>
    </div>
  );
};

export default PracticeProduct;
