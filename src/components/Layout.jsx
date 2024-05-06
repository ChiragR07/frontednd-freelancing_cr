import React from "react";
import Login from "./Login/Login";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="flex justify-center bg-[#9195A3]">
      <div className=" h-screen w-[400px] bg-white">
        <Login />
      </div>
    </div>
  );
}
