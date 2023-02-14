import { MoneyContext } from "../context/moneyContext";
import { useContext } from "react";

export const useMoneyContext = () => {
  //contains state, and dispatch
  const context = useContext(MoneyContext);

  return context;
};
