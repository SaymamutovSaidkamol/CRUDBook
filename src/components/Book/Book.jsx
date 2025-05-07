import React, { useState, memo, useEffect } from "react";

import Form from "../Form/Form";
import Tables from "../Table/Tables";

const Book = () => {
  const [data, setDate] = useState(JSON.parse(localStorage.getItem("data")) || []);
  const [edit, setEdit] = useState(null);

  useEffect(()=> {
    localStorage.setItem("data", JSON.stringify(data))
  }, [data])

  return (
    <div className=" p-4 flex flex-col container mx-auto mt-[200px]">
      <Form setDate={setDate} edit={edit} setEdit={setEdit}/>
      <Tables data={data} setDate={setDate} setEdit={setEdit}/>
    </div>
  );
};

export default memo(Book);
