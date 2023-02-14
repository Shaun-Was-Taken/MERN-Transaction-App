import React from "react";

function Transactions({ money, description, sign, date }) {
  return (
    <div className="transactions">
      <div className="transaction">
        <div className="left">
          <div className="name">
            {money} {description}
          </div>
          <div className="description">{description}</div>
        </div>
        <div className="right">
          <div className={sign ? "price red" : "price green"}>${money}</div>
          <div className="datetime">{date}</div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
