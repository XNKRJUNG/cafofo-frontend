import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../../features/auth/authSlice"

import { styled } from "@mui/material/styles"
import { Container, Typography, Menu, MenuItem, IconButton, AppBar, Toolbar, Button } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import logo from "../../assets/logo.png"

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "100%"
})

const NavSection = styled("div")({
  display: "flex",
  alignItems: "center"
})

const Logo = styled("img")({
  maxWidth: "180px",
  height: "40px"
})

const StyledButton = styled(Button)({
  color: "black",
  textTransform: "capitalize",
  "&:hover": {
    color: "grey"
  }
})

const StyledAppBar = styled(AppBar)({
  backgroundColor: "white",
  color: "black",
  boxShadow: "none" // Updated to remove elevation shadow
})

export default function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { userEmail, isLoggedIn, role , userId} = useSelector(state => state.auth)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  console.log("login user id: "+ userId);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    handleClose()
    dispatch(logout())
    sessionStorage.clear()
    navigate("/login")
  }

  // Create a function to render menu items based on role
  const renderMenuItems = () => {
    let items = []

    if (role === "CUSTOMER") {
      items = [
        <MenuItem key="favorites" onClick={() => navigate("/users/favorites")}>
          View Favorite Properties
        </MenuItem>,
        <MenuItem key="offer-list" onClick={() => navigate("/users/view-offer-list")}>
          View Offer List
        </MenuItem>,
        <MenuItem key="edit-profile">Edit Profile</MenuItem>
      ]
    }

    items.push(
      <MenuItem key="logout" onClick={handleLogout}>
        Logout
      </MenuItem>
    )

    return items
  }

  return (
    <Container>
      <StyledAppBar position="static">
        <StyledToolbar>
          <NavSection>
            {/* Conditional rendering based on role */}
            {role !== "ADMIN" && role !== "OWNER" && (
              <>
                {/* <StyledButton onClick={() => navigate("/buy")}>Buy</StyledButton>
                <StyledButton onClick={() => navigate("/rent")}>Rent</StyledButton> */}

                <StyledButton onClick={() => navigate("/buy/FOR_SALE")}>Buy</StyledButton>
                <StyledButton onClick={() => navigate("/rent/FOR_RENT")}>Rent</StyledButton>
              </>
            )}
          </NavSection>
          <Logo src={logo} alt="Logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }} />
          <NavSection>
            {isLoggedIn ? (
              <>
                <Typography variant="subtitle1" component="div" sx={{ paddingLeft: 1, cursor: "pointer" }} onClick={handleMenu}>
                  {userEmail}
                </Typography>
                <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
                  <ExpandMoreIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  {renderMenuItems()}
                </Menu>
              </>
            ) : (
              <>
                <StyledButton onClick={() => navigate("/login")}>Log In</StyledButton>
                <StyledButton onClick={() => navigate("/register")}>Register</StyledButton>
              </>
            )}
          </NavSection>
        </StyledToolbar>
      </StyledAppBar>
    </Container>
  )
}
