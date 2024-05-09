import { useEffect } from "react"
import { useState } from "react"

function DisplayTransactions(){
    const [transaction, setTransactions] = useState([])

    useEffect(() => {
        const storedTransaction = localStorage.getItem("Transactions")
    
    
        if (storedTransaction) {
          const transactionData = JSON.parse(storedTransaction)
          setTransactions(transactionData)
    
        } else {
          console.log('Transactions not found!!!')
        }
      }, [])
    
    return(
        <div>
            <h2>History of transaction</h2>
            {transaction.map((data) => (
                <div className="transaction">
                    <h3>{data.transactionItem}</h3>
                    <h3>{data.transactionAmount}</h3>
                    <h3>{data.transactionType}</h3>
                    {data.transactionType == "Expense" ? <div className="expenseIndicaor"></div>: <div className="incomeIndicator"></div> }
                </div>
            ))}
        </div>
    )
}

export default DisplayTransactions