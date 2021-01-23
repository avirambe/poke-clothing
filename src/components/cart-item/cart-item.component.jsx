import React from 'react';
import {
  CartItemContainer,
  ItemImageContainer,
  ItemDetailsContainer,
  ItemNameContainer,
} from './cart-item.styles';

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => (
  <CartItemContainer>
    <ItemImageContainer src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <ItemNameContainer>{name}</ItemNameContainer>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
