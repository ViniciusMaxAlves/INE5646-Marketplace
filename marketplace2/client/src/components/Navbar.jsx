import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };
    
    return(
      <div className="App">
      <header className="App-header">
        <h1>Marketplace</h1>
      </header>

   <nav>
      {cookies.access_token ? (
      <><div className='start'>
          <Link to="/">Inicio</Link>
          <Link to="/products">Produtos</Link>
          <Link to="/register-products">Registo de Produtos</Link>
          <Link to="/contact">Contacto</Link>
        </div>
        <div className='user'>
          <Link to="/userProfile">Perfil do Usuario</Link>
        </div>
        <div className='logout'>
        <button onClick={logout}> Logout </button>
      </div></>
        ) : (
        <div className='login'>
          <Link to="/auth">Registo/Login</Link>
        </div>)}
        
      </nav>

    </div>
    );
  }

export default Navbar;