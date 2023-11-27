import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css'
import Layout from './components/Layout'
import Products from './pages/Products'


const App = () => {
  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} /> 
          <Route path="/login" element={<Login/>} />   
        </Route>
      </Routes>
      
  )
}

export default App
