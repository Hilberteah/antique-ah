import React, { Component } from 'react';
import Product from './product';
import Title from './Title';
import {ProductConsumer} from '../context'


export default class ProductList extends Component {
    constructor() {
        super()
        

    }
    
    
    render() {
        return (
            
            <React.Fragment>
                <div className = 'page-container'>
                    <div className = 'container'>
                        <div className='row'>
                            <ProductConsumer>
                                {value=>{
                                    return value.products.map( product => {
                                        return <Product  key={product.id} product={product} h/>
                                    })
                                }}
                            </ProductConsumer>
                        </div>  
                    </div>

                </div>
            </React.Fragment>
            
            // <Product />
            
        )
    }
}

