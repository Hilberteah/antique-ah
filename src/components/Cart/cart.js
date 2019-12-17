import React, { Component } from 'react'
import CartColumns from  './CartColumns.js'
import EmptyCart from  './empty-cart.js'
import {ProductConsumer} from  '../../context'
import CartList from  './cart-list.js'
import CartTotals from './cartTotals'



export default class Cart extends Component {
    render() {
        return (
         <section>
            <ProductConsumer>
                {value =>{
                    const {cart}= value;
                    if(cart.length>0){
                        return(
                            <React.Fragment>
                             <h1>Your Cart:</h1>
                             <CartColumns/>
                             <CartList value={value}/>
                             <CartTotals value={value}/>
                            </React.Fragment>

                        )
                    }else{
                        return(<EmptyCart/>)
                    }
                }}
                
             </ProductConsumer>
         </section>
        )
    }
}