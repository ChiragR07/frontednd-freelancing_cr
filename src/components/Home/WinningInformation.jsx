import React from "react";

const WinningInformation = () => {
  const winnersData = [
    {
      profileImage: "https://www.9987up.club/assets/png/19-2ac9fd83.png",
      profileName: "Mem***JYL",
      gameImage:
        "https://ossimg.9987cw.cc/TC/vendorlogo/vendorlogo_202312150339081ra6.png",
      AmountReceived: "₹19.60",
    },
    {
      profileImage: "https://www.9987up.club/assets/png/9-6d772f2c.png",
      profileName: "Mem***HAD",
      gameImage:
        "https://ossimg.9987cw.cc/TC/lotterycategory/lotterycategory_20231215033448bjlv.png",
      AmountReceived: "₹19,600.00",
    },
    // Add more objects for additional winners
  ];

  return (
    <div className="w-full flex flex-col gap-3 ">
      {winnersData.map((winner, index) => (
        <div
          key={index}
          className="w-full flex flex-row gap-1 px-[9px] py-[10px]  bg-white border drop-shadow-md rounded-xl itmes-center"
        >
          <div className="w-1/7 flex justify-center items-center pr-[7px] ">
            <img
              className="h-[42px] w-[42px] rounded-full -p-[2]"
              src={winner.profileImage}
              alt="Profile"
            />
          </div>
          <h1 className=" w-fit flex items-center text-sm ">
            {winner.profileName}
          </h1>
          <div className="w-2/7 flex justify-center items-center ">
            <img
              className=" w-[67px] h-[43px]"
              src={winner.gameImage}
              alt="Game"
            />
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <h1 className="text-ellipsis "> Receive {winner.AmountReceived}</h1>
            <span>Winning amount</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WinningInformation;
