import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_SINGLE_PRODUCT_FAILURE,
  FETCH_SINGLE_PRODUCT_REQUEST,
  FETCH_SINGLE_PRODUCT_SUCCESS,
} from "./productTypes";

const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST,
  };
};

const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: products,
  };
};

const fetchProductsFailure = () => {
  return {
    type: FETCH_PRODUCT_FAILURE,
  };
};

const fetchSingleProductsRequest = () => {
  return {
    type: FETCH_SINGLE_PRODUCT_REQUEST,
  };
};

const fetchSingleProductsSuccess = (product) => {
  return {
    type: FETCH_SINGLE_PRODUCT_SUCCESS,
    payload: product,
  };
};

const fetchSingleProductsFailure = () => {
  return {
    type: FETCH_SINGLE_PRODUCT_FAILURE,
  };
};

export {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchSingleProductsRequest,
  fetchSingleProductsSuccess,
  fetchSingleProductsFailure,
};
