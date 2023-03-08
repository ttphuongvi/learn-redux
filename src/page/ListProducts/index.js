import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import { addProductToCart } from "../../store/actions/updateProductCart";

export default function ListProducts() {
  const listProduct = useSelector((state) => state.cart.products); // danh sách sản phẩm

  const dispatch = useDispatch(); // khởi tạo dispatch

  const handleAddProductToCart = (item) => {
    dispatch(addProductToCart(item));
  };
  return (
    <>
      <Cart />
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {listProduct.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.name}>
              <Card variant="outlined">
                <CardMedia
                  component="img"
                  height="194"
                  image={item.image}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography align="left" sx={{ fontWeight: "bold" }}>
                    {item.name}
                  </Typography>
                  <Typography color="error" align="left">
                    {item.price} $
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    onClick={() => handleAddProductToCart(item)}
                  >
                    Thêm vào giỏ hàng
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
