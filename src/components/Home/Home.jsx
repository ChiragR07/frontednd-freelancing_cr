import React from "react";
import notificationSvg from "../../../public/chat.png";
import { SlVolume2 } from "react-icons/sl";
import { AiOutlineFire } from "react-icons/ai";
import WinningInformation from "./WinningInformation";
import PodiumFinisher from "./PodiumFinishers";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <div className="relative font-serif  bg-[rgb(255,251,232)]">
        <div className="h-[49px] sticky top-0 w-full  bg-gradient-to-r from-orange-400 to-orange-500 flex">
          <div className="flex w-full">
            <div className="w-2/3 flex justify-center items-center ">
              <img
                src="https://ossimg.9987cw.cc/TC/other/h5setting_20231215032755xgv9.png"
                alt="TC"
                className="h-[39px] mr-8"
              />
            </div>
            <div className="w-full flex justify-end p-2  ">
              <img
                src={notificationSvg}
                alt="messageIcon"
                className="h-[33px] mr-2"
              />
            </div>
          </div>
        </div>
        <div className="">
          <img
            src="https://ossimg.9987cw.cc/TC/banner/Banner_20240322123232hh3m.jpg"
            alt="homeImage"
            className="h-[180px] bg-center"
          />
        </div>
        <div className="h-[39px] flex mx-2">
          <div className="w-1/5 flex items-center">
            <SlVolume2 className=" fill-[rgb(235,138,31)]" />
          </div>
          <div className=" text-xs leading-4 text-wrap break-words overflow-hidden text-ellipsis m-1 text-[rgb(237,106,2)]">
            1.All recharge methods only available in Recharge menu on OFFICIAL
            TC website and application; 2.Submit 12 UTR number / UPI ref no for
            INSTANT recharge; 3. TC recharge account change everytime, DONOT
            SAVE to AVOID LOSS!!!
          </div>
          <div className="w-3/5 h-full flex justify-center items-center">
            <button className=" w-full flex rounded-full bg-[rgb(235,138,31)] px-[8px] py-1">
              <AiOutlineFire className="fill-white -700" />
              <div className="text-sm text-white ml-1">Detail</div>
            </button>
          </div>
        </div>
        <div className="mt-[17px] mb-[10px] h-[150px] w-full">
          <div className=" flex">
            <div className="w-1/2 grid justify-center items-center">
              <NavLink to="gameFirst">
                <div className="flex justify-center items-center">
                  <div className="grid rounded-full bg-blue-700">
                    <img
                      src="https://ossimg.9987cw.cc/TC/gamecategory/gamecategory_20231215033613klhe.png"
                      alt="firstGame"
                      className="rounded-full w-fit"
                    />
                  </div>
                </div>
                <div className="w-fit ml-[30px] text-md">Coloring</div>
              </NavLink>
            </div>
            <div className="w-1/2 grid justify-center items-center">
              <div className="flex justify-center items-center">
                <div className="grid rounded-full bg-blue-700">
                  <img
                    src="https://ossimg.9987cw.cc/TC/gamelogo/TB_Chess/800.png"
                    alt="firstGame"
                    className="rounded-full w-fit"
                  />
                </div>
              </div>
              <div className="w-fit ml-[35px] ">Aviator</div>
            </div>
          </div>
        </div>
        {/* <div className="w-full px-[13px]">
          <div>
            <div className="mb-4">
              <img
                className="h-[25px]"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMPSURBVHgB7ZjNTxNREMBntksw0WBVajQx4XE3oVy9AP4Dtol38eLNUA6UeFHqxVAP1L8AvJuIfwE14U4x3lmMiR+QQIgQDd0d521B9uNtd/tBU8P7Je1+ZGZ25r1582YXQKPRaDQajebigq0I77wWkwDOBBBmWTFLAMI1grDP5zU++2CasHpt1rKgBfaWRFoeWW+/iYyw67RRd7B0a96qQCsBNBynF0AwmUQeDVpJpYxS0kB2yyNb8pgawCmVzo9FkUsZtEwEaXbYGi5uj/57VjPDcmRsmxUdyEE7IC1k5r6U4p5RP6a9E2csB7A0MABVGUjUwGWK2xgbwInhNT7NQicgVE0T81Hp8e2VEGaKtqAFvAEYUUK27SxBp85LePTsY9qQOQxdQM6S91oZwM+ymCYHp6FLyMXOs/n+dLF6uf2Mc56LQGJbmCAAQ+ZdgMG7D+HG009w/cm6e94G2ZNZDYGEbyEhFJANBSAXzml59HL5XgHw0hAYV+/AlfvPoR3krH5fFIXg/WMbKklnwbah6r0OBYAUUXEGh84c+XMA7ZJCWuIU9a0tmUb1Oo5TIL9DvgGuuCnnIRQAIY2plI/WXoJz8NV1/nC9Ap2AQMvB9SAdMwycjdKRwfFMhUqyGTJOIEhh4Pfnd+6vS2RlieYg8t6Ni589RpEqmA+Ovns3eGOnPBJt43xY5WnfBIMmlDu9bFMIZ28WrRWVsqlSYENp6B05HvocqIdNOj/FzteilH1rQNb/HjvfFG4rPjZzXuILAJEeQR9hIMRWC38KJew2e4EsmcNzVjVOzghoJd7Sz5OokqnCH4CDb6AvUJdMFb4AMvPWAm9kifuSruO+2eHjuIXrV1GwWxYVApqBHtJoIzDfivMSZTc6XLQKciTiepNuwQt29fAIx1t1vqEbA3enBSKaQUWH2jGIVf4vZRJUm0gTSQXlJsfCD3jXnOxos3MrHcqR7sjxM3Nt0HjZ5s8q3HzxJxWBRILflNK+wNhRbs72CdFiOYvlNvlu7dch1EYXrL4o1xqNRqPRaDT/O38BaH9AZyOw2AQAAAAASUVORK5CYII="
              />
            </div>
          </div>
          <div className="h-full w-full grid grid-cols-3 gap-4 ">
            <div className="p-1 bg-gradient-to-br from-yellow-600 to-yellow-300 rounded-lg">
              <img
                src="https://ossimg.9987cw.cc/TC/gamelogo/CQ9/AB3.png"
                className="bg-cover rounded-xl p-1"
                alt="game-1"
              />
            </div>
            <div className="p-1 bg-gradient-to-br from-yellow-600 to-yellow-300 rounded-lg">
              <img
                src="https://ossimg.9987cw.cc/TC/gamelogo/CQ9/AB3.png"
                className="bg-cover rounded-xl p-1"
                alt="game-1"
              />
            </div>
            <div className="p-1 bg-gradient-to-br from-yellow-600 to-yellow-300 rounded-lg">
              <img
                src="https://ossimg.9987cw.cc/TC/gamelogo/CQ9/AB3.png"
                className="bg-cover rounded-xl p-1"
                alt="game-1"
              />
            </div>
            <div className="p-1 bg-gradient-to-br from-yellow-600 to-yellow-300 rounded-lg">
              <img
                src="https://ossimg.9987cw.cc/TC/gamelogo/CQ9/AB3.png"
                className="bg-cover rounded-xl p-1"
                alt="game-1"
              />
            </div>
            <div className="p-1 bg-gradient-to-br from-yellow-600 to-yellow-300 rounded-lg">
              <img
                src="https://ossimg.9987cw.cc/TC/gamelogo/CQ9/AB3.png"
                className="bg-cover rounded-xl p-1"
                alt="game-1"
              />
            </div>
            <div className="p-1 bg-gradient-to-br from-yellow-600 to-yellow-300 rounded-lg">
              <img
                src="https://ossimg.9987cw.cc/TC/gamelogo/CQ9/AB3.png"
                className="bg-cover rounded-xl p-1"
                alt="game-1"
              />
            </div>
            <div className="p-1 bg-gradient-to-br from-yellow-600 to-yellow-300 rounded-lg">
              <img
                src="https://ossimg.9987cw.cc/TC/gamelogo/CQ9/AB3.png"
                className="bg-cover rounded-xl p-1"
                alt="game-1"
              />
            </div>
            <div className="p-1 bg-gradient-to-br from-yellow-600 to-yellow-300 rounded-lg">
              <img
                src="https://ossimg.9987cw.cc/TC/gamelogo/CQ9/AB3.png"
                className="bg-cover rounded-xl p-1"
                alt="game-1"
              />
            </div>
            <div className="p-1 bg-gradient-to-br from-yellow-600 to-yellow-300 rounded-lg">
              <img
                src="https://ossimg.9987cw.cc/TC/gamelogo/CQ9/AB3.png"
                className="bg-cover rounded-xl p-1"
                alt="game-1"
              />
            </div>
            <div className="p-1 bg-gradient-to-br from-yellow-600 to-yellow-300 rounded-lg">
              <img
                src="https://ossimg.9987cw.cc/TC/gamelogo/CQ9/AB3.png"
                className="bg-cover rounded-xl p-1"
                alt="game-1"
              />
            </div>
            <div className="p-1 bg-gradient-to-br from-yellow-600 to-yellow-300 rounded-lg">
              <img
                src="https://ossimg.9987cw.cc/TC/gamelogo/CQ9/AB3.png"
                className="bg-cover rounded-xl p-1"
                alt="game-1"
              />
            </div>
            <div className="p-1 bg-gradient-to-br from-yellow-600 to-yellow-300 rounded-lg">
              <img
                src="https://ossimg.9987cw.cc/TC/gamelogo/CQ9/AB3.png"
                className="bg-cover rounded-xl p-1"
                alt="game-1"
              />
            </div>
            <div className="p-1 bg-gradient-to-br from-yellow-600 to-yellow-300 rounded-lg">
              <img
                src="https://ossimg.9987cw.cc/TC/gamelogo/CQ9/AB3.png"
                className="bg-cover rounded-xl p-1"
                alt="game-1"
              />
            </div>
          </div>
        </div> */}
        <div className="px-[13px] h-[384px] mt-3">
          <div className="mb-[13px] w-full border-l-2 border-[rgb(235,138,31)]">
            <h1 className="text-xl bold  pl-[10px]">Winning Information</h1>
          </div>
          <div className="w-full">
            <WinningInformation />
          </div>
          <div className="">
            <PodiumFinisher />
          </div>
        </div>
      </div>
    </div>
  );
}
