import React from "react";
class Navbar extends React.Component {
  // Renderiza o componente
  render() {
    return(
      <div className="App">
      <header className="App-header">
        <h1>Marketplace</h1>
      </header>

   <nav>
        <div className='start'> 
          <a href="/">Inicio</a>
          <a href="/products">Produtos</a>
          <a href="/register-products">Registo de Produtos</a>
          <a href="/contact">Contacto</a>
        </div>
        <div className='login'>
          <a href="/login">Login</a>
          <a href="/register">Registo</a>
        </div>
        <div className='user'>
          <a href="/userProfile">Perfil do Usuario</a>
        </div>
      </nav>

    </div>
    );
  }
}
export default Navbar;