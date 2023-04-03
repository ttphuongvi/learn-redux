import React, { useEffect } from "react";
import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import { menuRoutes } from "../routesApp/menuRoutes";
import PropTypes from "prop-types";

function MenuAppBar({ onRemoveProductToCart, listProductCart, amountProduct }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container alignItems={"center"}>
          {menuRoutes.map((item) => (
            <Grid item key={item.name}>
              <Button variant="h6" component={NavLink} to={item.path}>
                {item.name}
              </Button>
            </Grid>
          ))}
          <Grid item xs>
            <Cart
              onRemoveProductToCart={onRemoveProductToCart}
              listProductCart={listProductCart}
              amountProduct={amountProduct}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

MenuAppBar.propTypes = {
  onRemoveProductToCart: PropTypes.func,
  listProductCart: PropTypes.array,
  amountProduct: PropTypes.number,
};

export default MenuAppBar;
