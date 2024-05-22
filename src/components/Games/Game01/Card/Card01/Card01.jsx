import React from "react";

import SelectColor from "./SelectColor/SelectColor";
import SelectNumber from "./SelectNumber/SelectNumber";
import CountDownAndPeriod from "./CountDown/CountDown";
export default function Card01() {
 
  return (
    <div>
      {" "}
      <div className="mx-[10px] ">
        <div className="h-[300px] w-full border shadow-md bg-white rounded-xl mt-[10px] p-[3px]">
          <CountDownAndPeriod />
          <div className="border-[1px] mx-[15px] mt-[3px]" />
          <SelectColor />
          <div className="border-[1px] mx-[15px] mt-[12px]" />
          <SelectNumber />
        </div>
      </div>
    </div>
  );
}
