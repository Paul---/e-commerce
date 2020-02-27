import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/CheckoutItem.component';
import CustomButton from '../../components/custom-button/CustomButton.component';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';
import StripeCheckoutButton from '../../components/stripe-button/StripeButton.component'
import StripeCheckout from 'react-stripe-checkout';

const CheckOutPage = ({ cartItems, total }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='update'>
        <h3 className='message'>
          Checkout Functionality Coming Soon. I will be adding Stripe Payment
          processing in a couple of days.
        </h3>
      </div>
      <div className='paynow-btn'>
        <CustomButton>PAY NOW</CustomButton>
      </div>
      <div className='total'>
        <span>TOTAL : $ {total}</span>
      </div>
      <StripeButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckOutPage);
