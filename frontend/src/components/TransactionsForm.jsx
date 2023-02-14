import React, { useState } from "react";
import { useMoneyContext } from "../hooks/useMoneyContext";

function TransactionsForm() {
  const { dispatch } = useMoneyContext();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    let signMinus = true;
    let newName = "";
    e.preventDefault();

    if (name.includes("-")) {
      newName = name.substring(name.indexOf("-") + 1, name.length);
      setName(newName.replace(/\s/g, ""));
      signMinus = true;
    } else {
      if (name.includes("+")) {
        newName = name.substring(name.indexOf("+") + 1, name.length);
        setName(newName.replace(/\s/g, ""));
      } else {
        newName = name;
        setName(newName.replace(/\s/g, ""));
      }
      signMinus = false;
    }

    console.log(newName, date, description, signMinus);

    //reset form

    const money = { money: name, description, sign: signMinus, date };

    const response = await fetch("/api/money", {
      method: "POST",
      body: JSON.stringify(money),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      console.log("new transaction added");
      setName("");
      setDate("");
      setDescription("");
      dispatch({ type: "CREATE_TRANSACTION", payload: json });
    }
  };

  return (
    <>
      <h1>MERN Stack Money Tracker</h1>
      <form onSubmit={handleSubmit}>
        <div className="basic">
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="+200 / -200"
          />
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="datetime-local"
          />
        </div>
        <div className="description">
          <input
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            type="text"
            placeholder="description"
          />
        </div>
        <button type="submit">Add New Transactions</button>
      </form>
    </>
  );
}

export default TransactionsForm;
