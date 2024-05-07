import { Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';

const columns = [
    { id: 'months', label: 'Months', minWidth: 100 },
    { id: 'amount', label: 'Amount', minWidth: 100 },
    { id: 'status', label: 'Status', minWidth: 100 },
    { id: 'date', label: 'Date Paid', minWidth: 100, align: 'right' },
    { id: 'tick', label: 'Tick if paid', minWidth: 100, align: 'right' },
];

function createData(months, amount, status, date, tick, isChecked) {
    return { months, amount, status, date, tick, isChecked };
}

const initialRows = [
    createData('Jan', 'R300', 'Outstanding', "awaiting", <Checkbox />, false),
    createData('Feb', 'R300', 'Outstanding', "awaiting", <Checkbox />, false),
    createData('Mar', 'R300', 'Outstanding', "awaiting", <Checkbox />, false),
    createData('Apr', 'R300', 'Outstanding', "awaiting", <Checkbox />, false),
    createData('May', 'R300', 'Outstanding', "awaiting", <Checkbox />, false),
    createData('Jun', 'R300', 'Outstanding', 'awaiting', <Checkbox />, false),
    createData('Jul', 'R300', 'Outstanding', 'awaiting', <Checkbox />, false),
    createData('Aug', 'R300', 'Outstanding', 'awaiting', <Checkbox />, false),
    createData('Sep', 'R300', 'Outstanding', 'awaiting', <Checkbox />, false),
    createData('Oct', 'R300', 'Outstanding', 'awaiting', <Checkbox />, false),
    createData('Nov', 'R300', 'Outstanding', 'awaiting', <Checkbox />, false),
    createData('Dec', 'R300', 'Outstanding', 'awaiting', <Checkbox />, false),
];

function PlanOneData() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);
    const [transactions, setTransactions] = useState(null)
    const [rows, setRows] = useState(initialRows)

    useEffect(() => {
        const storedRows = JSON.parse(localStorage.getItem('BasicPlan'));
        if (storedRows) {
            setRows(storedRows);
        }
    }, []);

   
  useEffect(() => {
    // Retrieve transaction data from local storage
    const transactionData = JSON.parse(localStorage.getItem('Transactions'));
    setTransactions(transactionData);
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
        localStorage.setItem('BasicPlan', JSON.stringify(updatedRows));
        // Set state after ensuring data is stored
        setRows(updatedRows);
    };


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        < div className='planTables' >
            {
              transactions && transactions.transactionType === "Income" &&  transactions.transactionAmount < 5000 ? (
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <div className='planHeading'>
                            <h3 className='plaNum'>Basic Plan</h3>
                            <h1 style={{color:"red"}}>Recommended</h1>

                            <h3 className='totalAmount'>Total: R3600</h3>
                        </div>
                        <TableContainer>
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
                ) : (
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <div className='planHeading'>
                            <h3 className='plaNum'>Basic Plan</h3>
                            <h3 className='totalAmount'>Total: R3600</h3>
                        </div>
                        <TableContainer>
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
                )
            }

        </div >
    );
}

export default PlanOneData;
