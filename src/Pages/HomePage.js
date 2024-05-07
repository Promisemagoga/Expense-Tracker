import { Alert } from "@mui/material";
import { useEffect, useState } from "react";
import UpdateTransactions from "../Components/UpdateTransactions";
import SideNav from "../Components/SideNav";

function HomePage() {
    const [transactionItem, setTransactionItem] = useState("");
    const [transactionAmount, setTransactionAmount] = useState("");
    const [transactionType, setTransactionType] = useState("");
    const [transactions, setTransactions] = useState([]) || []
    const [deleteAlert, setDeleteAlert] = useState(false)
    const [addAlert, setAddAlert] = useState(false)
    const [openUpDateModal, setOpenUpdateModal] = useState(false)
    const [transactionCategory, setTransactionCategory] = useState("")
    const [selectedTransaction, setSelectedTransaction] = useState(null)
    const [financialAdvice, setFinancialAdvice] = useState([
        "Buy a bus ticket instead",

    ])



    function add() {

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
            // Display error message
            alert("Expenses exceed income!");
          
            return;
        }

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

    function editFunc(index, data) {
    
        setSelectedTransaction(data)
        setOpenUpdateModal(true)
    }



    return (
        <div className="container">
      <SideNav />
            <div>
                <h2>History of transaction</h2>
                {deleteAlert && (
                    <Alert sx={{ width: "22%" }} style={{ marginLeft: "auto", marginRight: "auto", marginTop: "30px", marginBottom: "20px" }} severity="success" onClose={() => setDeleteAlert(false)} open={deleteAlert}>
                        Transaction successfully deleted!
                    </Alert>
                )}

                {transactions.map((data, index) => (
                    <div className="transaction" key={index}>
                        <h3>{data.transactionItem}</h3>
                        <h3>R{data.transactionAmount}</h3>
                        <h3>{data.transactionType}</h3>
                        <h3>{data.transactionCategory}</h3>
                        {data.transactionType !== "Expense" ? <div></div> : <button className="delete actionBtns" onClick={() => deleteFun(index)}>Delete</button>}
                        <button className="update actionBtns" onClick={(event) => editFunc(index, data)}>Update</button>
                        {data.transactionType === "Expense" ? <div className="expenseIndicaor"></div> : <div className="incomeIndicator"></div>}
                    </div>
                ))}
            </div>
            <div>
                <h1>Add new transaction</h1>
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
                    <button className="addBtn" onClick={add}>Add a transaction</button>
                </div>
            </div>
            {openUpDateModal && <UpdateTransactions setOpenUpdateModal={setOpenUpdateModal} selectedTransaction={selectedTransaction} transactions={transactions} />}

        </div>
    );
}

export default HomePage;
