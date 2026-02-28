import React from "react";

const NavBar = () => {
  return (
    <div className="w-full h-16 bg-gray-800   justify-between">
      <div className="  border-gray-700 flex justify-between">
        <div>
          <ul className="flex">
            <li className="p-4 text-white hover:bg-gray-700 cursor-pointer">
              Home
            </li>
            <li className="p-4 text-white hover:bg-gray-700 cursor-pointer">
              Dashboard
            </li>
            <li className="p-4 text-white hover:bg-gray-700 cursor-pointer">
              Settings
            </li>
          </ul>
        </div>

        <div className="flex items-center w-[10%]">
          <button className="p-2 bg-red-600 text-white font-[18px] w-[80%] m-auto rounded hover:bg-red-700">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
