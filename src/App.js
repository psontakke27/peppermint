import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import NetBalance from './components/NetBalance';
import './App.css';

function App() {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries((prevEntries) => [...prevEntries, entry]);
  };

  const deleteEntry = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
       <ExpenseForm addEntry={addEntry} />
      <ExpenseList entries={entries} deleteEntry={deleteEntry} />
      <NetBalance entries={entries} /> 
    </div>
  );
}

export default App;
