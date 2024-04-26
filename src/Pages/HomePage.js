import { Alert } from "@mui/material";
import { useEffect, useState } from "react";

function HomePage() {
    const [transactionItem, setTransactionItem] = useState("");
    const [transactionAmount, setTransactionAmount] = useState("");
    const [transactionType, setTransactionType] = useState("");
    const [transactions, setTransactions] = useState([])
    const [deleteAlert, setDeleteAlert] = useState(false)
    const [addAlert, setAddAlert] = useState(false)


    function add() {
        // setTransactions((transactions) => [
        //     ...transactions,
        //     {
        //         transactionItem: transactionItem,
        //         transactionAmount: transactionAmount,
        //         transactionType: transactionType,
        //     },
        // ]);

        const newTransactions = {
            transactionItem: transactionItem,
            transactionAmount: transactionAmount,
            transactionType: transactionType,
        }

        const updatedTransactions = [...transactions, newTransactions]
        setTransactions(updatedTransactions)
        localStorage.setItem("Transactions", JSON.stringify(updatedTransactions))
        setAddAlert(true);

        console.log(transactions)

    }



    //For your data to be persistent put it in a useEffect
    useEffect(() => {
        const storedTransaction = localStorage.getItem("Transactions")
        if (storedTransaction) {
            const transactionData = JSON.parse(storedTransaction)
            setTransactions(transactionData)
        } else {
            console.log('Transactions not found!!!')
        }
    }, [])


    function deleteFun(index) {
        //it creates a copy of transactions array and nowthe new array is called transactionData
        const transactionData = transactions.slice();

        // removing one transaction from the transactionData  array at a specified index and the one represent how
        // many transactions can be removed
        transactionData.splice(index, 1);

        localStorage.setItem("Transactions", JSON.stringify(transactionData))
        setTransactions(transactionData);
        setDeleteAlert(true);
    }

    return (
        <div className="container">
            <div>
                <h2>History of transaction</h2>
                {deleteAlert && (
                    <Alert sx={{width:"22%"}} style={{marginLeft: "auto",marginRight:"auto", marginTop: "30px", marginBottom:"20px"}} severity="success" onClose={() => setDeleteAlert(false)} open={deleteAlert}>
                        Transaction successfully deleted!
                    </Alert>
                )}

                {transactions.map((data, index) => (
                    <div className="transaction" key={index}>
                        <h3>{data.transactionItem}</h3>
                        <h3>R{data.transactionAmount}</h3>
                        <h3>{data.transactionType}</h3>
                        <button className="delete actionBtns" onClick={() => deleteFun(index)}>Delete</button>
                        <button className="update actionBtns">Update</button>
                        {data.transactionType == "Expense" ? <div className="expenseIndicaor"></div> : <div className="incomeIndicator"></div>}
                    </div>
                ))}
            </div>
            <div>
                <h1>Add new transaction</h1>
                {addAlert && (
                    <Alert sx={{width:"22%"}} style={{marginLeft: "auto",marginRight:"auto", marginTop: "30px", marginBottom:"20px"}} severity="success" onClose={() => setAddAlert(false)} open={addAlert}>
                        Transaction successfully Added!
                    </Alert>
                )}
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
                    <button className="addBtn" onClick={add}>Add a transaction</button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
