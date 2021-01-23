import React from 'react';
import { connect } from 'react-redux';
import {
  removeItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';
import {
  CheckoutItemContainer,
  CheckoutItemImageContainer,
  CheckoutItemLabelContainer,
  QuantityLabelContainer,
  RemoveButtonContainer,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer>
        <img alt='item' src={imageUrl} />
      </CheckoutItemImageContainer>
      <CheckoutItemLabelContainer>{name}</CheckoutItemLabelContainer>
      <QuantityLabelContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityLabelContainer>
      <CheckoutItemLabelContainer>{price}</CheckoutItemLabelContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDisptachToprops = (dispatch) => ({
  clearItem: (item) => dispatch(removeItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDisptachToprops)(CheckoutItem);
