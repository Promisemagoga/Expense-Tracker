import "./App.css";
import AddTransaction from "./Components/AddTransaction";
import { useEffect, useState } from "react";
import DisplayTransaction from "./Components/DisplayTransaction";

function App() {
  const [transaction, setTransaction] = useState([]);

  const add = (transactionItem, transactionAmount, transactionType) => {
    setTransaction((transaction) => [
      ...transaction,
      {
        transactionItem: transactionItem,
        transactionAmount: transactionAmount,
        transactionType: transactionType,
      },
    ]);

    // console.log(transaction)

  };
  // useEffect(() => {}, [transaction]);
  return (
    <div className="App">
       <div className="container">
      <AddTransaction add={add} />
    </div>
    <DisplayTransaction transaction={transaction}/>
    </div>
   
  );
}

export default App;
