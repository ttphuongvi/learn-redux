import listProduct from "../../data/listProduct";
import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_TO_CART,
} from "../constants/actionTypes";

const initState = {
  productsToCart: [], // khởi tạo danh sách sản phẩm trong giỏ hàng
  products: listProduct, // khởi tạo danh sách sản phẩm ngoài list
  amountProduct: 0, // khởi tạo số lượng sản phẩm trong giỏ hàng
};

const productToCartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      state.productsToCart.push(action.itemProduct);

      const indexItem = state.products.findIndex(
        (item) => item.id === action.itemProduct.id
      ); // tìm vị trí sản phẩm trong danh sách sản phẩm
      console.log("indexItem", indexItem);
      console.log("acart", state.productsToCart);
      console.log("list", state.products);
      return {
        productsToCart: state.productsToCart, // thêm sản phẩm vào giỏ hàng
        products: [
          ...state.products.slice(0, indexItem),
          {
            ...state.products[indexItem],
            isAddedCart: true, // đánh dấu sản phẩm đã được thêm vào giỏ hàng
          },
          ...state.products.slice(indexItem + 1),
        ],
        amountProduct: state.amountProduct + 1, // tăng số lượng sản phẩm trong giỏ hàng
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

        amountProduct: state.amountProduct - 1, // giảm số lượng sản phẩm trong giỏ hàng
      };
    default:
      return state;
  }
};

export default productToCartReducer;
