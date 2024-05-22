import React from "react";

export default function WalletDetails() {
  return (
    <div className="">
      <div className="w-full  bg-gradient-to-r from-orange-400 to-orange-500">
        <div className="w-full flex flex-col items-center pb-4">
          <div className="w-fit">
            <img
              src="https://www.9987up.club/assets/png/wallets-55b46543.png"
              alt="walletProfile"
              className="h-[42px] w-[42px]"
            />{" "}
          </div>
          <div className="text-[25px] text-white w-fit align-baseline flex justify-center mt-1">
            ₹5.18
          </div>
          <div className="text-[13px] w-fit text-white align-baseline ml-2">
            Total balance
          </div>
          <div className="w-[280px] h-[49px] flex justify-evenly mt-[10px]">
            <div className="w-1/2 flex flex-col items-center ">
              <div className="text-white text-[21px]">1500</div>
              <div className="text-white align-baseline text-xs">
                Total amount
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <div className="text-white text-[21px]">2100</div>
              <div className="text-white align-baseline text-xs">
                Total deposite amount
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
