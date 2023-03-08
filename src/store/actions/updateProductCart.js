import { ADD_PRODUCT_TO_CART } from "../constants/actionTypes";

const addProductToCart = (item) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    itemProduct: item,
  };
};

export { addProductToCart };
