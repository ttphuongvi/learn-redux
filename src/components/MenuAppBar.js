import React from "react";
import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import { menuRoutes } from "../routesApp/menuRoutes";

function MenuAppBar({ onRemoveProductToCart, listProductCart }) {
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
              amountProduct={listProductCart.length}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default MenuAppBar;
