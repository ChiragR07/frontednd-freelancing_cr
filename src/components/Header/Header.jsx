import React from "react";
import backIcon from "../../../public/backIcon_1.png";
import { NavLink } from "react-router-dom";
export default function Header({ HeaderTitle }) {
  return (
    <div className="">
      <div className="w-[400px] flex gap-24 h-[42px]  bg-gradient-to-r from-orange-400 to-orange-500">
        <NavLink to={-1}>
          <div className="flex justify-center items-center p-2">
            <img src={backIcon} alt="backIcon" className="h-[26px] w-[26px]" />
          </div>
        </NavLink>
        <div className="w-1/2  h-full font-sans flex flex-row items-center">
          <div className=" text-white text-[20px] ">{HeaderTitle}</div>
        </div>
      </div>
     
    </div>
  );
}
