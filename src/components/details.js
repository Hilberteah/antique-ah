import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return(
              <div className ='detail-container'>
                  <div className='title-row'>
                      <div className='column-title'>
                         <h1>{title}</h1>
                      </div>
                  </div>

                <div className='data-row'>
                    <div className='img-column'>
                        <img src={img} alt='product'/>
                    </div>
                    <div className='price-column'>
                        <h4>${price}</h4>
                    </div>
                    <div className='text-column'>
                        <p className='info-text'>{info}</p>

                    </div>
                    <div className='btn-column'>
                    <div>
                        <div className='btns'>
                            <div className='back-to-shop'>
                                <Link to='/' ><button>Back to Shop</button></Link>
                            </div>
                            <div className='cart-add'>
                                <button disabled={inCart?true:false} onClick={()=>{
                                    value.addToCart(id)
                                    value.openModal(id)
                                }} >{inCart?'In Cart':'Add to Cart'}</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                

              </div>
          )
        }}
      </ProductConsumer>
    );
  }
}
