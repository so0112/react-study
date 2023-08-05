import React from "react";
import ExpenseItem from "./components/ExpenseItem";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const Study = () => {
  return (
    <div className="App">
      {expenses.map((expense) => {
        return <ExpenseItem expense={expense} key={expense.id} />;
      })}
      {/* 
      FIXME
       forEach는 map과 다르게 return 하는 값이 없으므로 
       컴포넌트를 출력할 수 없다.*/}
      {expenses.forEach((expense) => {
        return <ExpenseItem expense={expense} key={expense.id} />;
      })}
    </div>
  );
};

export default Study;
