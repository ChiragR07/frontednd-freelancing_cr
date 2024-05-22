import React from "react";
import Cards01 from "./Cards01/Cards01";
import Cards03 from "./Cards03/Cards03";
import Cards04 from "./Cards04/Cards04";
import Cards05 from "./Cards05/Cards05";

export default function Cards() {
  return (
    <div className="h-full  w-full grid grid-cols-1 gap-5">
      <Cards01 />
      <Cards03 />
      <Cards04 />
      <Cards05 />
    </div>
  );
}
