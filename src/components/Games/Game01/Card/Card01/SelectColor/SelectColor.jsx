import React, { useState } from "react";
import axios from "axios";

export default function SelectColor() {
  const [selectedColor, setSelectedColor] = useState("");
  const [contractAmount, setContractAmount] = useState(10);
  const [tokenCount, setTokenCount] = useState(1); // minimum number of tokens is 1

  const handleButtonClick = (color) => {
    setSelectedColor(color);
    setContractAmount(10); // Reset contract amount to default
    setTokenCount(1); // Reset token count to minimum 1
  };

  const closePopup = () => {
    setSelectedColor("");
  };

  const increaseTokenCount = () => {
    setTokenCount(tokenCount + 1);
  };

  const decreaseTokenCount = () => {
    if (tokenCount > 1) {
      // Ensure the minimum token count is 1
      setTokenCount(tokenCount - 1);
    }
  };

  const handleConfirm = () => {
    const data = {
      selectedColor,
      contractAmount,
      tokenCount,
      totalContractMoney: contractAmount * tokenCount,
    };

    axios
      .post("/api/confirm", data)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        closePopup();
      })
      .catch((error) => {
        console.error("There was an error sending the data:", error);
      });
  };

  const totalContractMoney = contractAmount * tokenCount;

  const colors = [
    { name: "Green", bgClass: "bg-green-600" },
    { name: "Violet", bgClass: "bg-violet-600" },
    { name: "Red", bgClass: "bg-red-600" },
  ];

  const contractValues = [10, 100, 1000, 10000];

  return (
    <div>
      <div className="text-[rgb(102,102,102)] mx-[15px] p-1 flex justify-start text-center mt-[8px] text-xs">
        Select a color{" "}
      </div>
      <div className="w-full mt-[8px]">
        <div className="h-full w-full flex flex-row justify-evenly items-center">
          {colors.map((color) => (
            <div
              key={color.name}
              className="h-full w-1/3 flex justify-center items-center"
            >
              <div
                className={`w-[80px] h-[35px] rounded-full shadow-md ${color.bgClass} flex justify-center`}
              >
                <button
                  className="text-white text-xs font-bold"
                  onClick={() => handleButtonClick(color.name)}
                >
                  Join {color.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedColor && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[300px] bg-white rounded-md shadow-lg">
            <div
              className={`h-[50px] w-full p-3 ${
                colors.find((color) => color.name === selectedColor).bgClass
              }`}
            >
              <div className="h-full w-full text-white font-sans text-wrap text-lg flex items-center">
                Join {selectedColor}
              </div>
            </div>
            <div className="p-3 h-full w-full">
              <div className="w-full h-[20px] text-wrap text-sm font-sans p-1">
                Contract Money
              </div>
              <div className="w-full h-[40px] mt-[8px]">
                <ul className="w-fit h-full flex flex-row border-t-[1px] border-l-[1px] border-r-[1px] divide-x-[1px] hover:cursor-pointer rounded-md shadow-md text-[rgb(102,102,102)] font-light">
                  {contractValues.map((value) => (
                    <li
                      key={value}
                      className={`w-[${
                        30 + value / 10
                      }px] h-full flex items-center justify-center border-b-2 border-gray-300 p-2 ${
                        contractAmount === value ? "bg-gray-300" : ""
                      }`}
                      onClick={() => setContractAmount(value)}
                    >
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full h-auto mt-[8px] text-sm font-sans text-wrap">
                Number
              </div>
              <div className="mt-[8px] w-full h-fit flex justify-evenly p-2">
                <button
                  className="h-[35px] w-[40px] flex justify-center items-center rounded-md border-2 shadow-md"
                  onClick={decreaseTokenCount}
                >
                  -
                </button>
                <div className="h-[35px] w-[40px] flex justify-center items-center rounded-md border-2 shadow-md">
                  {tokenCount}
                </div>
                <button
                  className="h-[35px] w-[40px] flex justify-center items-center rounded-md border-2 shadow-md"
                  onClick={increaseTokenCount}
                >
                  +
                </button>
              </div>
              <div className="w-full mt-[8px] text-sm font-light">
                Total Contract Money is{" "}
                <span className="font-bold text-[rgb(102,102,102)]">
                  {totalContractMoney}
                </span>
              </div>
              <div className="flex flex-row gap-2 mt-[12px]">
                <input className="w-[15px]" type="checkbox"></input>
                <label className="w-full text-wrap text-sm text-[rgb(102,102,102)]">
                  I agree PRESALE RULE
                </label>
              </div>
              <div className="flex flex-row gap-5 mt-[17px] justify-end text-[rgb(102,102,102)] p-1">
                <button className="text-lg font-light" onClick={closePopup}>
                  Cancel
                </button>
                <button className="text-lg font-light" onClick={handleConfirm}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
