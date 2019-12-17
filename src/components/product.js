import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FortAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types'

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className="product-wrapper">
        <div className="cardy">
        <ProductConsumer>
          {(value)=>(          
          <div
            className="img-container"
            onClick={() => value.handleDetail(id)}
            >
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top"></img>
            </Link>
            <div className='btn-wrapper'>
              <button
                className="cartbtn"
                disabled={inCart ? true : false}
                onClick={() => {
                 value.addToCart(id);
                 value.openModal(id)
                }}
                >
                <div className='cart-icon'>
                  {inCart ? <p disabled>in cart</p> : <p className='cart-icon-1'><FontAwesomeIcon  icon="cart-plus"/></p>}
                </div>
              </button>
            </div>
            

          </div>)}







                </ProductConsumer>
          <div className="card-footer">
            <p className="footer-product-name">{title}</p>
            <h5>
                <span className='mr-1'>
                   ${price} 
                </span>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
// Product.propTypes = {

//     product:PropTypes.shape({
//     id:PropTypes.number,
//     img:PropTypes.string,
//     title:PropTypes.string,
//     price:propTypes.number,
//     inCart:PropTypes.bool

//   }).isRequired
// }