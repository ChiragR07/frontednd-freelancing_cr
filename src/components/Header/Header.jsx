import React from "react";
import backIcon from "../../../public/backIcon_1.png";
import { NavLink } from "react-router-dom";
export default function Header({ HeaderTitle }) {
  return (
    <div className="">
      <div className=" flex gap-24 h-[42px]  w-full bg-gradient-to-r from-orange-400 to-orange-500">
        <NavLink to={-1}>
          <div className="flex justify-center items-center p-2">
            <img src={backIcon} alt="backIcon" className="h-[26px] w-[26px]" />
          </div>
        </NavLink>
        <div className="font-sans p-2">
          <div className=" text-white text-[20px] flex justify-center">
            {HeaderTitle}
          </div>
        </div>
      </div>
    </div>
  );
}
