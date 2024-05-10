import React from "react";

export default function Activity() {
  return (
    <div className="h-screen">
      <div className=" flex gap-24 h-[42px]  w-full bg-gradient-to-r from-orange-400 to-orange-500">
        <div className="w-full flex justify-center">
          <img
            src="https://ossimg.9987cw.cc/TC/other/h5setting_20231215032757ht45.png"
            alt="TC"
            className="h-full "
          />
        </div>
      </div>
      <div className=" bg-gradient-to-r from-orange-400 to-orange-500 px-[12px] ">
        <h1 className="flex items-end text-lg text-white pt-2.5">Activity</h1>
        <div className="text-xs  text-wrap mt-4 ">
          <div className="text-left text-white">
            Please remember to follow the event page
          </div>
          <div className="text-left text-white">
            We will launch user feedback activities from time to time
          </div>
          <div className="h-7"></div>
        </div>
      </div>
      <div className="h-[204px] p-[13px]">
        <div className=""> 
        
        </div>
      </div>
    </div>
  );
}
