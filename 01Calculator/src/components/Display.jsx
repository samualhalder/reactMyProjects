import React, { useEffect, useState } from "react";
import { useCalc } from "../context/CalcContext";

function Display() {
  const { displayValue, addString } = useCalc();
  const handleChange = (e) => {
    // Call the addString function from the context directly with the new input value
    const newChar = e.target.value[length - 1];
    addString(newChar);
  };

  return (
    <input
      type="text"
      className="w-full bg-white h-12 my-3 px-4"
      value={displayValue}
    />
  );
}

export default Display;
