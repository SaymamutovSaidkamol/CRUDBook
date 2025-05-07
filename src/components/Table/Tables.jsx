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
      <div className="overflow-x-auto px-4">
        <table className="mt-20 min-w-[1000px] w-full table-auto border-collapse shadow-lg rounded-2xl overflow-hidden">
          <thead >
            <tr className="bg-gray-200 text-gray-700 text-sm uppercase">
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Rasm</th>
              <th className="px-4 py-3 text-left">name</th>
              <th className="px-4 py-3 text-left">price</th>
              <th className="px-4 py-3 text-left">author</th>
              <th className="px-4 py-3 text-left">stock</th>
              <th className="px-4 py-3 text-left">ganre</th>
              <th className="px-4 py-3 text-left">description</th>
              <th className="px-4 py-3 text-left">createdAt</th>
              <th className="px-4 py-3 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={!item.id} className="hover:bg-gray-100 text-gray-800 text-sm border-t border-gray-200">
                <td className="px-4 py-3">{item.id}</td>
                <td className="px-4 py-3">
                  <img src={`${item.image}`} alt={`${item.image}`} className="w-[60px] h-[60px] rounded-md object-cover"/>
                </td>
                <td className="px-4 py-3">
                  {item.name}
                </td>
                <td className="px-4 py-3">
                  {item.price}
                </td>
                <td className="px-4 py-3">
                  {item.author}
                </td>
                <td className="px-4 py-3">
                  {item.stock}
                </td>
                <td className="px-4 py-3">
                  {item.ganre}
                </td>
                <td className="px-4 py-3 truncate max-w-[200px]">
                  {item.description}
                </td>
                <td className="px-4 py-3">
                  {item.createdAt}
                </td>
                <td className="px-4 py-3">
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
      </div>
    </>
  );
};

export default memo(Tables);
