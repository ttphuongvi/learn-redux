import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../store/actions/updateProductCart";
import ListProducts from "../../components/ListProducts";

export default function ListProductsPage() {
  const listProduct = useSelector((state) => state.cart.products); // danh sách sản phẩm

  const dispatch = useDispatch(); // khởi tạo dispatch

  const handleAddProductToCart = (item) => {
    dispatch(addProductToCart(item));
  };
  return (
    <ListProducts
      listProduct={listProduct}
      handleAddProductToCart={handleAddProductToCart}
    />
  );
}
