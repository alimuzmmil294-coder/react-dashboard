import React from "react";
import HamburgerIcon from "../../assets/Images/hamburger.png";
import Card from "../Card/Card";

const GNavBar = () => {
  return (
    <div>
      <nav className=" flex flex-col justify-between items-center bg-[#CCCFD5] text-[24px] p-2.5">
        <div className="flex justify-between items-center w-full p-5">
          <h1 className="">DashBoard User</h1>
          <img src={HamburgerIcon} alt="" className="h-10 w-10 " />
        </div>
        <Card />
      </nav>
    </div>
  );
};

export default GNavBar;
