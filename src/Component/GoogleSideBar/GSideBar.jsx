import React from "react";
import MyImage from "../../assets/Images/muzammil pasport size.jpg";
import home from "../../assets/Images/home.png";
import File from "../../assets/Images/open-folder.png";
import Email from "../../assets/Images/email.png";
import Bell from "../../assets/Images/bell.png";
import Location from "../../assets/Images/location.png";
import Graph from "../../assets/Images/data-management.png";

const GSideBar = () => {
  return (
    <div>
      <div className=" h-screen flex flex-col items-center gap-5 bg-[#163C5B] text-white p-2.5">
        <img
          src={MyImage}
          alt=""
          style={{
            width: "150px",
            borderRadius: "100px",
            opacity: "0.9",
            position: "relative",
            zIndex: "2",
            marginTop: "10px",
          }}
        />
        <p className="absolute h-[70px] w-[170px] bg-white top-[80px] opacity-[0.4] z-1"></p>
        <p className="imgae"></p>
        <h1 className="text-3xl border border-amber-50 hover:border-amber-500 p-[10px] rounded-lg">
          Muzmamil Ali
        </h1>
        <p className="border border-amber-50 hover:border-amber-500 p-[10px] rounded-lg">
          alimuzmmil294@gmail.com
        </p>
        <div className="container flex flex-col justify-center items-center gap-5 ">
          <ul className="flex flex-col justify-center items-center gap-3.5">
            <li className="flex gap-2.5 justify-center items-center">
              <img
                style={{ width: "40px", height: "40px", display: "flex" }}
                src={home}
                alt="Home"
              />{" "}
              <a href="">Home</a>
            </li>
            <li className="flex gap-2.5 justify-center items-center">
              <img
                style={{ width: "40px", height: "40px", display: "flex" }}
                src={File}
                alt="Home"
              />{" "}
              <a href="">File</a>
            </li>
            <li className="flex gap-2.5 justify-center items-center">
              <img
                style={{ width: "40px", height: "40px", display: "flex" }}
                src={Email}
                alt="Home"
              />{" "}
              <a href="">Messages</a>
            </li>
            <li className="flex gap-2.5 justify-center items-center">
              <img
                style={{ width: "40px", height: "40px", display: "flex" }}
                src={Bell}
                alt="Home"
              />{" "}
              <a href="">Notifications</a>
            </li>
            <li className="flex gap-2.5 justify-center items-center">
              <img
                style={{ width: "40px", height: "40px", display: "flex" }}
                src={Location}
                alt="Home"
              />{" "}
              <a href="">Location</a>
            </li>
            <li className="flex gap-2.5 justify-center items-center">
              <img
                style={{ width: "40px", height: "40px", display: "flex" }}
                src={Graph}
                alt="Home"
              />{" "}
              <a href="">Analytics</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GSideBar;
