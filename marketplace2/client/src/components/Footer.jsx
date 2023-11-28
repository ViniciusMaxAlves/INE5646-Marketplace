import React from "react";
class Footer extends React.Component {
  // Renderiza o componente
  render() {
    return(
      <footer>
        <h4> Suporte </h4>
        <address>
        E-Mail: <a href="mailto:chiconico007@gmail.com">chiconico007@gmail.com</a>.<br/>
        Celular: +351914831714<br/>
        </address> 
      </footer>
    );
  }
}
export default Footer;