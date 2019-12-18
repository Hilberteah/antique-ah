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
      }
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
                    {/* <PayPalButton total={cartTotal} clearCart={clearCart} history={history} /> */}
                    <StripeCheckout
                        stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
                        token={handleToken}
                        amount={cartTotal * 100}
                        billingAddress
                        shippingAddress
                    />
                    

                    
                </div>
            </div>
        </div>
    )
}