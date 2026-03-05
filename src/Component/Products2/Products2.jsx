import React, { useState } from "react";
import ProductsCart2 from "../ProductsCart2/ProductsCart2";

const Products2 = () => {
  const [cart, setCart] = useState([]);
  const [querry, setQuery] = useState("");

  const Products = [
    {
      id: 1,
      name: "Neural Link Headphones",
      category: "Electronics",
      price: 299.99,
      stock: 15,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Eco-Thread Cotton Tee",
      category: "Apparel",
      price: 35.0,
      stock: 50,
      rating: 4.2,
    },
    {
      id: 3,
      name: "Smart Brew Coffee Maker",
      category: "Home Appliances",
      price: 120.5,
      stock: 8,
      rating: 4.5,
    },
    {
      id: 4,
      name: "Titanium Water Bottle",
      category: "Fitness",
      price: 45.99,
      stock: 100,
      rating: 4.9,
    },
    {
      id: 5,
      name: "Ergo-Lift Standing Desk",
      category: "Office",
      price: 540.0,
      stock: 4,
      rating: 4.7,
    },
    {
      id: 6,
      name: "Glow-Step Running Shoes",
      category: "Fitness",
      price: 110.0,
      stock: 22,
      rating: 4.3,
    },
    {
      id: 7,
      name: "Pocket Cine-Projector",
      category: "Electronics",
      price: 199.0,
      stock: 12,
      rating: 4.0,
    },
    {
      id: 8,
      name: "Nordic Wool Blanket",
      category: "Home",
      price: 85.0,
      stock: 30,
      rating: 4.6,
    },
    {
      id: 9,
      name: "Z-Wave Smart Lock",
      category: "Security",
      price: 215.0,
      stock: 18,
      rating: 4.4,
    },
    {
      id: 10,
      name: "Ultra-Light Carbon Bike",
      category: "Outdoors",
      price: 1200.0,
      stock: 3,
      rating: 5.0,
    },
    {
      id: 11,
      name: "Minimalist Leather Wallet",
      category: "Accessories",
      price: 55.0,
      stock: 65,
      rating: 4.1,
    },
    {
      id: 12,
      name: "Aero-Press Go",
      category: "Home Appliances",
      price: 40.0,
      stock: 40,
      rating: 4.8,
    },
    {
      id: 13,
      name: "Solar-Power Power Bank",
      category: "Electronics",
      price: 65.0,
      stock: 25,
      rating: 4.5,
    },
  ];

  const people = [
  { id: 1, name: "Alice Johnson", age: 28, profession: "Software Engineer", location: "New York", email: "alice.j@example.com" },
  { id: 2, name: "Marcus Chen", age: 34, profession: "UX Designer", location: "San Francisco", email: "m.chen@example.com" },
  { id: 3, name: "Elena Rodriguez", age: 41, profession: "Project Manager", location: "Austin", email: "elena.rod@example.com" },
  { id: 4, name: "David Kim", age: 24, profession: "Data Analyst", location: "Seattle", email: "dkim_data@example.com" },
  { id: 5, name: "Sarah Miller", age: 31, profession: "Marketing Specialist", location: "Chicago", email: "sarah.m@example.com" },
  { id: 6, name: "James Wilson", age: 45, profession: "Financial Advisor", location: "Charlotte", email: "j.wilson@example.com" },
  { id: 7, name: "Priya Sharma", age: 29, profession: "Content Creator", location: "Los Angeles", email: "priya.creates@example.com" },
  { id: 8, name: "Liam O'Connor", age: 37, profession: "Cybersecurity Analyst", location: "Boston", email: "liam.oc@example.com" },
  { id: 9, name: "Isabella Silva", age: 26, profession: "Graphic Designer", location: "Miami", email: "isabella.s@example.com" },
  { id: 10, name: "Noah Wright", age: 52, profession: "Architect", location: "Denver", email: "n.wright@example.com" },
  { id: 11, name: "Chloe Dupont", age: 33, profession: "Chef", location: "New Orleans", email: "chloe.cooks@example.com" },
  { id: 12, name: "Oliver Smith", age: 22, profession: "Junior Developer", location: "Portland", email: "osmith@example.com" },
  { id: 13, name: "Amara Okoro", age: 39, profession: "HR Director", location: "Atlanta", email: "a.okoro@example.com" },
  { id: 14, name: "Lucas Müller", age: 30, profession: "Mechanical Engineer", location: "Detroit", email: "lucas.m@example.com" },
  { id: 15, name: "Sophia Rossi", age: 27, profession: "Photographer", location: "Las Vegas", email: "s.rossi@example.com" },
  { id: 16, name: "Benjamin Lee", age: 48, profession: "Real Estate Agent", location: "San Diego", email: "ben.lee@example.com" },
  { id: 17, name: "Mia Thompson", age: 35, profession: "Copywriter", location: "Nashville", email: "mia.write@example.com" },
  { id: 18, name: "Ethan Garcia", age: 23, profession: "Video Editor", location: "Phoenix", email: "egarcia@example.com" },
  { id: 19, name: "Ava Williams", age: 40, profession: "Nurse Practitioner", location: "Philadelphia", email: "ava.w@example.com" },
  { id: 20, name: "William Brown", age: 55, profession: "Retired Pilot", location: "Salt Lake City", email: "w.brown@example.com" }
];

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (!exist) {
      setCart([...cart, product]);
    } else {
      alert("Product already in cart");
    }
    return;
  };

  return (
    <div>
      <header className="flex justify-between items-center bg-blue-800 text-white">
        <h1 className="text-3xl font-bold text-center my-5">Our Products</h1>
        <h1 className="text-xl font-bold  ">Cart : {cart.length}</h1>
        <input
          type="search"
          className="border  px-3 py-2.5 w-[50%] rounded-md text-[20px] my-5"
          onChange={handleInput}
          name=""
          id=""
        />
      </header>
      <div className="flex flex-wrap gap-5 justify-start mx-2.5">
        {Products.filter((product) =>
          product.name.toLowerCase().includes(querry.toLowerCase()),
        ).map((product) => (
          <div className="flex">
            <ProductsCart2 product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-5 justify-start mx-2.5 my-5">
        {cart.map((item) => (
          <ProductsCart2 product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products2;
