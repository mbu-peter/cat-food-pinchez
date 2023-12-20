import React, { useEffect, useState } from "react";
import Axios from "axios";

const Catfact = () => {
  const [facto, setFact] = useState("");
  //   fetch("https://catfact.ninja/facts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  const fecthCat = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setFact(res.data.fact);
    });
  };
  useEffect(() => {
    fecthCat();
  }, []);

  return (
    <div>
      <button onClick={fecthCat} className="bg-gray-300 p-2 rounded-lg">
        Catfact
      </button>
      <p>{facto}</p>
    </div>
  );
};

export default Catfact;
