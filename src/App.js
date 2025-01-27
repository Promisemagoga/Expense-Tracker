import "./App.css";
import Dashboard from "./Pages/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SavingsPlan from "./Pages/SavingsPlan";
import CreditScore from "./Pages/CreditScrore"

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/savings" element={<SavingsPlan />} />
        <Route path="/creditscore" element={<CreditScore />} />
      </Routes>
    </Router>
  );
}

export default App;
