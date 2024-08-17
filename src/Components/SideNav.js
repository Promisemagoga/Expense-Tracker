import { CloseRounded, CreditScore, CreditScoreSharp, DashboardRounded, List, Menu, Person, Savings, Score, Settings } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from '@mui/material';

function SideNav() {

    const [openMenue, setOpenMenue] = useState(false)
    // const isDesktop = ("min-width:1023px")
    const isDesktop = useMediaQuery('(min-width:767px)')

    function openSideNav() {
        setOpenMenue(true)
    }

    function closeSideNav() {
        setOpenMenue(false)
    }

    useEffect(() => {
        console.log(openMenue);
    })

    function LogOut(){
        localStorage.removeItem('user')
    }

    return (
        <>
            {isDesktop ? (
              
                    <main className='sideNav'>
                        <div className='logo'>
                            <h1>DFA</h1>
                            <p>Digi-Financial-Advisor</p>
                        </div>
                        <div className='sideNavLinks'>
                            <Link to="/dashboard" className='sideNavIcons'>
                                <DashboardRounded style={{ color: "#E3FEF7" }} />
                                <p>Dashboard</p>

                            </Link>
                            <Link className='sideNavIcons' to='/savings'>
                                <Savings style={{ color: "#E3FEF7" }} />

                                <p>Saving Plans</p>

                            </Link>
                            <Link className='sideNavIcons' to='/creditscore'>
                                <CreditScoreSharp style={{ color: "#E3FEF7" }} />

                                <p>Credit Score</p>
                            </Link>
                            <Link className='sideNavIcons' to=''>
                                <Settings style={{ color: "#E3FEF7" }} />
                                <p>Settings</p>
                            </Link>
                            <Link className='sideNavIcons' to=''>
                                <Person style={{ color: "#E3FEF7" }} />
                                <p>Profile</p>
                            </Link>
                        </div>
                        <button className='logOut' onClick={LogOut}>Logout</button>
                    </main>
            ) : (
                <>
                    <Menu className='hamburgerMenue' onClick={openSideNav} />
                    {openMenue && (
                        <main className='sideNav'>
                            <CloseRounded className='closeIcon' onClick={closeSideNav} />
                            <div className='logo'>
                                <h1>DFA</h1>
                                <p>Digi-Financial-Advisor</p>
                            </div>
                            <div className='sideNavLinks'>
                                <Link to="/" className='sideNavIcons'>
                                    <DashboardRounded style={{ color: "#E3FEF7" }} />
                                    <p>Dashboard</p>

                                </Link>
                                <Link className='sideNavIcons' to='/savings'>
                                    <Savings style={{ color: "#E3FEF7" }} />

                                    <p>Saving Plans</p>

                                </Link>
                                <Link className='sideNavIcons' to='/creditscore'>
                                    <CreditScoreSharp style={{ color: "#E3FEF7" }} />

                                    <p>Credit Score</p>
                                </Link>
                                <Link className='sideNavIcons' to=''>
                                    <Settings style={{ color: "#E3FEF7" }} />
                                    <p>Settings</p>
                                </Link>
                                <Link className='sideNavIcons' to=''>
                                    <Person style={{ color: "#E3FEF7" }} />
                                    <p>Profile</p>
                                </Link>
                            </div>
                            <button className='logOut' onClick={LogOut}>Logout</button>
                        </main>
                    )}
                </>
            )}


        </>

    )
}

export default SideNav