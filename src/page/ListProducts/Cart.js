import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Menu,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeProductToCart } from "../../store/actions/updateProductCart";
import CloseIcon from "@mui/icons-material/Close";

function Cart() {
  const amountProduct = useSelector(
    (state) => state.cart.productsToCart.length
  ); // số lượng sản phẩm trong giỏ hàng

  const listProductCart = useSelector((state) => state.cart.productsToCart); // danh sách sản phẩm trong giỏ hàng

  const dispatch = useDispatch(); // khởi tạo dispatch

  const handleRemoveProductToCart = (item) => {
    dispatch(removeProductToCart(item));
  }; // hàm xóa sản phẩm khỏi giỏ hàng

  // hàm hiển thị menu giỏ hàng
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ textAlign: "right", padding: 2 }}>
        <IconButton aria-label="cart" onClick={handleClick}>
          <Badge badgeContent={amountProduct} color="secondary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <List
          sx={{ width: "100%", minWidth: 400, bgcolor: "background.paper" }}
        >
          {listProductCart.length === 0 && (
            <Typography align="center">
              Chưa có sản phẩm nào trong giỏ hàng
            </Typography>
          )}

          {listProductCart.map((item, index) => {
            const labelId = `checkbox-list-label-${item.name}`;

            return (
              <ListItem
                key={item.id}
                secondaryAction={
                  <IconButton
                    color="error"
                    onClick={() => handleRemoveProductToCart(item)}
                    sx={{ borderRadius: "25px", textTransform: "none" }}
                  >
                    <CloseIcon />
                  </IconButton>
                }
                divider={index !== listProductCart.length - 1}
                disablePadding
              >
                <ListItemButton role={undefined} dense>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={item.image} />
                  </ListItemAvatar>
                  <ListItemText
                    id={labelId}
                    primary={
                      <>
                        <Typography>{item.name} $</Typography>
                        <Typography color="error">{item.price} $</Typography>
                      </>
                    }
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Menu>
    </>
  );
}

export default Cart;
