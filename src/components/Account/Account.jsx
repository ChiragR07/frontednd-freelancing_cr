import React from "react";

import UserDetails from "./UserDetails/UserDetails";
import AllCards from "./AllCards/AllCards";
export default function Account() {
  return (
    <div className="h-[1000px]">
      <div className="relative h-full w-full bg-[rgb(247,248,255)] ">
        <UserDetails />
        <AllCards />
      </div>
    </div>
  );
}
