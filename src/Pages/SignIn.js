import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const storedUser = JSON.parse(localStorage.getItem('user'))

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert('Login successful!')
    } else {
      alert('Invalid username or password')
    }
  }

  return (
    <div>
      <form className='registerForm'>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '30px' }}>
          <img src={require("../img/logIn.png")} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '15px', marginBottom: '30px' }}>
            <h1 style={{ fontWeight: 'bold', color: '#135D66', fontSize: '30px' }}>Sign In</h1>
            <p style={{ color: 'gray' }}>Do not have an account? <Link to='/signUp' style={{ fontWeight: 'bold', color: '#135D66', textDecoration: 'none' }}>Sign Up</Link></p>
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

        <button onClick={handleLogin}>Sign In</button>
      </form>
    </div>
  )
}

export default SignIn