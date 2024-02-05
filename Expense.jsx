// // Expense.jsx

// import React, { useState } from 'react';

// function Expense() {
//   const [expense, setExpense] = useState('');

//   const handleExpenseChange = (e) => {
//     setExpense(e.target.value);
//   };

//   const handleCheckProfitLoss = () => {
//     const expenseAmount = parseFloat(expense);

//     if (isNaN(expenseAmount)) {
//       console.log('Please enter a valid expense amount.');
//     } else if (expenseAmount > 0) {
//       console.log('Profit');
//     } else if (expenseAmount < 0) {
//       console.log('Loss');
//     } else {
//       console.log('No Profit No Loss');
//     }
//   };

//   return (
//     <>
//       <p>Enter expense</p>
//       <input type="text" value={expense} onChange={handleExpenseChange} />
//       <button onClick={handleCheckProfitLoss}>Check Profit/Loss</button>
//     </>
//   );
// }

// export default Expense;
import React, { useState } from 'react';

function ExpenseForm({ onExpenseSubmit }) {
  const [expenseAmount, setExpenseAmount] = useState('');

  const handleExpenseChange = (event) => {
    setExpenseAmount(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onExpenseSubmit(expenseAmount);
  };

  return (
    <div>
      <h2>Expense Form</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Expense Amount:
          <input
            type="number"
            value={expenseAmount}
            onChange={handleExpenseChange}
            placeholder="Enter expense amount"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ExpenseForm;