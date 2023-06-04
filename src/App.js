import "./App.css";
import AddTransaction from "./Components/AddTransaction";
import { useState } from "react";
import DisplayTransactions from "./Components/DisplayTransactios";

function App() {
  const [transactions, setTransactions] = useState([]);
  const add = (transactionItem, transactionAmount, transactionType) => {
    setTransactions((transactions) => [
      ...transactions,
      {
        transactionItem: transactionItem,
        transactionAmount: transactionAmount,
        transactionType: transactionType,
      },
    ]);
    console.log(transactions)
  };
  return (
    <div className="container">
      <DisplayTransactions transactions={transactions}/>
      <AddTransaction add={add} />
    </div>
  );
}

export default App;
