import React from "react";
import "../components/ExpenseItem.css";

const ExpenseItem = ({ expense }) => {
  const { title, date, amount } = expense;

  return (
    <div className="expense-item">
      <div className="expense-item__description">{date.toISOString()}</div>
      <h2>{title}</h2>
      <div className="expense-itme__price">$ {amount}</div>
    </div>
  );
};

export default ExpenseItem;
