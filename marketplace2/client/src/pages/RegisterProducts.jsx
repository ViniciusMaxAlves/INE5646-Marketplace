import React from 'react'
import { useState, useEffect } from 'react';
import './RegisterProducts.css'
import DisplayProduct from '../components/DisplayProduct';
export const RegisterProducts = () => {
  const [price, setPrice] = useState(0);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [sale, setSale] = useState(false);
  const [exchange, setExchage] = useState(false);
  const [inputError, setInputError] = useState(null);


  function handlePriceOnChange(event) {
    setPrice(event.target.value);
    var value = event.target.value;
    var regex = /^(\d+(?:,\d{1,2})?).*/;
    var isValidated =  regex.test(value);

    if (isValidated) {
      setInputError(null);
    } else {
      setInputError('Only numbers');
    }

  }
  function handleProductNameOnChange(event) {
    setProductName(event.target.value);
  }
  function handleProductDescriptionOnChange(event) {
    setProductDescription(event.target.value);
  }
  function handleSaleCheckboxOnChange(event) {
    setSale(!sale);
  }
  function handleExchangeCheckboxOnChange(event) {
    setExchage(!exchange);
  }



  function submitForm(event) {
    event.preventDefault();
    var data = { productName, productDescription, price, sale, exchange };
    console.log(data);
  }

  return (
    <div className="App">
      <h2>Bem-vindo ao Cadastro de Produtos</h2>
      <form>
        <label htmlFor="productName">Nome do produto</label>
        <input id="productName" type="text" onChange={handleProductNameOnChange} />
        <label htmlFor="productDescription">Descrição</label>
        <textarea id="productDescription" cols="40" rows="3" onChange={handleProductDescriptionOnChange} />
        <label htmlFor="productPrice">Preço</label>
        <input id="productPrice" type="number" placeholder='Preço' onChange={handlePriceOnChange} />
        {inputError && <div style={{ color: 'red' }}>{inputError}</div>}
        <div className="checkbox-container">
          <input type="checkbox" name="checkboxSale" id="sale" onClick={handleSaleCheckboxOnChange} />
          <label htmlFor="sale">Venda</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" name="checkboxTrade" id="exchange" onClick={handleExchangeCheckboxOnChange} />
          <label htmlFor="exchange">Troca</label>
        </div>
        <button type="submit" onClick={submitForm}>Submit</button>
      </form>

    </div>
  )
}

export default RegisterProducts