// PaginationTable.js
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const Game01Result = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 8;
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const currentData = data.slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage
  );

  return (
    <div className="container ">
      <table className=" min-w-full border-gray-300 font-sans">
        <thead className="h-[40px] ">
          <tr className="text-[rgb(102,102,102)]">
            <th className=" border-b border-gray-300 text-wrap">Period</th>
            <th className=" border-b border-gray-300">Price</th>
            <th className=" border-b border-gray-300">Number</th>
            <th className=" border-b border-gray-300">Result</th>
          </tr>
        </thead>
        <tbody className="">
          {currentData.map((row, index) => (
            <tr
              key={index}
              className="h-[50px] min-w-full  text-xs text-center "
            >
              <td className="h-full w-1/4 border-b border-gray-300 text-wrap ">
                {row.period}
              </td>
              <td className="h-full w-1/4 border-b border-gray-300 text-wrap">
                {row.price}
              </td>
              <td className="h-full w-1/4 border-b border-gray-300 text-wrap">
                {row.number}
              </td>
              <td className="h-full w-1/4 border-b border-gray-300 text-wrap text-w/2">
                <div
                  className={`${row.result} h-[20px] w-[20px] rounded-full  ml-[35px]`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {data.length > rowsPerPage && (
        <div className="flex justify-end mt-4">
          <button onClick={handlePrevPage} className="">
            <FaChevronLeft className="h-[25px] w-[25px]  fill-slate-500 font-sans" />
          </button>
          <button onClick={handleNextPage} className="ml-[8px]">
            <FaChevronRight className="h-[25px] w-[25px] fill-slate-500 font-sans" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Game01Result;
