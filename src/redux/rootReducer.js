import { combineReducers } from "redux";
import { productReducer } from "./product/productReducer";

const reducers = combineReducers({
  allproducts: productReducer,
});

export default reducers;
