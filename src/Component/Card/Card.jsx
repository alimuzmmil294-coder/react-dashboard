import React from "react";

const Card = () => {
  return (
    <div>
      <main className="flex gap-10 mt-[30px] w-[80%] ">
        <section className="w-[250px] border bg-[#123454] h-35  p-2.5 text-white ">
          <div className="flex justify-between">Earnings</div>
          <h1 className="text-[30px]">💲 628</h1>
        </section>
        <section className="w-[250px] border bg-[#CCCFD5] h-35  p-2.5">
          <div className="flex justify-between text-blue-50 text-[20px]">
            Share
          </div>
          <h1 className="text-[30px]">2423</h1>
        </section>
        <section className="w-[250px] border bg-[#CCCFD5] h-35  p-2.5">
          <div className="flex justify-between text-blue-50 text-[20px]">
            Likes
          </div>
          <h1 className="text-[30px]">1259</h1>
        </section>
        <section className="w-[250px] border bg-[#CCCFD5] h-35  p-2.5 ">
          <div className="flex justify-between text-blue-50 text-[20px]">
            Ratings
          </div>
          <h1 className="text-[30px]">4.6</h1>
        </section>
      </main>
    </div>
  );
};

export default Card;
