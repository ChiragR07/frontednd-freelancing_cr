import React from "react";

// Define an array of objects with candidate information
const candidates = [
  {
    name: "Mem***HLM",
    amount: "₹1,124,061,958.04",
    imgSrc: "https://www.9987up.club/assets/png/3-abfcc056.png",
    crownSrc: "https://www.9987up.club/assets/png/crown1-3912fd85.png",
    placeSrc: "https://www.9987up.club/assets/png/place1-fe39c3f3.png",
  },
  {
    name: "Mem***VMX",
    amount: "₹926,522,375.59",
    imgSrc: "https://www.9987up.club/assets/png/5-ab77b716.png",
    crownSrc: "https://www.9987up.club/assets/png/crown2-c8aced52.png",
    placeSrc: "https://www.9987up.club/assets/png/place2-8189be28.png",
  },
  {
    name: "Mem***RDT",
    amount: "₹591,763,200.00",
    imgSrc: "https://www.9987up.club/assets/png/19-2ac9fd83.png",
    crownSrc: "https://www.9987up.club/assets/png/crown3-2ca02146.png",
    placeSrc: "https://www.9987up.club/assets/png/place3-d9b0be38.png",
  },
];

// PodiumFinisher component

// App component rendering PodiumFinisher for each candidate
const PodiumFinisher = () => (
  <div className="px-[13px] py-[26px]">
    <div className="mb-[13px] w-full border-l-2 border-[rgb(235,138,31)] ">
      <h1 className="text-xl bold  pl-[10px]">Today's Earning Charts</h1>
    </div>
    <div className="">
      <div className="">
        <img src="https://www.9987up.club/assets/png/stage-147a9354.png" />
      </div>
    </div>
  </div>
);

export default PodiumFinisher;

// {candidates.map((candidate, index) => (
//     <Podium
//       key={index}
//       name={candidate.name}
//       amount={candidate.amount}
//       imgSrc={candidate.imgSrc}
//       crownSrc={candidate.crownSrc}
//       placeSrc={candidate.placeSrc}
//     />
//   ))}
