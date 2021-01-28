import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.toggleCartHidden,
});

export const addItem = (item) => ({
  type: CartActionTypes.addItem,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: CartActionTypes.removeItemFromCart,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.removeItem,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionTypes.clearCart,
});
