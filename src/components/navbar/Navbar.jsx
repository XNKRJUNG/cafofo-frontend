import * as React from "react"
import { useNavigate } from "react-router-dom"
import { styled } from "@mui/material/styles"
import { Container } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
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
  color: "black", // Default color
  textTransform: "capitalize", // Only capitalize the first letter
  "&:hover": {
    color: "grey" // Color on hover
  }
})

const StyledAppBar = styled(AppBar)({
  backgroundColor: "white", // Change the color of the navbar to white
  color: "black", // Set the default color of the text to black
  maxWidth: "100%"
})

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <Container>
      <StyledAppBar position="static" elevation={0}>
        <StyledToolbar>
          <NavSection>
            <StyledButton onClick={() => navigate("/buy")}>Buy</StyledButton>
            <StyledButton onClick={() => navigate("/rent")}>Rent</StyledButton>
            <StyledButton onClick={() => navigate("/sell")}>Sell</StyledButton>
          </NavSection>
          <Logo src={logo} alt="Logo" onClick={() => navigate("/")} sx={{ cursor: "pointer" }} />
          <NavSection>
            <StyledButton onClick={() => navigate("/login")}>Log In</StyledButton>
            <StyledButton onClick={() => navigate("/register")}>Register</StyledButton>
          </NavSection>
        </StyledToolbar>
      </StyledAppBar>
    </Container>
  )
}
