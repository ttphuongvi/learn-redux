import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_TO_CART,
} from "../constants/actionTypes";

// thêm sản phẩm vào giỏ hàng
const addProductToCart = (item) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    itemProduct: item,
  };
};

// xóa sản phẩm khỏi giỏ hàng
const removeProductToCart = (item) => {
  return {
    type: REMOVE_PRODUCT_TO_CART,
    itemProduct: item,
  };
};

export { addProductToCart, removeProductToCart };
