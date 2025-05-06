import React, { memo, useState } from "react";
import image from "../../assets/example.png";
import { MdMovieEdit } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";
import { FaBook } from "react-icons/fa";

const Tables = ({ data, setDate, setEdit }) => {
  

  const handleDelete = (id) => {
    setDate((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <table className="mx-auto mt-52 table-auto w-[1440px] border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">#</th>
            <th className="border border-gray-300 px-4 py-2">Rasm</th>
            <th className="border border-gray-300 px-4 py-2">name</th>
            <th className="border border-gray-300 px-4 py-2">price</th>
            <th className="border border-gray-300 px-4 py-2">author</th>
            <th className="border border-gray-300 px-4 py-2">stock</th>
            <th className="border border-gray-300 px-4 py-2">ganre</th>
            <th className="border border-gray-300 px-4 py-2">description</th>
            <th className="border border-gray-300 px-4 py-2">createdAt</th>
            <th className="border border-gray-300 px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={!item.id}>
              <td className="border border-gray-300 px-4 py-2">{item.id}</td>
              <td className="border border-gray-300 px-4 py-2 w-[100px] h-[100px]">
                <img src={`${item.image}`} alt={`${item.image}`} />
              </td>
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-4 py-2">{item.price}</td>
              <td className="border border-gray-300 px-4 py-2">
                {item.author}
              </td>
              <td className="border border-gray-300 px-4 py-2">{item.stock}</td>
              <td className="border border-gray-300 px-4 py-2">{item.ganre}</td>
              <td className="border border-gray-300 px-4 py-2">
                {item.description}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {item.createdAt}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex justify-around ">
                  {/* <FaBook className="w-[30px] h-[30px] text-blue-600 cursor-pointer" /> */}
                  <MdMovieEdit
                    onClick={() => {
                      setEdit(item);
                    }}  
                    className="w-[30px] h-[30px] text-green-600 cursor-pointer"
                  />
                  <MdDeleteSweep
                    onClick={() => handleDelete(item.id)}
                    className="w-[30px] h-[30px] text-red-600 cursor-pointer"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default memo(Tables);
