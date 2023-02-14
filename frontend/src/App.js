import { useEffect, useState } from "react";
import "./App.css";
import Transactions from "./components/Transactions";
import TransactionsForm from "./components/TransactionsForm";
import { useMoneyContext } from "./hooks/useMoneyContext";

function App() {
  const { money, dispatch } = useMoneyContext();

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await fetch("/api/money");
      //parse the json
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TRANSACTION", payload: json });
      }
    };

    fetchTransactions();
  }, []);
  return (
    <main>
      <TransactionsForm />
      {money &&
        money.map((m) => (
          <Transactions
            key={m._id}
            money={m.money}
            description={m.description}
            sign={m.sign}
            date={m.date}
          />
        ))}
    </main>
  );
}

export default App;
