import React, { useState } from 'react';

function ExpenseForm({ addEntry }) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('Expense');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || !description || !date) {
      alert('Please fill in all fields');
      return;
    }

    const newEntry = {
      amount: parseFloat(amount),
      description,
      date,
      type
    };

    addEntry(newEntry);
    setAmount('');
    setDescription('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Amount: </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description: </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Date: </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Type: </label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Expense">Expense</option>
          <option value="Income">Income</option>
        </select>
      </div>
      <button type="submit">Add Entry</button>
    </form>
  );
}

export default ExpenseForm;
