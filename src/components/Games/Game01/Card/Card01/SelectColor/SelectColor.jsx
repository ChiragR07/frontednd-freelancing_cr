import React, { useState } from "react";

export default function SelectColor() {
  const [selectedColor, setSelectedColor] = useState("");

  const handleButtonClick = (color) => {
    setSelectedColor(color);
  };

  const closePopup = () => {
    setSelectedColor("");
  };

  const colors = [
    { name: "Green", bgClass: "bg-green-600" },
    { name: "Violet", bgClass: "bg-violet-600" },
    { name: "Red", bgClass: "bg-red-600" },
  ];

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
          <div className=" h-[400px] w-[300px] bg-white rounded shadow-lg">
            <div className={`h-[50px] w-full bg-green-600 p-3`}>
              <div className="h-full w-full text-white font-sans text-wrap text-lg flex items-center">
                Join {selectedColor}
              </div>
            </div>
            <div className="p-3 h-full w-full">
              <div className="w-full h-[20px] text-wrap text-xs">
                Contract Money
              </div>
              <div className="w-full h-[40px] mt-[8px]">
                <ul className="w-fit h-full flex flex-row border-t-[1px] border-l-[1px] border-r-[1px] divide-x-[1px] hover:cursor-pointer rounded-md shadow-md text-[rgb(102,102,102)]">
                  <li className="w-[30px] h-full flex items-center justify-center border-b-2 border-gray-300 ">
                    10
                  </li>
                  <li className="w-[40px] h-full flex items-center justify-center border-b-2 border-gray-300">
                    100
                  </li>
                  <li className="w-[50px] h-full flex items-center justify-center border-b-2 border-gray-300">
                    1000
                  </li>
                  <li className="w-[60px] h-full flex items-center justify-center border-b-2 border-gray-300">
                    10000
                  </li>
                </ul>
              </div>
            </div>

            {/* <p className="text-lg font-bold">You selected {selectedColor}</p>
            <button
              className="mt-4 px-4 py-2 bg-gray-300 rounded"
              onClick={closePopup}
            >
              Close
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}
