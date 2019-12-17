import React, { Component } from 'react';
import {productConsumer, ProductConsumer} from '../context';
import styled from 'styled-components';
import {Link} from 'react-router-dom';



export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {modalOpen,closeModal}=value;
                    const{img,title,price}=value.modalProduct;
                    if(!modalOpen){
                        return null
                    }
                    else {
                        return (
                        <ModalContainer >
                        <div className='modal-container'>
                            <div className='modal-row'>
                                <div className='modal-column' id='modal'>
                                    <div className='modal-title'>
                                        <h1>Item added to cart</h1>
                                    </div>
                                    <img className='img-fluid' src={img}></img>
                                    <div className ='modal-data'>
                                        <h5>{title}</h5>
                                        <h5>price : $ {price}</h5>
                                    </div>
                                    
                                    <div className='modal-btns'>
                                        <div className='back-to-shop'>
                                            <Link to='/'>
                                                <button onClick={()=>closeModal()}>Store</button>
                                            </Link>
                                        </div>
                                        <div className='to-cart'>
                                            <Link to='/cart'>
                                                <button onClick={()=>closeModal()}>Cart</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        </ModalContainer>)
                        
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content: center;
#modal{
    background:white;
}

`;