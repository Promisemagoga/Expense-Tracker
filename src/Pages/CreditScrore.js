import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideNav from "../Components/SideNav";
import { Accordion, AccordionDetails, AccordionSummary, Box, LinearProgress, Rating, Typography, useTheme } from "@mui/material";
import { ExpandMore, ThumbUp } from "@mui/icons-material";
import SearchBar from "../Components/SearchBar";

function CreditScore() {
  const [dontHaveScore, setDontHaveScore] = useState(false);
  const [haveScore, setHaveScore] = useState(false);
  const [inputScore, setInputScore] = useState("");
  const [savedScore, setSavedScore] = useState("");
  const [creditStatus, setCreditStatus] = useState("");
  const [creditMessage, setCreditMessage] = useState("");
  const [creditAdvice, setCreditAdvice] = useState([]);
  const [creditRating, setCreditRating] = useState(0)
  const [showCreditQuestion, setShowCreditQuestion] = useState(true)


  const theme = useTheme()

  useEffect(() => {
    const storedScores = localStorage.getItem("Scores");

    if (storedScores !== null && !isNaN(storedScores)) {
      const creditscore = parseInt(storedScores, 10);
      setSavedScore(creditscore)
      setShowCreditQuestion(false)
      console.log(creditscore);
      if (creditscore < 300) {
        setCreditStatus("No Credit");
        setCreditRating(0)
      } else if (creditscore >= 300 && creditscore <= 579) {
        setCreditStatus("Poor");
        setCreditMessage("This indicates a higher credit risk. You are likely to have difficulty securing loans and may face very high interest rates and unfavourable terms if you are approved");
        setCreditAdvice([
          "Use reminders or automatic payments to ensure bills are paid on time",
          "Prioritize paying off any high-interest debts and accounts in collections",
          "Develop a strict budget to manage expenses and avoid additional dets.",
          "Avoid major purchases until your credit score improves",
          "Seek advice from a certified credit counselor to create a recovery plan.",
        ])
        setCreditRating(1)
      } else if (creditscore >= 580 && creditscore <= 699) {
        setCreditStatus("Fair");
        setCreditMessage("This is considered average or below average. You may face higher interest rates and less faorable loan terms");
        setCreditAdvice([
          "Focus on paying off any past due accounts and setting up payment plans if necessary.",
          "Try to pay more than the minimum payment on credit cards to reduce debt faster.",
          "Hold off on taking out new loans or credit cards until your score improves.",
          "Consider working with a credit counselor to develop a debt management plan",

        ])

        setCreditRating(2)
      } else if (creditscore >= 670 && creditscore <= 739) {
        setCreditStatus("Good");
        setCreditMessage("This indicates a good credit risk. You may be viewed as a favourable individual and be offered relatively good interest rates and terms. ");
        setCreditAdvice([
          "Continue paying all bills on time to avoid late payments that can harm your score",
          "Work on paying down existing debts to lower your credit utilization ratio",
          "Length of credit history impacts your score, so keep older accounts open and active",
          "Be cautious about applying for new credit unless necessary.",
          "Regularly check credit reports for errors and address them promptly.",
        ])
        setCreditRating(3)
      } else if (creditscore >= 740 && creditscore <= 799) {
        setCreditStatus("Very Good");
        setCreditMessage("You are seen as very dependable. You often qualify for very competitive interest rates and loan terms. ");
        setCreditAdvice([
          "Continue paying all bills on time to avoid late payments that can harm your score",
          "Work on paying down existing debts to lower your credit utilization ratio",
          "Regularly check credit reports for errors and address them promptly.",
        ])
        setCreditRating(4)
      } else if (creditscore >= 800 && creditscore <= 850) {
        setCreditStatus("Excellent");
        setCreditMessage("You are considered as a highly reliable individual. You are likely to recieve the best interest rates and terms on loans and credit cards");
        setCreditAdvice([
          "Ensure that all bills are paid on time",
          "Keep credit card balances low, ideally below 30% of your credit limit.",
          "Check your credit reports annually from all three major bureaus (Experian, Equifax, TransUnion) to ensure accuracy and dispute any errors.",
          "Avoid applying for new credit frequently as hard inquiries can slightly lower your score",

        ])
        setCreditRating(5)
      } else {
        setCreditStatus("No Credit Score Available");
      }
    } else {
      setCreditStatus("No Credit Score Available");
    }


  }, []);

  function haveNoCreditScore() {
    setDontHaveScore(true);
    setHaveScore(false);
  }

  function haveCreditScore() {
    setHaveScore(true);
    setDontHaveScore(false);
  }

  function saveCreditScore() {
    localStorage.setItem("Scores", inputScore);
    setSavedScore(inputScore);
  }

  const ranges = [
    { label: 'Very Poor', min: 300, max: 579, color: theme.palette.error.main },
    { label: 'fair', min: 580, max: 699, color: theme.palette.warning.main },
    { label: 'Good', min: 700, max: 739, color: theme.palette.success.light },
    { label: 'Very Good', min: 740, max: 799, color: theme.palette.success.main },
    { label: 'Excellent', min: 800, max: 850, color: theme.palette.success.dark },


  ]

  const currentRange = ranges.find(range => savedScore >= range.min && savedScore <= range.max)
  console.log(currentRange);
  const progress = ((savedScore - 300) / 550) * 100;
  // const progress = ((savedScore - 300) / 550) * 100;

  console.log(progress);
  return (
    <main className="dashBoard">
      <SideNav />
      <div className="mainContent">
        <div className="headBar">
          <h1>CreditScore</h1>
          <SearchBar />
        </div>
        {/* <div className="header">
          <h1>Credit Score</h1>
        </div> */}
        <div className="bodyContainer">
          {showCreditQuestion && (
            <div className="creditQcont">
              <div style={{ display: "flex", flexDirection: "column", width: "40%", alignItems: "center" }}>
                <li className="creditQuestions">
                  Do you know your credit score
                </li>
                <div className="answerBtns">
                  <button onClick={haveCreditScore} className="yes">YES</button>
                  <button onClick={haveNoCreditScore} className="no">NO</button>
                </div>
              </div>
            </div>
          )}

          {dontHaveScore && (
            <ol>
              <li className="creditQuestions">
                Here are the sites you can check your credit score and credit
                records for free
              </li>
              <ul>
                <li className="bereue">
                  <Link to="" className="bereue">ClearScore</Link>
                </li>
                <li className="bereue">
                  <Link to="" className="bereue">Experian</Link>
                </li>
                <li className="bereue">
                  <Link to="" className="bereue">MyCreditCheck</Link>
                </li>
                <li className="bereue">
                  <Link to="" className="bereue">Kudough</Link>
                </li>
                <li className="bereue">
                  <Link to="" className="bereue">Credit Bureau</Link>
                </li>
                <li>
                  <Link to="" className="bereue">TransUnion</Link>
                </li>
              </ul>
            </ol>
          )}

          {haveScore && (
            <div className="inputScore">
              <input
                placeholder="Enter Credit Score"
                value={inputScore}
                onChange={(event) => setInputScore(event.target.value)}
              />
              <button onClick={saveCreditScore}>Save</button>
            </div>
          )}
          <div className="header">
            <div className="headerOverlay">
              <Box sx={{ width: '80%', textAlign: 'center', padding: theme.spacing(2), marginBottom: "50px" }}>
                <Typography variant="h1" gutterBottom sx={{ color: '#135D66', marginBottom: "40px", fontSize: "25px", fontWeight: "bold" }}>
                  Credit Score:{savedScore}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  {ranges.map((range) => (
                    <Typography key={range.label} variant="body2" sx={{ color: "#E3FEF7" }}>
                      {range.label}
                    </Typography>
                  ))}
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={progress}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: theme.palette.grey[300],
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: currentRange ? currentRange.color : theme.palette.grey[500]
                    }
                  }}
                />
              </Box>
            </div>

          </div>
          <div className="creditReportContainer">
            <div className="creditReport">
              <h1 style={{ color: "#135D66" }}>{creditStatus}</h1>
              <p style={{ color: 'GrayText' }}>{creditMessage}</p>
              <Box align="left" mb={1} borderColor="transparent">
                <Rating value={creditRating} readOnly />
              </Box>
            </div>
            <img src={require("../img/781831.png")}/>
          </div>
          <div className="adviceContainer">
            <Box>
              <Typography variant="h3" sx={{ color: "#135D66", fontSize: "1.8rem", marginBottom: "10px" }}>Advice:</Typography>
              {creditAdvice.map((data, index) => (
                <ul key={index}>
                  <li style={{ color: 'GrayText', marginLeft: "20px" }}>{data}</li>
                </ul>
              ))}
            </Box>
            <img src={require("../../src/img/438506.png")} />



          </div>
        </div>
        <div className="FAQs">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ color: "#135D66", fontWeight: "bold" }}
            >
              What is a credit score?
            </AccordionSummary>
            <AccordionDetails className="accordionAnswers">
              A credit score is a numerical representation of an
              individual's creditworthiness, based on their credit history.
              It determines whether you are eligible to get a loan, car, or
              house on credit.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ color: "#135D66", fontWeight: "bold" }}

            >
              What is the purpose of having a clean credit score?
            </AccordionSummary>
            <AccordionDetails className="accordionAnswers">
              Credit scores are used by lenders, landlords, insurers, and
              even some employers to make decisions about loans, rental
              applications, insurance premiums, and job offers.
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel4-content"
              id="panel4-header"
              sx={{ color: "#135D66", fontWeight: "bold" }}

            >
              How are credit scores calculated?
            </AccordionSummary>
            <AccordionDetails className="accordionAnswers">
              Credit Scores are calculated based on factors such as:
              Payment history,
              Amounts owed,
              Length of credit history,
              Types of credit
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </main>
  );
}

export default CreditScore;
