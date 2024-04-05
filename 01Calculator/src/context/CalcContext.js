import { createContext, useContext } from "react";

export const calcContext = createContext({
  displayValue: "",
  getValue: () => {},
  addString: () => {},
  clear: () => {},
  ac: () => {},
});
export const CalcProvider = calcContext.Provider;
export const useCalc = () => {
  return useContext(calcContext);
};
