import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Login from "./Login/Login";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";
import Activity from "./Activity/Activity";
import Wallet from "./Wallet/Wallet";

export default function Layout() {
  return (
    <div className="flex justify-center bg-[#9195A3]">
      <div className="relative h-auto w-[400px] bg-white">
        {/* <Login /> */}
        {/* <Home /> */}
        {/* <Activity /> */}
        <Wallet />
        {/* <Outlet /> */}
        <div className="fixed bottom-0 h-[74px] w-[400px]">
          <img
            src="https://www.9987up.club/assets/png/tabBarBg-301df93c.png"
            alt="bottom_navigation"
            className="h-[74px] w-[400px]"
          />
        </div>
        <div className="fixed flex bottom-0 h-[74px] w-[400px]">
          <div className="w-2/5 flex">
            <div className="w-1/2 flex flex-col items-center justify-center p-4 mt-2">
              <NavLink to="/">
                <img
                  src="https://www.9987up.club/assets/png/home-3e6a9291.png"
                  alt="home"
                  className="h-[30px]"
                />
                <div className="w-fit text-xs">Home</div>
              </NavLink>
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center p-5 mt-2">
              <NavLink to="/activity">
                <img
                  src="https://www.9987up.club/assets/png/activity-bb37b07c.png"
                  alt="activity"
                  className="h-[30px]"
                />
                <div className="w-fit text-xs">Activity</div>
              </NavLink>
            </div>
          </div>
          <div className="w-1/5"></div>
          <div className="w-2/5 flex">
            <div className="w-1/2 flex flex-col items-center justify-center p-5 mt-2">
              <NavLink to="/wallet">
                <img
                  src="https://www.9987up.club/assets/png/wallet-dd37d20a.png"
                  alt="wallet"
                  className="h-[30px]"
                />
                <div className="w-fit text-xs">Wallet</div>
              </NavLink>
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center p-5 mt-2">
              <NavLink to="/account">
                <img
                  src="https://www.9987up.club/assets/png/main-53f64122.png"
                  alt="account"
                  className="h-[30px]"
                />
                <div className="w-fit text-xs">Account</div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 h-[96px] w-[400px]">
          <div className="w-full flex flex-col justify-center">
            <div className="flex justify-center">
              <img
                src="https://www.9987up.club/assets/png/promotionBg-d4b9ecd6.png"
                alt="Promotion"
                className="bg-no-repeat h-[78px] p-1"
              />
            </div>
            <div className=" text-xs flex justify-center">Promotion</div>
          </div>
        </div>
      </div>
    </div>
  );
}
