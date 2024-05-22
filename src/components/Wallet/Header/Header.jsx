import React from "react";

export default function Header() {
  return (
    <div>
      <div className=" flex gap-24 h-[42px]  w-full bg-gradient-to-r from-orange-400 to-orange-500 p-3">
        <div className="w-full flex justify-center items-center text-white text-2xl ">
          Wallet
        </div>
      </div>
    </div>
  );
}
