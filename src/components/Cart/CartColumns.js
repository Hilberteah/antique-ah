import React from 'react'

export default function CartColumns() {
    return(
        <div className='container-cart'>
            <div className='row-cart'>
                <div className='column-cart'>
                    <p className='text-cart'>Products</p>
                </div>
                <div className='column-cart'>
                    <p className='text-cart'>Name</p>
                </div>
                <div className='column-cart'>
                    <p className='text-cart'>Price</p>
                </div>
                <div className='column-cart'>
                    <p className='text-cart'>Quantity</p>
                </div>
                <div className='column-cart'>
                    <p className='text-cart'>Remove</p>
                </div>
                <div className='column-cart'>
                    <p className='text-cart'>Total</p>
                </div>

            </div>

        </div>
    )
}