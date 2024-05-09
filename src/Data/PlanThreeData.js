import { Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'

const columns = [
    { id: 'months', label: 'Months', minWidth: 100 },
    { id: 'amount', label: 'Amount', minWidth: 100 },
    {
        id: 'status',
        label: 'Status',
        minWidth: 100,
    },

    { id: 'date', label: 'Date Paid', minWidth: 100, align: 'right' },

    {
        id: 'tick',
        label: 'Tick if paid',
        minWidth: 100,
        align: 'right',
    },

];

function createData(months, amount, date, status, tick) {
    return { months, amount, date, status, tick };
}

const initialRows = [
    createData('Jan', 'R200', 'Outstanding', "awaiting", <Checkbox />, false),
    createData('Feb', 'R400', 'Outstanding', "awaiting", <Checkbox />, false),
    createData('Mar', 'R600', 'Outstanding', "awaiting", <Checkbox />, false),
    createData('Apr', 'R800', 'Outstanding', "awaiting", <Checkbox />, false),
    createData('May', 'R1000', 'Outstanding', "awaiting", <Checkbox />, false),
    createData('Jun', 'R1200', 'Outstanding', "awaiting", <Checkbox />, false),
    createData('Jul', 'R1400', 'Outstanding', "awaiting", <Checkbox />, false),
    createData('Aug', 'R1600', 'Outstanding', "awaiting", <Checkbox />, false),
    createData('Sep', 'R1800', 'Outstanding', "awaiting", <Checkbox />, false),
    createData('Oct', 'R2000', 'Outstanding', "awaiting", <Checkbox />, false),
    createData('Nov', 'R2200', 'Outstanding', "awaiting", <Checkbox />, false),
    createData('Dec', 'R2400', 'Outstanding', "awaiting", <Checkbox />, false),
];

function PlanThreeData(recommendedPlanThree) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);
    const [rows, setRows] = useState(initialRows)




    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    useEffect(() => {
        const storedRows = JSON.parse(localStorage.getItem('PremiumPlan'));
        if (storedRows) {
            setRows(storedRows);
        }
    }, []);




    const handleCheckboxChange = (index) => {
        const updatedRows = [...rows];
        updatedRows[index].isChecked = !updatedRows[index].isChecked;
        updatedRows[index].date = new Date().toLocaleDateString();
        updatedRows[index].status = "Paid";


        if (!updatedRows[index].isChecked) {
            updatedRows[index].date = "Awaiting";
            updatedRows[index].status = "Outstanding";
        } else {
            updatedRows[index].date = new Date().toLocaleDateString();
            updatedRows[index].status = "Paid";
        }

        // Update local storage
        localStorage.setItem('PremiumPlan', JSON.stringify(updatedRows));
        // Set state after ensuring data is stored
        setRows(updatedRows);
    };


    return (
        <div className='planTables'>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            {recommendedPlanThree.length > 0 &&
                        (
                            <div className="recommendedBadge">Recommended</div>
                        )
                    }
                <div className='planHeading'>
                    <h3 className='plaNum'>Premium Plan</h3>
                    <h3 className='totalAmount'>Total: R15 300</h3>
                </div>
                <TableContainer >
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (

                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >

                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.id === 'tick' ?
                                                            <Checkbox
                                                                checked={row.isChecked}
                                                                onChange={() => handleCheckboxChange(index)}
                                                            />
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}

                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[4, 8, 12]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>





        </div>


    )
}

export default PlanThreeData