import React from 'react'
import CartItem from './cartItem'


export default function CartList({value}) {
    const{cart}=value
    return(
        <div className='list-container'>
           {cart.map(item=>{
               return <CartItem key={item.id} item={item} value={value}/>
           })}

           
        </div>

        
    )
}