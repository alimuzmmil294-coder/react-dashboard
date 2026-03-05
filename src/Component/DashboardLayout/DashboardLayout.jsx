import React from "react";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex ">
      <SideBar />
      <div className="h-[10vh] w-full">
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
