import * as React from 'react';
import SideNav from '../Components/SideNav';
import SearchBar from '../Components/SearchBar';
import PlanOneData from '../Data/PlanOneData';
import PlanTwoData from '../Data/PlanTwoData';
import PlanThreeData from '../Data/PlanThreeData';
import { useEffect } from 'react';
import { useState } from 'react';



function SavingsPlan() {
    const [seeTable2, setSeeTable2] = useState(false);
    const [seeTable1, setSeeTable1] = useState(true);
    const [seeTable3, setSeeTable3] = React.useState(false);
    const [transactions, setTransactions] = useState([])






    function seeTableTwo() {
        setSeeTable2(true)
        setSeeTable1(false)
    }

    function seeTableThree() {
        setSeeTable3(true)
        setSeeTable2(false)
    }

    function BackToTableTwo() {
        setSeeTable3(false)
        setSeeTable2(true)
    }

    function BackToTableOne() {
        setSeeTable2(false)
        setSeeTable1(true)
    }

    useEffect(() => {
        const storedTransaction = localStorage.getItem("Transactions")
        const transactionData = JSON.parse(storedTransaction)

        setTransactions(transactionData)

    }, [])

    const recommendedPlanOne = transactions.filter(
        transaction => transaction.transactionType === 'Income' && transaction.transactionAmount <= 5000
    )

    const recommendedPlanTwo = transactions.filter(
        transaction => transaction.transactionType === 'Income' && transaction.transactionAmount > 5000 && transaction.transactionAmount<= 10000 

    )

    const recommendedPlanThree = transactions.filter(
        transaction => transaction.transactionType === 'Income' && transaction.transactionAmount > 10000
    )





    return (
        <main className="dashBoard">
            <SideNav />
            <div className="mainContent">
                <div className="headBar">
                    <h1>Saving Plans</h1>
                    <SearchBar />
                </div>
                <div className="searchBarSide">
                </div>
                <div className='planTables'>
          
                   
                    {seeTable1 && (
                        <div>
                            <PlanOneData recommendedPlanOne={recommendedPlanOne}/>
                            <button onClick={seeTableTwo} className='nextBtn'>Next</button>
                        </div>
                    )}
                    {
                        seeTable2 && (
                            <div>
                                <PlanTwoData recommendedPlanTwo={recommendedPlanTwo}/>
                                <div className='nextDiv'>
                                    <button onClick={BackToTableOne} className='nextBtn'>Back</button>
                                    <button onClick={seeTableThree} className='nextBtn'>Next</button>

                                </div>
                            </div>
                        )
                    }

                    {
                        seeTable3 && (
                            <div>
                                <PlanThreeData recommendedPlanThree={recommendedPlanThree}/>
                                <button onClick={BackToTableTwo} className='nextBtn'>Back</button>
                            </div>
                        )
                    }

                </div>

            </div>
        </main>
    );
}

export default SavingsPlan;
