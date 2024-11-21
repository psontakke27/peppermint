import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ entries, deleteEntry }) {
  return (
    <div>
      <h2>All Entries</h2>
      <ul>
        {entries.map((entry, index) => (
          <ExpenseItem
            key={index}
            entry={entry}
            index={index}
            deleteEntry={deleteEntry}
          />
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
