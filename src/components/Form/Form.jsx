import React, { memo, useEffect, useRef, useState } from "react";

const Form = ({ setDate, edit, setEdit }) => {
  const name = useRef(null);
  const price = useRef(null);
  const author = useRef(null);
  const stock = useRef(null);
  const ganre = useRef(null);
  const description = useRef(null);
  const file = useRef(null);

  useEffect(() => {
    if (edit) {
      name.current.value = edit.name;
      price.current.value = edit.price;
      author.current.value = edit.author;
      stock.current.value = edit.stock;
      ganre.current.value = edit.ganre;
      description.current.value = edit.description;
    }
  }, [edit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = edit ? edit.id : new Date().getTime();
    const createdAt = new Date().toLocaleString();
    const fileInput = file.current.files[0];

    if (edit) {
      if (fileInput) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const updateBook = {
            id,
            name: name.current.value,
            price: price.current.value,
            author: author.current.value,
            stock: stock.current.value,
            ganre: ganre.current.value,
            description: description.current.value,
            image: reader.result,
            createdAt,
          };

          setDate((prev) =>
            prev.map((item) => (item.id === edit.id ? updateBook : item))
          );
          setEdit(null);
          clearForm(); 
        };
        reader.readAsDataURL(fileInput);
      } else {
        const updateBook = {
          id,
          name: name.current.value,
          price: price.current.value,
          author: author.current.value,
          stock: stock.current.value,
          ganre: ganre.current.value,
          description: description.current.value,
          image: edit.image, 
          createdAt,
        };

        setDate((prev) =>
          prev.map((item) => (item.id === edit.id ? updateBook : item))
        );
        setEdit(null);
        clearForm();
      }
    } else {
      if (fileInput) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const newBook = {
            id,
            name: name.current.value,
            price: price.current.value,
            author: author.current.value,
            stock: stock.current.value,
            ganre: ganre.current.value,
            description: description.current.value,
            image: reader.result,
            createdAt,
          };

          setDate((prev) => [...prev, newBook]);
          clearForm();
        };
        reader.readAsDataURL(fileInput);
      }
    }
  };

  const clearForm = () => {
    name.current.value = "";
    price.current.value = "";
    author.current.value = "";
    stock.current.value = "";
    ganre.current.value = "";
    description.current.value = "";
    file.current.value = "";
  };

  return (
    <form action="" className="bg-[#eee] rounded " onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 items-center gap-5 px-3 py-3">
        <input
          type="text"
          className="border border-gray-200 outline-0 indent-2.5 flex-1 h-10 rounded focus:border-gray-500 focus:shadow bg-white"
          placeholder="name..."
          ref={name}
          required
        />
        <input
          type="text"
          className="border border-gray-200 outline-0 indent-2.5 flex-1 h-10 rounded focus:border-gray-500 focus:shadow bg-white"
          placeholder="price..."
          ref={price}
          required
        />
        <input
          type="text"
          className="border border-gray-200 outline-0 indent-2.5 flex-1 h-10 rounded focus:border-gray-500 focus:shadow bg-white"
          placeholder="author..."
          ref={author}
          required
        />
        <input
          type="text"
          className="border border-gray-200 outline-0 indent-2.5 flex-1 h-10 rounded focus:border-gray-500 focus:shadow bg-white"
          placeholder="stock..."
          ref={stock}
          required
        />
        <input
          type="text"
          className="border border-gray-200 outline-0 indent-2.5 flex-1 h-10 rounded focus:border-gray-500 focus:shadow bg-white"
          placeholder="ganre..."
          ref={ganre}
          required
        />
        <input
          type="text"
          className="border border-gray-200 outline-0 indent-2.5 flex-1 h-10 rounded focus:border-gray-500 focus:shadow bg-white"
          placeholder="description..."
          ref={description}
          required
        />
        <input
          type="file"
          className="border border-gray-200 outline-0 indent-2.5 flex-1 h-10 rounded focus:border-gray-500 focus:shadow bg-white"
          ref={file}
          required
        />
      </div>
      <div className="flex justify-center items-center py-3">
        <button
          className={`w-[150px] h-[50px] rounded text-white
    ${edit ? "bg-green-600 hover:bg-green-800" : "bg-blue-600  hover:bg-blue-700 "}`}
        >
          {edit ? "Change" : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default memo(Form);
