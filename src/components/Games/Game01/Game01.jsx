import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import GameBalance from "./GameBalance.jsx/GameBalance";
import Card01 from "./Card/Card01/Card01";
import Card02 from "./Card/Card02/Card02";

export default function Game01() {
  const [data, setData] = useState([
    { period: "20240520319", price: 100, number: 1, result: "bg-green-500" },
  ]);

  // useEffect(() => {
  //   console.log(data);
  //   return () => console.log("New Data");
  // }, [data]);

  return (
    <div className="h-[1050px] w-full bg-[rgb(247,248,255)]">
      <Header HeaderTitle="Games" />
      <div className="relative">
        <GameBalance />
        <div className="absolute h-full w-[400px] -mt-[25px]">
          <Card01 data={data} setData={setData} />
          <div className="flex justify-center text-[rgb(102,102,102)] mt-[8px] text-md font-bold">
            Game Result
          </div>
          <Card02 data={data} setData={setData} />
        </div>
      </div>
    </div>
  );
}
