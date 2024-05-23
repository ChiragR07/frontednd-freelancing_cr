import React, { useState, useEffect } from "react";
import { FaTrophy } from "react-icons/fa";

export default function CountDownAndPeriod({ data, setData }) {
  const initialTime = 120; // 10 seconds for testing
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isLoading, setIsLoading] = useState(false);
  const [periodCounter, setPeriodCounter] = useState(20240520320); // Start period counter

  const getRandomNumber = () => Math.floor(Math.random() * 10) + 1; // Random number between 1-10
  const getRandomColor = () => {
    const colors = ["bg-red-500", "bg-green-500", "bg-violet-500"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    if (timeLeft === 0) {
      setIsLoading(true);
      const loadingTimeout = setTimeout(() => {
        setIsLoading(false);
        setTimeLeft(initialTime);
        const newEntry = {
          period: periodCounter.toString(),
          price: 100,
          number: getRandomNumber(),
          result: getRandomColor(),
        };
        console.log(data);
        setData((preData) => [newEntry, ...preData]);
        console.log(data);
        setPeriodCounter((prevCounter) => prevCounter + 1);
      }, 1000); // 1 second loading screen

      return () => clearTimeout(loadingTimeout);
    }

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, periodCounter]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="text-2xl font-mono">Loading...</div>
        </div>
      ) : (
        <div className="w-full flex flex-row divide-x-2 divide-slate-200 outline-0 p-[3px] mt-[5px]">
          <div className="w-1/2 flex flex-col gap-1">
            <div className="flex flex-row gap-2 justify-center">
              <FaTrophy className="h-[25px] w-[25px] fill-[rgb(102,102,102)]" />
              <div className="text-[rgb(102,102,102)] text-sm">Period</div>
            </div>
            <div className="text-md tracking-wide flex justify-center">
              20200709304
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col gap-1">
              <div className="text-md flex justify-center text-[rgb(102,102,102)] text-sm">
                Count Down
              </div>
              <div className="tracking-wide text-2xl flex justify-center items-center font-mono text-black text-bold">
                {formatTime(timeLeft)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
