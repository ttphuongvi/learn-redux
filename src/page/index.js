import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import MenuAppBar from "../components/MenuAppBar";
import { useDispatch, useSelector } from "react-redux";
import { removeProductToCart } from "../store/actions/updateProductCart";

function RootPage({ content }) {
  const listProductCart = useSelector((state) => state.cart.productsToCart); // danh sách sản phẩm trong giỏ hàng

  const amountProduct = useSelector((state) => state.cart.amountProduct); // số lượng sản phẩm trong giỏ hàng
  console.log("listProductCart", listProductCart);

  const dispatch = useDispatch(); // khởi tạo dispatch

  const handleRemoveProductToCart = (item) => {
    dispatch(removeProductToCart(item));
  }; // hàm xóa sản phẩm khỏi giỏ hàng
  console.log("listProductCart", listProductCart);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MenuAppBar
        onRemoveProductToCart={handleRemoveProductToCart}
        listProductCart={listProductCart}
        amountProduct={amountProduct}
      />
      <Box p={2}>{content}</Box>
    </Box>
  );
}

RootPage.propTypes = {
  content: PropTypes.node,
};

export default RootPage;
