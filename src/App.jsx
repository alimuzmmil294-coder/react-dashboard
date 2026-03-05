import React, { useState } from "react";
import SideBar from "./Component/SideBar/SideBar";
import NavBar from "./Component/NavBar/NavBar";
import DashboardLayout from "./Component/DashboardLayout/DashboardLayout";
import GSideBar from "./Component/GoogleSideBar/GSideBar";
import GNavBar from "./Component/GoogelNavBar/GNavBar";
import GoogleLayout from "./Component/GoogleLayout/GoogleLayout";
import Hero from "./Component/HeroSection/Hero";
import Products from "./Component/Product/Products";
import PracticeProduct from "./Component/PracticeProduct/PracticeProduct";
import Products2 from "./Component/Products2/Products2";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      {/* <DashboardLayout>wahid</DashboardLayout> */}

      {/* <GSideBar /> */}
      {/* <GNavBar /> */}
      {/* <GoogleLayout>
        <h1 className="text-3xl text-black border-2 border-black hover:border-amber-500 transition-all duration-300 p-5">
          Hello World
        </h1>
      </GoogleLayout> */}

      {/* <NavBar setSearch={setSearch} /> */}
      {/* <Hero search={search} /> */}

      {/* <PracticeProduct /> */}

      <Products2/>
    </div>
  );
};

export default App;
