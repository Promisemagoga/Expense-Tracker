function DisplayTransaction(props){
    return(
        <div>
            <h1>History of transactions</h1>
            {props.transaction.map((data) =>(
                <div className="displayContainer">
                    <h1>Item: {data.transactionItem}</h1>
                    <h2>Amount: R{data.transactionAmount}</h2>
                    <h3>Type: {data.transactionType}</h3>
                    <hr/>

                </div>
            ))}
        </div>
    )
}

export default DisplayTransaction