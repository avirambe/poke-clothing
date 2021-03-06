import CartActionTypes from './cart.types';
import { addItemToCart, removeItem } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.toggleCartHidden:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.addItem:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.removeItemFromCart:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case CartActionTypes.removeItem:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      };
    case CartActionTypes.clearCart:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
