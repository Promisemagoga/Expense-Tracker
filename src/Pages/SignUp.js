import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email, password }));
      alert('Registration successful!');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div>
      <form className='registerForm' onSubmit={handleRegister}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '30px' }}>
          <img src={require("../img/logIn.png")} alt="Login" />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '15px', marginBottom: '30px' }}>
            <h1 style={{ fontWeight: 'bold', color: '#135D66', fontSize: '30px' }}>Sign Up</h1>
            <p style={{ color: 'gray' }}>
              Already have an account? <Link to='/signIn' style={{ fontWeight: 'bold', color: '#135D66', textDecoration: 'none' }}>Sign In</Link>
            </p>
          </div>
        </div>
        <label>
          Email
          <br />
          <br />
          <input type='email' value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Password
          <br />
          <br />
          <div className='passwordCont'>
            <input type={showPassword ? 'text' : 'password'} value={password} onChange={(event) => setPassword(event.target.value)}
            />
            <IconButton type='button' onClick={handlePasswordVisibility} className='iconButton'>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </div>
        </label>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
