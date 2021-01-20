import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceInCents = price * 100;
  const publishableKey =
    'pk_test_51IBjD7BsyPSCSjTlpDjR8Ar2FiLyiFMDMSaRwINXGpez6qEXTbyUtGyq0FKtWL1NGIhChNYf3LKuoemYm2Zh9mJW00I2H3EFwM';
  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Poke-Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is$${price}`}
      amount={priceInCents}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
