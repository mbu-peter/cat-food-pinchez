import { Axios } from "axios";
import React, { useState } from "react";

const Excuse = () => {
  const [excuse, setExcuse] = useState("");
  const getData = () => {
    Axios.get("https://excuser-three.vercel.app/v1/excuse/").then((res) => {
      setExcuse(res.data);
    });
  };
  return (
    <>
      <div>
        <button onClick={getData} className="bg-gray-200 p-4">
          Party
        </button>
      </div>
      <button className="bg-gray-200 p-4 my-4 ">family</button>
      <div>
        <button className="bg-gray-200 p-4">ofice</button>
      </div>
    </>
  );
};

export default Excuse;
