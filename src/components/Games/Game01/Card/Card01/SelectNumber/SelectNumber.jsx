import React, { useState } from "react";
import axios from "axios";

export default function SelectNumber() {
  const [pop, setPop] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");
  const [contractAmount, setContractAmount] = useState(10);
  const [tokenCount, setTokenCount] = useState(1);

  const handleButtonClick = (number) => {
    console.log("Button clicked", number);
    setPop(true);
    setSelectedNumber(number);
    setContractAmount(10); // Reset contract amount to default
    setTokenCount(1); // Reset token count to default
  };

  const closePopup = () => {
    setPop(false);
    setSelectedNumber("");
  };

  const handleConfirm = () => {
    const data = {
      selectedNumber,
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

  const contractValues = [
    { number: 0, color: "purple and green" },
    { number: 1, color: "red" },
    { number: 2, color: "green" },
    { number: 3, color: "red" },
    { number: 4, color: "green" },
    { number: 5, color: "red and purple" },
    { number: 6, color: "green" },
    { number: 7, color: "red" },
    { number: 8, color: "green" },
    { number: 9, color: "red" },
  ];

  const getColorClass = (color) => {
    switch (color) {
      case "red":
        return "bg-red-500";
      case "green":
        return "bg-green-500";
      case "purple and green":
        return "bg-gradient-to-r from-purple-500 to-green-500"; // Gradient from purple to green
      case "red and purple":
        return "bg-gradient-to-r from-purple-500 to-red-500"; // Gradient from red to purple
      default:
        return "bg-blue-500"; // Default color class
    }
  };

  const increaseTokenCount = () => {
    setTokenCount(tokenCount + 1);
  };

  const decreaseTokenCount = () => {
    if (tokenCount > 1) {
      setTokenCount(tokenCount - 1);
    }
  };

  const totalContractMoney = contractAmount * tokenCount;

  return (
    <div>
      <div className="text-[rgb(102,102,102)] mx-[10px] p-1 flex justify-start text-center mt-[8px] text-xs ">
        Select a number
      </div>
      <div className="w-full px-[12px] ">
        <div className="flex flex-col gap-3 mt-[8px]">
          <div className="grid grid-cols-5 gap-3">
            {contractValues.map((val, index) => (
              <button
                key={index}
                className={` rounded-md ${getColorClass(
                  val.color
                )} text-white text-sm p-1 shadow-lg border`}
                onClick={() => handleButtonClick(val.number)}
              >
                {val.number}
              </button>
            ))}
          </div>
        </div>
      </div>
      {pop && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[300px] bg-white rounded-md shadow-lg">
            <div className={`h-[50px] w-full bg-blue-500 p-3`}>
              <div className="h-full w-full text-white font-sans text-wrap text-lg flex items-center">
                Number {selectedNumber}
              </div>
            </div>
            <div className="p-3 h-full w-full">
              <div className="w-full h-[20px] text-wrap text-sm font-sans p-1">
                Contract Money
              </div>
              <div className="w-full h-[40px] mt-[8px]">
                <ul className="w-fit h-full flex flex-row border-t-[1px] border-l-[1px] border-r-[1px] divide-x-[1px] hover:cursor-pointer rounded-md shadow-md text-[rgb(102,102,102)] font-light">
                  {[10, 100, 1000, 10000].map((value) => (
                    <li
                      key={value}
                      className={`w-[${
                        30 + value / 10
                      }px] h-full flex items-center p-2 border-b-2 border-gray-300 ${
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
                <input className="w-[15px]" type="checkbox" />
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
