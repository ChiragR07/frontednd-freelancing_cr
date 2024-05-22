import React from "react";

export default function SelectNumber() {
  return (
    <div>
      {" "}
      <div className="text-[rgb(102,102,102)] mx-[10px] p-1 flex justify-start text-center mt-[8px] text-xs">
        Select a number{" "}
      </div>
      <div className="w-full px-[12px]">
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-3">
            <button className="w-1/5 rounded-md bg-blue-500 text-white text-sm p-1 shadow-lg border">
              1
            </button>
            <button className="w-1/5 rounded-md bg-blue-500 text-white text-sm p-1 shadow-lg border">
              2
            </button>
            <button className="w-1/5 rounded-md bg-blue-500 text-white text-sm p-1 shadow-lg border">
              3
            </button>
            <button className="w-1/5 rounded-md bg-blue-500 text-white text-sm p-1 shadow-lg border">
              4
            </button>
            <button className="w-1/5 rounded-md bg-blue-500 text-white text-sm p-1 shadow-lg border">
              5
            </button>
          </div>
          <div className="flex flex-row gap-3">
            <button className="w-1/5 rounded-md bg-blue-500 text-white text-sm p-1 shadow-lg border">
              6
            </button>
            <button className="w-1/5 rounded-md bg-blue-500 text-white text-sm p-1 shadow-lg border">
              7
            </button>
            <button className="w-1/5 rounded-md bg-blue-500 text-white text-sm p-1 shadow-lg border">
              8
            </button>
            <button className="w-1/5 rounded-md bg-blue-500 text-white text-sm p-1 shadow-lg border">
              9
            </button>
            <button className="w-1/5 rounded-md bg-blue-500 text-white text-sm p-1 shadow-lg border">
              10
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
