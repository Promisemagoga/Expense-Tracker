import { Alert } from "@mui/material";
import { useEffect, useState } from "react";


function UpdateTransactions({ selectedTransaction, transactions }) {
    const [addAlert, setAddAlert] = useState(false)




    const [updateTransaction, setUpdateTransaction] = useState({
        transactionItem: selectedTransaction.transactionItem,
        transactionAmount: selectedTransaction.transactionAmount,
        transactionType: selectedTransaction.transactionType

    })

    console.log(transactions);
    console.log(selectedTransaction);

    const handleChange = (event) => {
        setUpdateTransaction(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
    }


    const handleSaveUpdate = () => {
        const updatedTransactions = transactions.map((transaction) => (
            transaction === selectedTransaction ? updateTransaction : transaction
        ));
        localStorage.setItem("Transactions", JSON.stringify(updatedTransactions));
        setUpdateTransaction(updatedTransactions)
        window.location.reload()
        setAddAlert(true);
        
    };



    return (
        <div>
            <h1>Update transaction</h1>
            {addAlert && (
                <Alert sx={{ width: "22%" }} style={{ marginLeft: "auto", marginRight: "auto", marginTop: "30px", marginBottom: "20px" }} severity="success" onClose={() => setAddAlert(false)} open={addAlert}>
                    Transaction successfully Added!
                </Alert>
            )}
            <div className="addTransaction-container">
                <input
                    type="text"
                    placeholder="Add item"
                    name="transactionItem"
                    value={updateTransaction.transactionItem}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Add amount"
                    name="transactionAmount"
                    value={updateTransaction.transactionAmount}
                    onChange={handleChange}
                />
                <select
                    name="transactionType"
                    onChange={handleChange}
                    value={updateTransaction.transactionType}

                >
                    <option>Select transaction type</option>
                    <option>Income</option>
                    <option>Expense</option>
                </select>
                <button className="addBtn" onClick={handleSaveUpdate}>Update transaction</button>
            </div>
        </div>
    );
}

export default UpdateTransactions;
