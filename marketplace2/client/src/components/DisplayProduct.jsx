import './DisplayProduct.css'
import React from "react";
class DisplayProduct extends React.Component {
  // Renderiza o componente
  render() {
    var priceWhole = this.props.price.split(".")[0];
    var priceFraction = this.props.price.split(".")[1];
    
    return(
      <div id='card-container'>
         <div id='image-container'>
            <img id='product-image' src={this.props.productImage}/>
         </div>
         <div id='description-container'>
            <span class="product-name">{this.props.productName}</span>
            <div class="price-row">
                <span class="price-symbol">{this.props.priceSymbol}</span>
                <span class="price-whole">{priceWhole}</span>
                <span class="price-fraction">{priceFraction}</span>
            </div>
         </div>
      </div>
    );
  }
}
export default DisplayProduct;