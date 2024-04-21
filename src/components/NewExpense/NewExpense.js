import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  
    const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData)
    props.onAddExpense(expenseData);
    setIsForm(false);
  };

  const [isForm, setIsForm] = useState(false);

  const formEnableHandler = () => {
    setIsForm(true);
  };

  const formDisableHandler = () => {
    setIsForm(false);
  };

  return (
    <div className="new-expense">
      {isForm ? 
               <ExpenseForm
                 onCancel={formDisableHandler}
                 onSaveExpenseData={saveExpenseDataHandler}
               />
              : 
               <button onClick={formEnableHandler}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
