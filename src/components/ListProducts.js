import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

const CardStyles = styled(Card)(({ theme }) => ({
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px",
  transition: "all .2s ease",
  position: "relative",
  overflow: "hidden",

  [theme.breakpoints.up("md")]: {
    "& .overlay": {
      transition: "opacity .2s ease",
      opacity: 0,
    },
    "&:hover": {
      cursor: "pointer",
      boxShadow: "rgba(0, 0, 0, 0.14) 0px 3px 8px",
      transform: "translateY(-4px)",
    },
  },
}));

export default function ListProducts({ listProduct, handleAddProductToCart }) {
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {listProduct.map((item) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.name}>
            <CardStyles variant="outlined">
              <CardMedia
                component="img"
                height="194"
                image={item.image}
                alt="Paella dish"
                sx={{ objectFit: "contain" }}
              />
              <CardContent>
                <Grid container justifyContent={"space-between"}>
                  <Grid item>
                    <Typography align="left" sx={{ fontWeight: "bold" }}>
                      {item.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      color="error"
                      align="left"
                      sx={{ fontWeight: "bold" }}
                    >
                      {item.price} $
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <Box display={"flex"} justifyContent="center" pb={2}>
                <Button
                  variant="outlined"
                  sx={{ borderRadius: "25px", textTransform: "none" }}
                  onClick={() => handleAddProductToCart(item)}
                >
                  Thêm vào giỏ hàng
                </Button>
              </Box>
            </CardStyles>
          </Grid>
        );
      })}
    </Grid>
  );
}

ListProducts.propTypes = {
  listProduct: PropTypes.array, // danh sách sản phẩm
  handleAddProductToCart: PropTypes.func, // hàm thêm sản phẩm vào giỏ hàng
};
