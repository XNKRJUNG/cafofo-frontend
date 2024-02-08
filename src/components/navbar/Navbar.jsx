import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../../features/auth/authSlice"

import { styled } from "@mui/material/styles"
import { Container, Typography, Menu, MenuItem, IconButton } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
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
  maxWidth: "100%"
})

export default function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { userEmail, isLoggedIn } = useSelector(state => state.auth)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

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

  return (
    <Container>
      <StyledAppBar position="static" elevation={0}>
        <StyledToolbar>
          <NavSection>
            <StyledButton onClick={() => navigate("/buy")}>Buy</StyledButton>
            <StyledButton onClick={() => navigate("/rent")}>Rent</StyledButton>
            <StyledButton onClick={() => navigate("/sell")}>Sell</StyledButton>
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
                  <MenuItem onClick={() => navigate("/users/1/favroites")}>View Favorite Properties</MenuItem>
                  <MenuItem>View Offer List</MenuItem>
                  <MenuItem>Edit Profile</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
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
