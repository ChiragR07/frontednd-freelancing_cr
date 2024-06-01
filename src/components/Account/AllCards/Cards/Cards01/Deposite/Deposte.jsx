import React, { useState } from "react";
import Header from "../../../../../Header/Header";
import { IoMdWallet } from "react-icons/io";
import Buttons from "./Buttons/Buttons";
import { useNavigate } from "react-router-dom";

export default function Deposite() {
  const [rechargeAmount, setRechargeAmount] = useState("");
  const navigate = useNavigate();
  const amount = [500, 1000, 2000, 5000, 10000, 49999];

  const handleOnClick = () => {
    navigate("/pay");
  };

  return (
    <div className="h-screen w-full">
      <Header HeaderTitle="Deposite" />
      <div className="relative h-full w-full">
        <div className="h-[130px] w-full bg-gradient-to-r from-orange-400 to-orange-500 p-3 rounded-b-3xl ">
          <div className="flex flex-row items-center justify-center text-white font-sans text-wrap text-xl">
            Balance: ₹ 5.25
          </div>
        </div>
        <div className="absolute h-full w-full -mt-[30px]">
          <div className="h-full mx-[12px]">
            <div className="h-[350px] w-full bg-white rounded-lg border shadow-md">
              <div className="h-full m-[12px]">
                <div className="w-full flex flex-row gap-2 p-3 border border-gray-200 rounded-sm shadow-lg mt-[20px]">
                  <div className="flex justify-center items-center">
                    <IoMdWallet className="h-[25px] w-[25px] fill-[rgb(102,102,102)]" />
                  </div>
                  <input
                    type="number"
                    min={0}
                    className="w-full h-[25px] text-[rgb(102,102,102)] text-sm flex flex-row items-center"
                    placeholder="Enter or Select recharge Amount"
                    value={rechargeAmount}
                    onChange={(e) => setRechargeAmount(e.target.value)}
                  />
                </div>
                <div className="h-[130px] p-4 mt-[20px]">
                  <div className="grid grid-cols-3 gap-3 hover:cursor-auto">
                    {amount.map((bal, index) => (
                      <Buttons
                        amount={bal}
                        setRechargeAmount={setRechargeAmount}
                        key={index}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex justify-center items-center p-2 mt-[30px]">
                  <div className="w-1/2 flex flex-row justify-center rounded-md border shadow-xl border-orange-500 bg-orange-400 text-white p-2">
                    <button onClick={handleOnClick} className="text-md">
                      Recharge
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
