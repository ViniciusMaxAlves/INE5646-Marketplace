import React from 'react'
import { useState, useEffect } from 'react';
import './RegisterProducts.css'
import DisplayProduct from '../components/DisplayProduct';
import axios from 'axios';

export const RegisterProducts = () => {
  const [file, setFile] = useState([]);
  const [fileName, setFileName] = useState("");
  const [image, setImage] = useState([]);
  const [price, setPrice] = useState(0);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [sale, setSale] = useState(false);
  const [exchange, setExchage] = useState(false);
  const [inputError, setInputError] = useState(null);


  function handlePriceOnChange(event) {
    
    setPrice(parseFloat(event.target.value));
    var value = event.target.value;
    var regex = /^(?:\d+|\d+,\d{2}|\d+\.\d{2})$/;
    var isValidated = regex.test(value);

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



  async function submitForm(event) {
    event.preventDefault();
    if (!sale && !exchange) {
      setInputError('Marcar se produto esta disponivel para venda e/ou troca!');
    } else {
      setInputError(null);
    }

    const data = {
      "name": productName,
      "description": productDescription,
      "price": parseFloat(price), 
      sale,
      exchange,
      image
    };
    await axios.post('http://localhost:5555/products/', {data} , {
      headers: { "Content-Type": 'application/json' },
    }
    )
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });;
  }

  function handleFileInput(event) {
    setFile(
      URL.createObjectURL(event.target.files[0])
    );

    setFileName(event.target.files[0].name)

    const formData = new FormData();
    formData.append('productImage', event.target.files[0],event.target.files[0].name);
    setImage(formData);
    console.log('handleFileInput working!')
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

        <div>
          <div>
            <div className='btn'>
              <label htmlFor="file" className='btn-label'>Select Image</label>
            </div>
            <label htmlFor="file" className='btn-label'>Select Image</label>
            <span>{fileName}</span>
            <input id="file" hidden type="file" onChange={handleFileInput} />
          </div>

          {file && <img className='product-image' src={file} />}
        </div>
        <button type="submit" onClick={submitForm}>Submit</button>
      </form>

    </div>
  )
}

export default RegisterProducts