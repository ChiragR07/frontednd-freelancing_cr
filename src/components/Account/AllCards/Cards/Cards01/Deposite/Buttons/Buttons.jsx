import React from "react";

export default function Buttons({ amount, setRechargeAmount }) {
  const handleOnClick = () => {
    setRechargeAmount(amount);
  };

  return (
    <div className="flex justify-center items-center p-2 border border-gray-300 rounded-md z-10 text-[rgb(102,102,102)] text-bold shadow-md">
      <button onClick={handleOnClick} className="text-center">
        ₹ {amount}
      </button>
    </div>
  );
}
