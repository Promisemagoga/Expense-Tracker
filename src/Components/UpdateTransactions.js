import { ArrowBack } from "@mui/icons-material";
import { Alert } from "@mui/material";
import { useEffect, useState } from "react";


function UpdateTransactions({ selectedTransaction, transactions, setOpenUpdateModal }) {
    const [addAlert, setAddAlert] = useState(false)




    const [updateTransaction, setUpdateTransaction] = useState({
        transactionItem: selectedTransaction.transactionItem,
        transactionAmount: selectedTransaction.transactionAmount,
        transactionType: selectedTransaction.transactionType,
        transactionCategory: selectedTransaction.transactionCategory

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


        // Calculate total income and expenses
        const totalIncome = updatedTransactions.reduce((acc, cur) => {
            return cur.transactionType === 'Income' ? acc + parseFloat(cur.transactionAmount) : acc;
        }, 0);

        const totalExpenses = updatedTransactions.reduce((acc, cur) => {
            return cur.transactionType === 'Expense' ? acc + parseFloat(cur.transactionAmount) : acc;
        }, 0);

        // Check if expenses exceed income
        if (totalExpenses > totalIncome) {
            // Display error message
            alert("Expenses exceed income!");
            return;
        }

        localStorage.setItem("Transactions", JSON.stringify(updatedTransactions));
        setUpdateTransaction(updatedTransactions)
        window.location.reload()
        setAddAlert(true);

    };

    function closeModal() {
        setOpenUpdateModal(false)
    }



    return (
        <main className="modal">
            <ArrowBack onClick={closeModal} className="backButton"/>

            {addAlert && (
                <Alert sx={{ width: "22%" }} style={{ marginLeft: "auto", marginRight: "auto", marginTop: "30px", marginBottom: "20px" }} severity="success" onClose={() => setAddAlert(false)} open={addAlert}>
                    Transaction successfully Added!
                </Alert>
            )}
            <div className="addTransaction-container">
            <h1>Update transaction</h1>
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
                <select
                        name="transactionCategory"
                        onChange={handleChange}
                        value={updateTransaction.transactionCategory}
                    >
                        <option>Select Transaction Category</option>
                        <option>Housing </option>
                        <option>Transportation</option>
                        <option>Healthcare </option>
                        <option>Utilities </option>
                        <option>Debt Payments </option>
                        <option>Insurance  </option>
                        <option>Savings  </option>
                        <option>Entertainment  </option>
                        <option>Personal Care  </option>
                        <option>Education  </option>
                        <option>Clothing   </option>
                        <option>Childcare   </option>
                        <option>Gifts/Donations  </option>
                        <option>Taxes   </option>
                        <option>Food   </option>
                        <option>Travel   </option>
                        <option>Miscellaneous   </option>

                    </select>
                <button className="addBtn" onClick={handleSaveUpdate}>Update transaction</button>
            </div>
        </main>
    );
}

export default UpdateTransactions;
