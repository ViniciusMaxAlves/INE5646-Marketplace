import React, { createContext, useContext, useEffect, useState } from 'react';

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
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
