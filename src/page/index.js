import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import MenuAppBar from "../components/MenuAppBar";
import { useDispatch, useSelector } from "react-redux";
import { removeProductToCart } from "../store/actions/updateProductCart";

function RootPage({ content }) {
  const listProductCart = useSelector((state) => state.cart.productsToCart); // danh sách sản phẩm trong giỏ hàng

  const dispatch = useDispatch(); // khởi tạo dispatch

  const handleRemoveProductToCart = (item) => {
    dispatch(removeProductToCart(item));
  }; // hàm xóa sản phẩm khỏi giỏ hàng
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MenuAppBar
        onRemoveProductToCart={handleRemoveProductToCart}
        listProductCart={listProductCart}
      />
      <Box p={2}>{content}</Box>
    </Box>
  );
}

RootPage.propTypes = {
  content: PropTypes.node,
};

export default RootPage;
