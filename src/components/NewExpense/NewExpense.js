import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

import React, { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const EditedExpenseDataHandler = () => {
    setIsEditing(true);
  };

  const CancelledExpenseDataHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={EditedExpenseDataHandler}>Add the Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={CancelledExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
