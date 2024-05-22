import React from "react";

export default function GameBalance() {
  return (
    <div>
      {" "}
      <div className="p-[8px] h-[110px] w-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-b-2xl">
        <div className="h-[80px] grid grid-cols-1 gap-2 ml-[8px]">
          <div className="text-white text-[20px] text-wrap">
            Available balance: ₹ 15.78
          </div>
          <div className=" flex justify-center items-center w-full ">
            <button className=" w-[300px] h-[30px] border text-white rounded-full shadow-lg text-md hover:bg-[#C0451C] mr-[14px] flex justify-center mb-[5px]">
              Recharge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
