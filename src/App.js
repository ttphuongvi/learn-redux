import "./App.css";
import { AppBar, Box, Button, Grid, Toolbar } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { NavLink, useRoutes } from "react-router-dom";
import { dataRoutes } from "./routesApp/dataRoutes";
import { menuRoutes } from "./routesApp/menuRoutes";
import Cart from "./page/ListProducts/Cart";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function App() {
  const content = useRoutes(dataRoutes);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid container alignItems={"center"}>
            {menuRoutes.map((item) => (
              <Grid item>
                <Button variant="h6" component={NavLink} to={item.path}>
                  {item.name}
                </Button>
              </Grid>
            ))}

            <Grid item xs>
              <Cart />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box p={2}> {content}</Box>
    </Box>
  );
}

export default App;
