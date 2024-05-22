import React from "react";
import { FaTrophy } from "react-icons/fa";

export default function CountDownAndPeriod() {
  const CountDown = "02:35";
  return (
    <div>
      <div className=" w-full flex flex-row divide-x-2 divide-slate-200  outline-0 p-[3px] mt-[5px]">
        <div className="w-1/2 flex flex-col gap-1 ">
          <div className="flex flex-row gap-2 justify-center">
            <FaTrophy className="h-[25px] w-[25px] fill-[rgb(102,102,102)]" />
            <div className="text-[rgb(102,102,102)] text-sm">Period</div>
          </div>
          <div className="text-md tracking-wide flex justify-center">
            20200709304
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex flex-col gap-1">
            <div className="text-md flex justify-center text-[rgb(102,102,102)] text-sm ">
              Count Down
            </div>
            <div className="tracking-wide text-2xl flex justify-center items-center font-mono text-black text-bold">
              {CountDown}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
