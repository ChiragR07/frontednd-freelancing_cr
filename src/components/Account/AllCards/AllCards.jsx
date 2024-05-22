import React from "react";
import LogOut from "./LogOut/LogOut";
import Cards from "./Cards/Cards";
export default function AllCards() {
  return (
    <div className="absolute  top-36 w-full px-[13px]">
      <Cards />
      <LogOut />
    </div>
  );
}
