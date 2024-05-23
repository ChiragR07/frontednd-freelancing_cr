import React from "react";
import Game01Result from "../Game01Result";
export default function Card02({ data, setData }) {
  return (
    <div>
      <div className="mt-[8px] mx-[8px]">
        <div className=" rounded-xl border-2 shadow-xl bg-white px-2 py-2">
          <Game01Result data={data} setdata={setData} />
        </div>
      </div>
    </div>
  );
}
