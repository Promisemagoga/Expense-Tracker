import { useEffect, useState } from "react";
import SideNav from "../Components/SideNav";
import { Alert } from "@mui/material";
import UpdateTransactions from "../Components/UpdateTransactions";
import SearchBar from "../Components/SearchBar";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Delete, Edit, EditRounded } from "@mui/icons-material";
import AddTransaction from "../Components/AddTransaction";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#135D66",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#E3FEF7",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




function Dashboard() {
  const [transactions, setTransactions] = useState([])
  const [openUpDateModal, setOpenUpdateModal] = useState(false)
  const [openAddModal, setOpenAddModal] = useState(false)
  const [deleteAlert, setDeleteAlert] = useState(false)
  const [selectedTransaction, setSelectedTransaction] = useState(null)


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

  function addNewTrans(){
    setOpenAddModal(true)
  }


  return (
    <main className="dashBoard">
      <SideNav />
      <div className="mainContent">
        <div className="headBar">
          <h1>Dashboard</h1>
          <SearchBar />
        </div>
        <div className="searchBarSide">
          <button onClick={addNewTrans}>Add New Transaction</button>
        </div>
        <div>
          <TableContainer component={Paper} sx={{ marginTop: "30px" }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">Transaction Item</StyledTableCell>
                  <StyledTableCell align="left">Transaction Type</StyledTableCell>
                  <StyledTableCell align="left">Transaction Amount</StyledTableCell>
                  <StyledTableCell align="left">Action Buttons</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions.map((data, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell align="left">{data.transactionItem}</StyledTableCell>
                    <StyledTableCell align="left">{data.transactionType}</StyledTableCell>
                    {data.transactionType !== "Expense" ? <StyledTableCell align="left" sx={{ color: "green" }}>R{data.transactionAmount}</StyledTableCell> : <StyledTableCell align="left" sx={{ color: "red" }}>R{data.transactionAmount}</StyledTableCell>}
                    <StyledTableCell align="left" >
                      <EditRounded sx={{ color: "green" }} onClick={(event) => editFunc(index, data)} />
                      {data.transactionType !== "Expense" ? <div></div> : <Delete sx={{ color: "red", marginLeft: "30px" }} onClick={() => deleteFun(index)} />}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {deleteAlert && (
            <Alert sx={{ width: "22%" }} style={{ marginLeft: "auto", marginRight: "auto", marginTop: "30px", marginBottom: "20px" }} severity="success" onClose={() => setDeleteAlert(false)} open={deleteAlert}>
              Transaction successfully deleted!
            </Alert>
          )}

        </div>
      </div>
      {openAddModal && <AddTransaction setOpenAddModal={setOpenAddModal} />}
      {openUpDateModal && <UpdateTransactions setOpenUpdateModal={setOpenUpdateModal} selectedTransaction={selectedTransaction} transactions={transactions} />}
    </main>
  );
}

export default Dashboard;
