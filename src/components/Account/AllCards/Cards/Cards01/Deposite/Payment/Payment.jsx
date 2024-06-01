import React from "react";
import Header from "../../../../../../Header/Header";
import { FaQuestion } from "react-icons/fa";

export default function Payment() {
  return (
    <div className="h-screen w-full">
      <Header HeaderTitle="Payment Information" />
      <div className="relative">
        <div className="w-full h-[150px] bg-gradient-to-r from-orange-400 to-orange-500 rounded-b-2xl">
          <div className="p-2 flex flex-row items-center justify-center">
            <div className="text-white">How to pay.</div>
            <div>
              <FaQuestion className="h-[15px] w-[15px] fill-white" />
            </div>
          </div>
          <div className="text-white text-md flex flex-row justify-center text-wrap font-sans">
            Payment Amount
          </div>
          <div className="text-white text-4xl flex flex-row justify-center items-center">
            500
          </div>
        </div>
        <div className="absolute h-[330px] w-full -mt-[30px]">
          <div className="mx-[12px] h-full bg-white rounded-md shadow-lg border">
            <div className="p-3 flex flex-row gap-3 mx-[4px]">
              <div className="w-1/2">
                <div className="text-sm font-bold">Pay to UPI:</div>
                <div className="mt-[4px] text-[rgb(102,102,102)]">
                  9336377301@jio
                </div>
              </div>
              <div className="w-1/2 flex flex-row justify-center items-center ">
                <button className="w-[90px] h-[40px] rounded-md shadow-lg border border-gray-200 bg-orange-500 text-white text-wrap font-sans">
                  Copy
                </button>
              </div>
            </div>
            <div className="border border-gray-300 mx-[12px]" />
            <div className="flex flex-row gap-2 mx-[12px] p-2">
              <div className="text-nowrap text-md">Step 1:</div>
              <div className="text-xs text-wrap font-sans ">
                Open Online Banking or wallet, transfer to the UPI account.
              </div>
            </div>
            <div className="flex flex-row gap-2 p-2 mx-[12px]">
              <div className="text-nowrap flex justify-center items-center">
                Step 2:
              </div>
              <div className="w-full p-1">
                <input
                  type="text"
                  className="border border-gray-200 w-full text-nowrap indent-1 rounded-sm"
                  placeholder="Enter REF No: 4153XXXXXX"
                />
              </div>
            </div>
            <div className="mx-[12px] p-4">
              <div className="text-wrap font-sans text-sm text-red-600">
                You must fill in the correct Ref No.,then click the button below
                to submit,and wait for it to arrive!
              </div>
            </div>
            <div className="mx-[12px] p-2 flex flex-row justify-center items-center">
              <div className="w-fit borde bg-orange-500 rounded-md shadow-lg p-2">
                <button className="text-white text-md font-sans">Confirm RER NO.</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
