import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from '../api/axios'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    // chamada de API
    try {
      const response = await axios.post('/auth/login', { email, password }, 
      {
        headers: {"Content-Type": 'application/json'},
      }
      );
      auth = await response.headers
      console.log(auth);
      setUser(userData);  
    } catch (error) {
      console.log(error)
    }
    
  };

  const register = async (name, email, password) => {
    // chamada de API
    try {
      const response = await axios.post('/auth/register', { name, email, password }, 
      {
        headers: {"Content-Type": 'application/json'},
      }
      );

      setUser(userData);  
    } catch (error) {
      console.log(error)
    }
    
  };

  const session = async () =>{
    try {
      const response = await axios.post('/auth/session', { email, password }, 
      {
        headers: {"Content-Type": 'application/json'},
      }
      );

    setUser(userData);  
    } catch (error) {
      console.log(error)
    }
    
  }

  const logout = () => {
    // Lógica de logout
    setUser(null);
  };

  useEffect(() => {

    session()

  },[])


  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
