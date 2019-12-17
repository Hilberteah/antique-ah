import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FortAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function CartList({item,value}) {
    const{id,title,img,price,total,count}= item;
    const {increment,decrement,removeItem} = value
    return(
           <div className="item-row" >
                <div className="item-column">
                   <img src={img} style={{width:'20rem',height:'20rem'}}className="item-img"/>
                </div>
                <div className="item-column">
                   {title}
                </div>
                <div className="item-column">
                   {price}
                </div>
                <div className="item-column">
                   <div className='quantity-btn'>
                       <button onClick={()=>decrement(id)}>-</button>
                   </div>
                        <div className='item-count'>{count}</div>
                    <div className='quantity-btn'>
                       <button onClick={()=>increment(id)}>+</button>
                    </div>    
                </div>
                <div className="item-column">
                   <div className='trash-icon' onClick={()=>removeItem(id)} style={{cursor:'pointer'}}><FontAwesomeIcon  icon="trash"/></div>
                </div>
              
                <div className="item-column">
                   {total}
                </div>
               
              
               </div>


           



        
    )
}