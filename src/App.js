import "./App.css";
import Dashboard from "./Pages/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Overview from "./Pages/Overview";
import SavingsPlan from "./Pages/SavingsPlan";
import CreditScore from "./Pages/CreditScrore";
import CreditScoreForm from "./Pages/Credit";

function App() {
 
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Overview/>}></Route> */}
        <Route path="/" element={<Dashboard/>}></Route>
        {/* <Route path="/" element={<Chat/>}></Route> */}

        <Route path="/categories" element={<HomePage/>}></Route>
        <Route path="/savings" element={<SavingsPlan/>}></Route>
        <Route path="/creditscore" element={<CreditScore/>}></Route>


      </Routes>
    </Router>
  );
}

export default App;
