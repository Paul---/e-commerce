import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/CustomButton.component';
import CartItem from '../cart-item/CartItem.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => {
  return { cartItems };
};

export default connect(mapStateToProps)(CartDropdown);
