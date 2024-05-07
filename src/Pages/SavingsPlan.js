import * as React from 'react';
import SideNav from '../Components/SideNav';
import SearchBar from '../Components/SearchBar';
import PlanOneData from '../Data/PlanOneData';
import PlanTwoData from '../Data/PlanTwoData';
import PlanThreeData from '../Data/PlanThreeData';
import { useEffect } from 'react';



function SavingsPlan() {
    const [seeTable2, setSeeTable2] = React.useState(false);
    const [seeTable1, setSeeTable1] = React.useState(true);
    const [seeTable3, setSeeTable3] = React.useState(false);


    



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
                            <PlanOneData />
                            <button onClick={seeTableTwo} className='nextBtn'>Next</button>
                        </div>
                    )}


                    {
                        seeTable2 && (
                            <div>
                                <PlanTwoData />
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

                                <PlanThreeData />
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
