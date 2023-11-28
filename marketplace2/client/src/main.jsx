import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './AuthProvider/AuthContext';


// Envolva a renderização em ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderize o aplicativo dentro do BrowserRouter e AuthProvider
root.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);