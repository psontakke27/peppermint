import React from 'react';

function NetBalance({ entries }) {
  const totalIncome = entries
    .filter(entry => entry.type === 'Income')
    .reduce((sum, entry) => sum + entry.amount, 0);

  const totalExpense = entries
    .filter(entry => entry.type === 'Expense')
    .reduce((sum, entry) => sum + entry.amount, 0);

  const netBalance = totalIncome - totalExpense;

  return (
    <div>
      <h2>Net Balance: Rs {netBalance.toFixed(2)}</h2>
      <div>Total Income: Rs {totalIncome.toFixed(2)}</div>
      <div>Total Expenses: Rs {totalExpense.toFixed(2)}</div>
    </div>
  );
}

export default NetBalance;
