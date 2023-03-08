import React from "react";
import PropTypes from "prop-types";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Box, IconButton } from "@mui/material";
import { useSelector } from "react-redux";

function Cart(props) {
  const amountProduct = useSelector(
    (state) => state.cart.productsToCart.length
  ); // số lượng sản phẩm trong giỏ hàng

  const listProductCart = useSelector((state) => state.cart.productsToCart); // danh sách sản phẩm trong giỏ hàng

  return (
    <Box sx={{ textAlign: "right", padding: 2 }}>
      <IconButton aria-label="cart">
        <Badge badgeContent={amountProduct} color="secondary">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </IconButton>
    </Box>
  );
}

Cart.propTypes = {};

export default Cart;
