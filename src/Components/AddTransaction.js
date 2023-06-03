import { useState } from "react";

function AddTransaction(props) {
  const [transactionItem, setTransactionItem] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const [transactionType, setTransactionType] = useState("");

  const add = () => {
    props.add(transactionItem, transactionAmount, transactionType);
  };

  return (
    <div className="transaction--container">
      <h1>Add a new transaction</h1>
      <input
        type="text"
        placeholder="Enter Item"
        onChange={(event) => {
          setTransactionItem(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter amount"
        onChange={(event) => {
          setTransactionAmount(event.target.value);
        }}
      />
      <select
        onChange={(event) => {
          setTransactionType(event.target.value);
        }}
      >
        <option>Income</option>
        <option>Expense</option>
      </select>
      <button onClick={add}>Add a transaction</button>
    </div>
  );
}

export default AddTransaction;
