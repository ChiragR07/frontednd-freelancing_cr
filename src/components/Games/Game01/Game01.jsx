import React from "react";
import Header from "../../Header/Header";
import GameBalance from "./GameBalance.jsx/GameBalance";
import Card01 from "./Card/Card01/Card01";
import Card02 from "./Card/Card02/Card02";
export default function Game01() {
  const data = [
    { period: "20240520320", price: 100, number: 1, result: "bg-green-500" },
    { period: "20240520320", price: 150, number: 2, result: "bg-violet-500" },
    { period: "20240520320", price: 200, number: 3, result: "bg-red-500" },
    { period: "20240520320", price: 250, number: 4, result: "bg-red-500" },
    { period: "20240520320", price: 300, number: 5, result: "bg-violet-500" },
    { period: "20240520320", price: 350, number: 6, result: "bg-green-500" },
    { period: "20240520320", price: 400, number: 7, result: "bg-red-500" },
    { period: "20240520320", price: 450, number: 8, result: "bg-green-500" },
    { period: "20240520320", price: 500, number: 9, result: "bg-violet-500" },
  ];
  return (
    <div className="h-[1050px] w-full bg-[rgb(247,248,255)]">
      <Header HeaderTitle="Games" />
      <div className="relative">
        <GameBalance />
        <div className="absolute h-full w-[400px] -mt-[25px]">
          <Card01 />
          <div className="flex justify-center text-[rgb(102,102,102)] mt-[8px] text-md font-bold">
            Game Result
          </div>
          <Card02 data={data} />
        </div>
      </div>
    </div>
  );
}
