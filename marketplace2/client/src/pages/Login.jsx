import React from 'react'
import axios from '../api/axios'
import { useState } from 'react';
import { useAuth } from '../AuthProvider/AuthContext';

export const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {

      setEmail('');
      setPassword('');
      // Make a POST request to the login endpoint
      login(email, password);

      window.location.href = '/';
      
    } catch (error) {
      alert('Password Incorreta');
      console.log('errr', error);
      setErrMsg(error.response.data.message);
      alert(error.response.data.message);
    }
  };

  
  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login