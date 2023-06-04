import { useState } from "react";

function AddTransaction(props) {
  const [transactionItem, setTransactionItem] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const [transactionType, setTransactionType] = useState("");

  const add = function Add() {
    props.add(transactionItem, transactionAmount, transactionType);
  };

  return (
    <div>
      <h1>Add new transaction</h1>
      <div className="addTransaction-container">
        <input
          type="text"
          placeholder="Add item"
          onChange={(event) => {
            setTransactionItem(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Add amount"
          onChange={(event) => {
            setTransactionAmount(event.target.value);
          }}
        />
        <select
          onChange={(event) => {
            setTransactionType(event.target.value);
          }}
        >
          <option>Select transaction type</option>
          <option>Income</option>
          <option>Expense</option>
        </select>
        <button onClick={add}>Add a transaction</button>
      </div>
    </div>
  );
}

export default AddTransaction;
