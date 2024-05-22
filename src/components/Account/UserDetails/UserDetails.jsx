import React from "react";
import copy from "copy-text-to-clipboard";
import { NavLink } from "react-router-dom";

export default function UserDetails() {
  const UID = "5277669";
  const handleOnClickFunction = () => {
    copy(`${UID}`);
  };
  return (
    <div>
      <div className="h-[224px] w-full pb-[116px] bg-gradient-to-r from-orange-400 to-orange-500  flex items-baseline rounded-b-3xl">
        <div className="w-full flex flex-row gap-2  px-[18px] mt-[40px]">
          <div className="h-fit flex items-baseline">
            <NavLink to="/avatar">
              <img
                src="https://www.9987up.club/assets/png/1-a6662edb.png"
                alt="selectProfile"
                className="rounded-full h-[74px] w-[74px]"
              />
            </NavLink>
          </div>
          <div className="grid grid-rows gap-1 justify-start items-start">
            <div className="flex ">
              <h3 className="w-fit text-wrap text-white text-[16px]">
                MEMBERNNGVKIYP
              </h3>
              <div className="" onClick={() => handleOnClickFunction()}>
                <img
                  src="https://www.9987up.club/assets/png/0-78e1ab02.png"
                  className="h-[23px] mx-[5px]"
                  alt="League"
                />
              </div>
            </div>
            <div className="flex items-center rounded-xl  bg-[rgb(255,208,88)] w-[122px]">
              <div className="flex flex-row gap-2   py-[3px] w-fit">
                <div className="text-white text-xs w-fit ml-2">UID</div>
                <div className="text-white text-xs w-fit">{UID}</div>

                <button onClick={handleOnClickFunction}>
                  {" "}
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAG1BMVEUAAAD////////////////////////////////rTT7CAAAACHRSTlMAf2/fzyAQv1i/o5gAAABWSURBVBjTY0AHSYJgoApis1p0gEFzApDD1AKR8VAAchgbIaolBIA6xNvBOkAchA4gB6EDyEHooBOn0EMBweloDkCSUUP2ALrX2GBeCADJB0Fk1NCDCQANHCEHp1BAOwAAAABJRU5ErkJggg=="
                    alt="copyUID"
                    className="h-[13px]"
                  />
                </button>
              </div>
            </div>
            <div className="flex">
              <div className="text-white text-xs">Last Login: </div>
              <div className="text-white text-xs">2024-05-11 14:30:56</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
