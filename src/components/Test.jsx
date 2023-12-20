import React, { useState } from "react";

const Testing = () => {
  const [text, setText] = useState(false);
  return (
    <div>
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <h1>{text}</h1>
    </div>
  );
};

export default Testing;
