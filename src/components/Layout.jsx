import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Login from "./Authentication/Login/Login";
import Home from "./Home/Home";
import Activity from "./Activity/Activity";
import Wallet from "./Wallet/Wallet";
import Account from "./Account/Account";
import Navigation from "./Navigation/Navigation";

export default function Layout() {
  return (
    <div className="flex justify-center bg-[#9195A3] overflow-auto">
      <div className="relative w-[400px] bg-white ">
        <Outlet />
        <Navigation />
        {/* <Login/> */}
      </div>
    </div>
  );
}
