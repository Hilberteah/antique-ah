import React from 'react'
import{Link} from'react-router-dom'
import PayPalButton from './payPalbtn'
import axios from "axios";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";

import "react-toastify/dist/ReactToastify.css";

export default function CartTotals({value,history}) {
    const{cartSubtotal,cartTax,cartTotal,clearCart}=value
    async function handleToken(token, addresses) {
        const response = await axios.post(
          "https://ry7v05l6on.sse.codesandbox.io/checkout",
          { token, product }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
          toast("Success! Check email for details", { type: "success" });
        } else {
          toast("Something went wrong", { type: "error" });
        }
        clearCart()
      }
    
    return(
        <div>
            <div className="cart-container">
                <div className='all'>
                <div className="cart-row">
                    <Link to='/'>
                        <button className='clear' onClick={()=>clearCart()}>Clear Cart</button>
                    </Link>
                    <div className='data-cart'>
                      {/* <h5><span> </span>Subtotal:  ${cartSubtotal}</h5> */}
                      {/* <h5><span> </span>Tax: ${cartTax}</h5> */}
                      <h5><span> </span>Total: ${cartTotal}</h5>
                      <div className='checkout'>
                      <StripeCheckout
                        stripeKey="pk_test_Sq2fwiJxMUoP5woF3nx9bUPt00gnXfnLDU"
                        token={handleToken}
                        amount={cartTotal * 100}
                        billingAddress
                        shippingAddress
                      />
                      </div>
                    </div>
                    </div>
                    {/* <PayPalButton total={cartTotal} clearCart={clearCart} history={history} /> */}
                    

                    
                </div>
            </div>
        </div>
    )
}