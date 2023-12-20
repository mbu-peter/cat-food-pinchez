import { data } from "autoprefixer";
import Axios from "axios";
import React, { useState } from "react";

const Predictor = () => {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    });
  };
  return (
    <div>
      <input
        className="border border-gray-400 bg-gray-200 p-2 mr-10"
        type="text"
        placeholder="Ex. Peter"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchData} className="bg-blue-500 rounded-lg p-2">
        Predict Age
      </button>
      <div>
        <h1 className="mt-3">Predicted Name: {predictedAge?.name}</h1>
        <h1 className="mt-3">Predicted Age: {predictedAge?.age}</h1>
        <h1 className="mt-3">Predicted Count: {predictedAge?.count}</h1>
      </div>
    </div>
  );
};

export default Predictor;
