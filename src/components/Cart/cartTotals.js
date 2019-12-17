import React from 'react'
import{Link} from'react-router-dom'

export default function CartTotals({value}) {
    const{cartSubtotal,cartTax,cartTotal,clearCart}=value
    return(
        <div>
            <div className="cart-container">
                <div style={{paddingLeft:'30px',fontSize:'20px'}} className="cart-row">
                    <Link to='/'>
                        <button onClick={()=>clearCart()}>Clear Cart</button>
                    </Link>
                    <h5><span>Subtotal: </span>$ {cartSubtotal}</h5>
                    <h5><span>Tax: </span>$ {cartTax}</h5>
                    <h5><span>Total: </span>$ {cartTotal}</h5>
                </div>
            </div>
        </div>
    )
}