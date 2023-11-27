import React from 'react'
import { useState } from 'react';
import { useAuth } from '../AuthProvider/AuthContext';

export const Register = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {register} = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    
    try {
      setName('');
      setEmail('');
      setPassword('');
      // Make a POST request to the register endpoint
      register(name, email, password)

      window.location.href = '/';
      
    } catch (error) {
      console.log('errr', error);
      setErrMsg(error.response.data.message);
      alert(error.response.data.message);
    }
  };

  
  return (

    <div>
      <form onSubmit={handleRegister}>
        <h2>Register</h2>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" value={name} onChange={(e) => setName(e.target.value)} required/>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register