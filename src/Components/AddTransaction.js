import { useEffect, useState } from "react";
import { Alert } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";







function AddTransaction({ setOpenAddModal }) {
    const [transactionItem, setTransactionItem] = useState("");
    const [transactionAmount, setTransactionAmount] = useState("");
    const [transactionType, setTransactionType] = useState("");
    const [transactionCategory, setTransactionCategory] = useState("")
    const [transactions, setTransactions] = useState([]) || []
    const [addAlert, setAddAlert] = useState(false)
    const [errorArlet,setErrorArlet]= useState(false)
    const [loading, setLoading] = useState(false)



    function add() {

        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);

        const storedTransaction = localStorage.getItem("Transactions")
        console.log(storedTransaction);


        const newTransactions = {
            transactionItem: transactionItem,
            transactionAmount: transactionAmount,
            transactionType: transactionType,
            transactionCategory: transactionCategory,

        }

        const updatedTransactions = [...transactions, newTransactions]


        // Calculate total income and expenses
        const totalIncome = updatedTransactions.reduce((acc, cur) => {
            return cur.transactionType === 'Income' ? acc + parseFloat(cur.transactionAmount) : acc;
        }, 0);

        const totalExpenses = updatedTransactions.reduce((acc, cur) => {
            return cur.transactionType === 'Expense' ? acc + parseFloat(cur.transactionAmount) : acc;
        }, 0);

        // Check if expenses exceed income
        if (totalExpenses > totalIncome) {
            setErrorArlet(true)
            // Display error message
            // alert("Expenses exceed income!");

            return;
        }

        setTransactions(updatedTransactions)
        localStorage.setItem("Transactions", JSON.stringify(updatedTransactions))
        setAddAlert(true);
        console.log(transactions)

    }

    useEffect(() => {
        const storedTransaction = localStorage.getItem("Transactions")
        if (storedTransaction) {
            const transactionData = JSON.parse(storedTransaction)
            setTransactions(transactionData)
        } else {
            console.log('Transactions not found!!!')
        }
    }, [])

    function closeModal() {
        setOpenAddModal(false)
    }

    return (
        <main className="modal">

            <ArrowBack onClick={closeModal} className="backButton" />

            {addAlert && (
                <Alert sx={{ width: "22%" }} style={{ marginLeft: "auto", marginRight: "auto", marginTop: "30px", marginBottom: "20px" }} severity="success" onClose={() => setAddAlert(false)} open={addAlert}>
                    Transaction successfully Added!
                </Alert>
            )}
             {errorArlet && (
                <Alert sx={{ width: {lg:"22%",md:"22%", xs:"70%"} }} style={{ marginLeft: "auto", marginRight: "auto", marginTop: "30px", marginBottom: "20px" }}  severity="warning" onClose={() => setErrorArlet(false)} open={errorArlet}>
                   Expenses exceed income!
                </Alert>
            )}
            <div className="addTransaction-container">
                <h1>Add New Transaction</h1>
                <input
                    type="text"
                    placeholder="Add item"
                    name="transactionItem"
                    onChange={(event) => {
                        setTransactionItem(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Add amount"
                    name="transactionAmount"
                    onChange={(event) => {
                        setTransactionAmount(event.target.value);
                    }}
                />
                <select
                    name="transactionType"
                    onChange={(event) => {
                        setTransactionType(event.target.value);
                    }}
                >
                    <option>Select transaction type</option>
                    <option>Income</option>
                    <option>Expense</option>
                </select>
                <select
                    name="transactionCategory"
                    onChange={(event) => {
                        setTransactionCategory(event.target.value);
                    }}
                >
                    <option>Select Transaction Category</option>
                    <option>Income</option>
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
                    <option>Travel</option>
                    <option>Food   </option>
                    <option>Miscellaneous   </option>

                </select>
                <button className="addBtn" onClick={add}>{loading ? "Loading..." : "Add a transaction"}</button>
            </div>

        </main>
    );
}

export default AddTransaction;
