import React from "react";
import backIcon from "../../../../public/backIcon_1.png";
import MainSignUp from "./MainSignUp";
export default function SignUp() {
  return (
    <div className="h-auto flex justify-center bg-[#9195A3]">
      <div className=" w-[400px] bg-[#f2f3f5]">
        <div className="font-sans">
          <div className=" flex gap-24 h-[42px]  w-full bg-gradient-to-r from-orange-400 to-orange-500">
            <div className="flex justify-center items-center p-1 ml-[12px]">
              <img
                src={backIcon}
                alt="backIcon"
                className=" h-full brightness-90 p-[2px]  "
              />
            </div>
            <div className="flex">
              <img
                src="https://ossimg.9987cw.cc/TC/other/h5setting_20231215032757ht45.png"
                alt="TC"
                className="h-full"
              />
            </div>
          </div>
          <div className=" bg-gradient-to-r from-orange-400 to-orange-500 px-[12px] ">
            <h1 className="flex items-end text-lg text-white pt-2.5">
              Register
            </h1>
            <div className="text-xs  text-wrap mt-4 ">
              <div className="text-left text-white">
                Please register by phone number or email
              </div>

              <div className="h-7"></div>
            </div>
          </div>
          <div>
            <MainSignUp />
          </div>
        </div>
      </div>
    </div>
  );
}
