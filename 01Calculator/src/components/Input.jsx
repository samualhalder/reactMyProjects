import React from "react";
import { useCalc } from "../context/CalcContext";

function Input() {
  const { addString, getValue, ac, clear } = useCalc();

  return (
    <div className="flex-row m-3">
      <div className="flex m-1 w-full justify-between">
        <button
          onClick={ac}
          className="bg-green-400 h-20 w-40 rounded-lg shadow-md hover:bg-green-300 m-2"
        >
          AC
        </button>
        <button
          onClick={clear}
          className="bg-green-400 h-20 w-40 rounded-lg shadow-md hover:bg-green-300 m-2"
        >
          C
        </button>
      </div>
      <div className="flex-row m-5 w-full">
        <button
          onClick={() => addString("0")}
          className="bg-green-400 h-20 w-20 rounded-lg shadow-md hover:bg-green-300 m-2"
        >
          0
        </button>
        <button
          onClick={() => addString("1")}
          className="bg-green-400 h-20 w-20 rounded-lg shadow-md hover:bg-green-300 m-2"
        >
          1
        </button>
        <button
          onClick={() => addString("2")}
          className="bg-green-400 h-20 w-20 rounded-lg shadow-md hover:bg-green-300 m-2"
        >
          2
        </button>
        <button
          onClick={() => addString("+")}
          className="bg-green-400 h-20 w-20 rounded-lg shadow-md hover:bg-green-300 m-2"
        >
          +
        </button>
      </div>
      <div className="m-5 w-full">
        <button
          onClick={() => addString("3")}
          className="bg-green-400 h-20 w-20 rounded-lg shadow-md hover:bg-green-300 m-2"
        >
          3
        </button>
        <button
          onClick={() => addString("4")}
          className="bg-green-400 h-20 w-20 rounded-lg shadow-md hover:bg-green-300 m-2"
        >
          4
        </button>
        <button
          onClick={() => addString("5")}
          className="bg-green-400 h-20 w-20 rounded-lg shadow-md hover:bg-green-300 m-2"
        >
          5
        </button>
        <button
          onClick={() => addString("-")}
          className="bg-green-400 h-20 w-20 rounded-lg shadow-md hover:bg-green-300 m-2"
        >
          -
        </button>
      </div>
      <div className="m-5 w-full">
        <button
          onClick={() => addString("6")}
          className="bg-green-400 h-20 w-20 rounded-lg shadow-md hover:bg-green-300 m-2"
        >
          6
        </button>
        <button
          onClick={() => addString("7")}
          className="bg-green-400 h-20 w-20 rounded-lg shadow-md hover:bg-green-300 m-2"
        >
          7
        </button>
        <button
          onClick={() => addString("8")}
          className="bg-green-400 h-20 w-20 rounded-lg shadow-md hover:bg-green-300 m-2"
        >
          8
        </button>
        <button
          onClick={() => addString("*")}
          className="bg-green-400 h-20 w-20 rounded-lg shadow-md hover:bg-green-300 m-2"
        >
          *
        </button>
      </div>
      <div className="m-5 w-full">
        <button
          onClick={() => addString("9")}
          className="bg-green-400 h-20 w-20 rounded-lg shadow-md hover:bg-green-300 m-2"
        >
          9
        </button>
        <button
          onClick={() => addString("/")}
          className="bg-green-400 h-20 w-20 rounded-lg shadow-md hover:bg-green-300 m-2"
        >
          /
        </button>
        <button
          onClick={() => {
            addString(".");
          }}
          className="bg-green-400 h-20 w-20 rounded-lg shadow-md hover:bg-green-300 m-2"
        >
          .
        </button>
        <button
          onClick={() => {
            getValue();
            console.log(output);
          }}
          className="bg-green-400 h-20 w-20 rounded-lg shadow-md hover:bg-green-300 m-2"
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Input;
