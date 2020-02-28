import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeBuuton = ({ price }) => {
  const priceForStripe = price * 100;
  const pubKey = 'pk_test_skwluBcyeQxb5jjiKQCVRukv001DV9bRcB';

  const onToken = token => {
    alert(`Your Payment Was Processed Successfully!`);
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Your Favorite E-Commerce Site'
      billingAddress
      shippingAddress
      image='http://svgshare.com/i/CUz.svg'
      amount={priceForStripe}
      description={`Your total is $${price}`}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={pubKey}
    />
  );
};

export default StripeBuuton;
