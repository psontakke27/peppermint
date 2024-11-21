import React from 'react';

function ExpenseItem({ entry, index, deleteEntry }) {
  return (
    <li>
      <div>
        <strong>{entry.type}:</strong> ${entry.amount} - {entry.description} on {entry.date}
      </div>
      <button onClick={() => deleteEntry(index)}>Delete</button>
    </li>
  );
}

export default ExpenseItem;
