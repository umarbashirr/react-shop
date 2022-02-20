import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_SINGLE_PRODUCT_FAILURE,
  FETCH_SINGLE_PRODUCT_REQUEST,
  FETCH_SINGLE_PRODUCT_SUCCESS,
} from "./productTypes";

const initialState = {
  loading: false,
  products: [],
  product: {},
  singleProductLoading: false,
  singleProductError: false,
  error: false,
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case FETCH_PRODUCT_SUCCESS:
      return { ...state, loading: false, products: payload };
    case FETCH_PRODUCT_FAILURE:
      return { ...state, loading: false, products: [], error: true };
    case FETCH_SINGLE_PRODUCT_REQUEST:
      return { ...state, singleProductLoading: true };
    case FETCH_SINGLE_PRODUCT_SUCCESS:
      return { ...state, singleProductLoading: false, product: payload };
    case FETCH_SINGLE_PRODUCT_FAILURE:
      return {
        ...state,
        singleProductLoading: false,
        product: [],
        singleProductError: true,
      };
    default:
      return state;
  }
};

export { productReducer };
