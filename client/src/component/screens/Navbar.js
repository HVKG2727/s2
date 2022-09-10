import React, { useState, useContext } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Divider,
  MenuItem,
  Menu,
  Button,
  Drawer,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { styled } from "@mui/material/styles";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { Link } from "react-router-dom";

import { NavLink } from 'react-router-dom'
import { GlobalContext } from './../../GlobalContext';
import axios from 'axios'
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const pages = ["Menu", "Deals"];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const drawerWidth = 300;

function Navbar() {
  const data = useContext(GlobalContext)
  const [user] = data.authApi.userData
  const [anchorNav, setAnchorNav] = useState(null);

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  /* login and signup handler*/
  const handleOpenMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorNav(null);
  };

  const context = useContext(GlobalContext);

  const navigate = useNavigate();

  const [isLogged,setIsLogged] = context.authApi.isLogged;
  const [isAdmin,setIsAdmin] = context.authApi.isAdmin;
  const [isUser,setIsUser] = context.authApi.isUser;
  const [cart] = context.authApi.cart

  const logoutUser = async () => {
    if(window.confirm(`Are u sure to logout`)){
      await axios.get('/api/v1/auth/logout');
    localStorage.clear();
    if(isAdmin){
      setIsAdmin(false);
    }
    if(isUser){
      setIsUser(false);
    }
    setIsLogged(false);
    toast.success("logout success")
    navigate('/');
    window.location.reload();
    }else {
      toast.warning("logout terminated")
    }
  }

  
  /* common route */
  const commonRoute = () =>{
    return (
      <Box>
        <IconButton
          sx={{ fontSize: 25, mr: 0.5 }}
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenMenu}
          color="inherit"
        >
          <AccountCircleSharpIcon />
        </IconButton>
      <Menu id="menu-appbar"
              anchorEl={anchorNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorNav)}
              onClose={handleCloseMenu} sx={{
                display: "block",
              }}
            >
              {/* <MenuItem onClick={handleCloseMenu}>
                <Typography component={Link} to={`/orders`} color="black" sx={{ textDecoration: "none" }}>
                  Orders
                </Typography>
              </MenuItem> */}
              <MenuItem onClick={handleCloseMenu}>
                <Typography component={Link} to={`/profile`} color="black" sx={{ textDecoration: "none" }}>
                  Profile
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseMenu}>
                {
//                  isUser ? <NavLink style={{ textDecoration: "none",color:'black' }} to={`/user/dashboard`}>User dashboard</NavLink> : null
                }
                {
                  isAdmin ? <NavLink style={{ textDecoration: "none",color:'black' }} to={`/admin/dashboard`}>Admin dashboard</NavLink> : null
                }

              </MenuItem>
              <MenuItem>
              {
                 isAdmin ? <NavLink to={`/admin/allOrders`} style={{textDecoration: 'none', color: 'black'}} >OrdersList</NavLink> : <NavLink to={`/orders`} style={{textDecoration: 'none', color: 'black'}}>Orders</NavLink>
              }
              </MenuItem>
              <Divider/>
              <MenuItem onClick={handleCloseMenu}>
                <Typography onClick={logoutUser} color="black" border='2px solid black' backgroundColor='goldenrod' borderRadius='5px' padding='5px' sx={{ textDecoration: "none" }}>
                  Logout
                </Typography>
              </MenuItem>

      </Menu>
      </Box>
    )
  }

  return (
    
    <React.Fragment>
      <AppBar position="sticky" sx={{ backgroundColor: '#333333' }}>
        <Toolbar>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{flexGrow: 1,display: "flex",justifyContent: { xs: "center", md: "flex-start" }}}>
            <Typography component={Link} to={`/`} variant="h6" sx={{ textDecoration: "none", color: "white" }}>
            {isAdmin ? "Admin Dashboard" : "P@V"}
            </Typography>

            
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1}}>
            <Button component={Link} to={`/Menu`} color="inherit" sx={{ m: 2 }}>
              Menu
            </Button>
            {/* <Button component={Link} to={`/Deals`} color="inherit" sx={{ m: 2 }}>
              Deals
            </Button>   */}
          </Box>

          <Box>
            <IconButton
              sx={{ fontSize: 25, mr: 0.5 }}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenMenu}
              color="inherit"
            >
              {
                isLogged ? (<Avatar src={user.image.url} sx={{ width: 45, height: 45 }} alt="P"/>) :
                            (<Avatar aria-controls="menu-appbar" onClick={handleOpenMenu}/>)
              }
            </IconButton>
            <Menu id="menu-appbar"
              anchorEl={anchorNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorNav)}
              onClose={handleCloseMenu} sx={{
                display: "block",
              }}
            >
              <MenuItem onClick={handleCloseMenu}>
                <Typography component={Link} to={`/login`} color="black" sx={{ textDecoration: "none" }}>
                  Login
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseMenu}>
                <Typography component={Link} to={`/register`} color="black" sx={{ textDecoration: "none" }}>
                  Register
                </Typography>
              </MenuItem>
              {
          isLogged ? commonRoute() : (
            <Menu>
              <MenuItem>
                <NavLink to={'/login'}>Login</NavLink>
              </MenuItem> 

              <MenuItem>
                <NavLink to={'/register'}>Register</NavLink>
              </MenuItem> 
            </Menu>
          )
        }

            </Menu>
          </Box>

          <Divider orientation="vertical" variant="middle" flexItem sx={{ bgcolor: "secondary" }}/>

          <Box>
            
            {
              isAdmin ? null : (
                <IconButton aria-label="cart">
                <NavLink to={'/product/cart'}>
        <Badge badgeContent={cart.length > 0 ? cart.length : null} color="secondary">
          <ShoppingCartIcon />
        </Badge>
        </NavLink>
      </IconButton>
              )
            }
          </Box>
         
          

        </Toolbar>
      </AppBar>

      {/* Drawer component */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="temporary"
        anchor="left"
        onClose={() => {
          handleDrawerClose();
        }}
        open={open}
      >
        <DrawerHeader>
          <Typography sx={{ flexGrow: 1 }}>P@V</Typography>
          <IconButton onClick={handleDrawerClose}>
            <CloseSharpIcon />
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List>
          {pages.map((link, index) => {
            return (
              <ListItem button component={Link} to={`/${link}`} key={index}>
                <ListItemText primary={link} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </React.Fragment>
  );
}

export default Navbar;
