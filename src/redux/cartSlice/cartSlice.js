import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  subTotal: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        item => item.id === action.payload.id,
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
      } else {
        let tempProductItem = {...action.payload, cartQuantity: 1};
        state.cartItems.push(tempProductItem);
      }
    },

    removeFromCart(state, action) {
      state.cartItems.map(cartItem => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            item => item.id !== cartItem.id,
          );

          state.cartItems = nextCartItems;
        }
        return state;
      });
    },

    clearCart(state, action) {
      state.cartItems = [];
      state.cartTotalQuantity = 0;
    },
    addDuplicateCart() {
      const existingIndex = state.cartItems.findIndex(
        item => item.id === action.payload.id,
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
      }
    },
  },
});

export const {addToCart, removeFromCart, clearCart, getSubTotals} =
  cartSlice.actions;

export default cartSlice.reducer;
