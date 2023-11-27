import React from "react";
class Navbar extends React.Component {
  render() {
    return(
      <div className="App">
      <header className="App-header">
        <h1>Marketplace</h1>
      </header>

   <nav>
        <div className='start'> 
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/contact">Contact</a>
        </div>
        <div className='login'>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </nav>

    </div>
    );
  }
}
export default Navbar;