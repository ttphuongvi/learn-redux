import listProduct from "../../data/listProduct";
import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_TO_CART,
} from "../constants/actionTypes";

const initState = {
  productsToCart: [], // khởi tạo danh sách sản phẩm trong giỏ hàng
  products: listProduct, // khởi tạo danh sách sản phẩm ngoài list
};

const productToCartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        productsToCart: [...state.productsToCart, action.itemProduct], // thêm sản phẩm vào giỏ hàng
        // products: state.products.filter(
        //   (item) => item.id !== action.itemProduct.id
        // ), // xóa sản phẩm khỏi danh sách sản phẩm
        products: state.products.map((item) => {
          if (item.id === action.itemProduct.id) {
            return {
              ...item,
              isAddedCart: true,
            };
          }
          return item;
        }), // xóa sản phẩm khỏi danh sách sản phẩm
      };
    case REMOVE_PRODUCT_TO_CART:
      return {
        productsToCart: state.productsToCart.filter(
          (item) => item.id !== action.itemProduct.id
        ), // xóa sản phẩm khỏi giỏ hàng
        products: state.products.map((item) => {
          if (item.id === action.itemProduct.id) {
            return {
              ...item,
              isAddedCart: false,
            };
          }
          return item;
        }), // xóa sản phẩm khỏi danh sách sản phẩm
      };
    default:
      return state;
  }
};

export default productToCartReducer;
