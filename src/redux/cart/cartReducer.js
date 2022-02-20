import { ADD_TO_CART } from "./cartTypes";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  const product = action.payload;
  switch (action.type) {
    case ADD_TO_CART:
      const inCart = state.cart.find((item) => item.id === product.id);
      if (inCart) {
        return state.cart.map((item) =>
          item.id === product.id ? { ...item, qty: state.item.qty + 1 } : item
        );
      } else {
        const product = action.payload;
        return {
          ...state,
          cart: [...state.cart, { ...product, qty: 1 }],
        };
      }

    default:
      return state;
  }
};

export default cartReducer;
