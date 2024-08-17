import "./App.css";
import Dashboard from "./Pages/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SavingsPlan from "./Pages/SavingsPlan";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { useEffect, useState } from "react";
import CreditScore from "./Pages/CreditScrore"

function App() {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsAuth(user);
    } else {
      setIsAuth(false);
    }
  }, []);

  if (isAuth === null) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuth ? <Dashboard /> : <Navigate to="/signin" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/savings" element={isAuth ? <SavingsPlan /> : <Navigate to="/signin" />} />
        <Route path="/creditscore" element={isAuth ? <CreditScore /> : <Navigate to="/signin" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
