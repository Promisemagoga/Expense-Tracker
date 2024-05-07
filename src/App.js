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

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Overview/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/categories" element={<HomePage/>}></Route>
        <Route path="/savings" element={<SavingsPlan/>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
