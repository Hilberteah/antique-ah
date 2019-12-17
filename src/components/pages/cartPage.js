import React, { Component } from 'react';
import Cart from '../Cart/cart';

export default class CartPage extends Component {
  render() {
    return (
      <div>
        <div className='carty'>
          <Cart/>
        </div>
      </div>
    );
  }
}
