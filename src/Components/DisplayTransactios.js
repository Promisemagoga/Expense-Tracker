// function DisplayTransactions(props){
//     return(
//         <div>
//             <h2>History of transaction</h2>
//             {props.transactions.map((data) => (
//                 <div className="transaction">
//                     <h3>{data.transactionItem}</h3>
//                     <h3>{data.transactionAmount}</h3>
//                     <h3>{data.transactionType}</h3>
//                     {data.transactionType == "Expense" ? <div className="expenseIndicaor"></div>: <div className="incomeIndicator"></div> }
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default DisplayTransactions