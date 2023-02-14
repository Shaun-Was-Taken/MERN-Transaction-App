import { createContext, useReducer } from "react";

export const MoneyContext = createContext();

export const moneyReducer = (state, action) => {
  switch (action.type) {
    case "SET_TRANSACTION":
      return {
        money: action.payload,
      };
    case "CREATE_TRANSACTION":
      return {
        money: [action.payload, ...state.money],
      };

    default:
      return state;
  }
};

export const MoneyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moneyReducer, {
    money: null,
  });

  return (
    <MoneyContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MoneyContext.Provider>
  );
};
