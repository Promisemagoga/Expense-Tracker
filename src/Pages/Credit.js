import React, { useState } from 'react';
import axios from 'axios';
const CreditScoreForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [creditScore, setCreditScore] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make an API request to retrieve the credit score
      const response = await axios.get('https://apisandbox.openbankproject.com/oauth/initiate', {
        params: {
          fullName,
          email,
        },
      });
      // Update the credit score state
      setCreditScore(response.data.creditScore);
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Get Credit Score</button>
      <br />
      {creditScore && <p>Your Credit Score: {creditScore}</p>}
    </form>
  );
};
export default CreditScoreForm;