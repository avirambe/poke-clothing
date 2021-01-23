import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-checkout-button/stripe-checkout-button.component';
import {
  CheckoutContainer,
  CheckoutHeaderContainer,
  CheckoutHeaderBlockContainer,
  CheckoutTotalContainer,
  CheckoutTestWarningContainer,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutContainer>
    CHECKOUT PAGE
    <CheckoutHeaderContainer>
      <CheckoutHeaderBlockContainer>
        <span>Product</span>
      </CheckoutHeaderBlockContainer>
      <CheckoutHeaderBlockContainer>
        <span>Description</span>
      </CheckoutHeaderBlockContainer>
      <CheckoutHeaderBlockContainer>
        <span>Quantity</span>
      </CheckoutHeaderBlockContainer>
      <CheckoutHeaderBlockContainer>
        <span>Price</span>
      </CheckoutHeaderBlockContainer>
      <CheckoutHeaderBlockContainer>
        <span>Remove</span>
      </CheckoutHeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <CheckoutTotalContainer>
      <span>TOTAL: ${total}</span>
    </CheckoutTotalContainer>
    <CheckoutTestWarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
    </CheckoutTestWarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
