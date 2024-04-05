import Input from "./components/Input";
import { CalcProvider } from "./context/CalcContext";
import Display from "./components/Display";
import { useState } from "react";
function App() {
  const [displayValue, setDisplayValue] = useState("");
  const addString = (s) => {
    setDisplayValue((pre) => pre + s);
    console.log(displayValue);
  };
  const ac = () => {
    setDisplayValue("");
  };
  const clear = () => {
    const newString = displayValue.substring(0, displayValue.length - 1);
    setDisplayValue(newString);
  };
  const getValue = () => {
    const expressionWithDecimalNumbers = displayValue.replace(
      /\b0+(\d+)/g,
      "$1"
    );
    let ans = eval(expressionWithDecimalNumbers);

    setDisplayValue(ans);
  };
  return (
    <CalcProvider value={{ displayValue, addString, getValue, ac, clear }}>
      <div className="h-[100vh] bg-gray-500 p-6">
        <h1 className="text-center justify-center m-2 text-2xl text-white">
          Calculator
        </h1>
        <div className="bg-green-200 w-[33%] mx-auto p-4  rounded-md">
          <Display />
          <Input />
        </div>
      </div>
    </CalcProvider>
  );
}

export default App;
