import React from 'react'
import axios from '../api/axios'
import { useState } from 'react';

export const Login = () => {
  
  const [name, setName]= useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const email = 'email@gmail.com';
      setName('');
      setPassword('');
      // Make a POST request to the login endpoint
      const response = await axios.post('/auth/login', { name, email, password }, 
      {
        headers: {"Content-Type": 'application/json'},
      }
      );

      window.location.href = '/';
      
    } catch (error) {
      console.log('errr', error);
      setErrMsg(error.response.data.message);
      alert(error.response.data.message);
    }
  };

  
  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" value={name} onChange={(e) => setName(e.target.value)} required/>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login