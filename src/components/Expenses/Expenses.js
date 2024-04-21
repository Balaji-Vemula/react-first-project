import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpenseList from "./ExpensesList";  

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const filterYearHandler = (selectedYear) => {
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear() === parseInt(filteredYear);
  });

  // The third way of rendering conditional content
  //     - using if condition outside of JSX code
  //     i.e before return statement
  // which is now in ExpenseList.js
  // let conditionalExpenses = <p>No Expenses found.</p>;
  // if (expenses.length > 0) {
  //   conditionalExpenses = expenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterYear={filterYearHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {/* The first way to render conditional content - Using ternary operator */}
      {/* {expenses.length === 0 ? (
        <p> No Expense found.</p>
      ) : (
        expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}

      {/* The second way to render conditional content - using && operator */}
      {/* {expenses.length === 0 && <p> No Expense found.</p>}
      {expenses.length > 0 &&
        expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

      {/* The third way of rendering conditional content
      - using if condition outside of JSX code 
      i.e before return statement */}
      {/* {conditionalExpenses} */}
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
