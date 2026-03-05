import React from "react";
import GNavBar from "../GoogelNavBar/GNavBar";
import GSideBar from "../GoogleSideBar/GSideBar";

const GoogleLayout = ({ children }) => {
  return (
    <div className="flex overflow-hidden">
      <GSideBar />
      <div className="flex w-full flex-col">
        <GNavBar />
        {children}
      </div>
    </div>
  );
};

export default GoogleLayout;
