import React, { Component } from 'react';
import Product from './product';
import {ProductConsumer} from '../context'


export default class ProductList extends Component {
    constructor() {
        super()
        

    }
    
    
    render() {
        return (
            
            <React.Fragment>
                <div className = 'page-container'>
                    <div className = 'pl-container'>
                        <div className='pl-row'>
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

