import React from 'react';

import CustomButotn from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButotn>GO TO CHECKOUT</CustomButotn>
  </div>
)

export default CartDropdown;