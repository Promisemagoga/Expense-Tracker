import { CreditScore, CreditScoreSharp, DashboardRounded, List, Person, Savings, Score, Settings } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom';
import React from 'react'

function SideNav() {
    return (
        <main className='sideNav'>
            <div className='logo'>
                <h1>DFA</h1>
                <p>Digi-Financial-Advisor</p>
            </div>
            <div className='sideNavLinks'>
                <div className='sideNavIcons'>
                    <Score style={{ color: "#E3FEF7" }} />
                    <Link to='/'>Overview</Link>
                </div>
                <div className='sideNavIcons'>
                    <DashboardRounded style={{ color: "#E3FEF7" }} />
                    <Link to="/dashboard">Dashboard</Link>
                </div>
                <div className='sideNavIcons'>
                    <List style={{ color: "#E3FEF7" }} />
                    <Link to='/categories'>Categories</Link>
                </div>
                <div className='sideNavIcons'>
                    <Savings style={{ color: "#E3FEF7" }} />
                    <a href='/savings'>Saving Plans</a>
                </div>
                <div className='sideNavIcons'>
                    <CreditScoreSharp style={{ color: "#E3FEF7" }} />
                    <a href=''>Credit Score</a>
                </div>
                {/* <a href=''>Get a financial advisor</a> */}
                <div className='sideNavIcons'>
                    <Settings style={{ color: "#E3FEF7" }} />
                    <a href=''>Settings</a>
                </div>
                <div className='sideNavIcons'>
                    <Person style={{ color: "#E3FEF7" }} />
                    <a href=''>Profile</a>
                </div>
            </div>
            <button className='logOut'>Logout</button>
        </main>
    )
}

export default SideNav