import React from "react"
import { useNavigate } from "react-router-dom"
import { Box, Button, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

import SearchBar from "../../components/searchBar/SearchBar"
import banner from "../../assets/banner.jpg"
import Features from "../../components/features/Features"

const StyledButton = styled(Button)({
  color: "white",
  height: 50,
  textTransform: "uppercase",
  "&:hover": {
    color: "grey"
  }
})

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <>
      <Box
        sx={{
          position: "relative", // Needed to position the search bar absolutely within
          flexGrow: 1,
          height: 550, // Set a fixed height for the banner
          width: "100%",
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
          backgroundSize: "cover", // Cover the box area, maintaining aspect ratio
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Box>
          <Typography
            variant="h3"
            component="div"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "white",
              textShadow: "2px 2px 8px #000"
            }}
          >
            Find your the right property of your dreams with Cofofo,
          </Typography>
          <Typography variant="h5" sx={{ mb: 3, color: "white", textShadow: "2px 2px 8px #000" }}>
            Let's start exploring . . .
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <StyledButton variant="contained" size="large" onClick={() => navigate("/properties")}>
              View Properties
            </StyledButton>
          </Box>
          {/* <SearchBar /> */}
        </Box>
      </Box>
      <Box>
        <Features />
      </Box>
    </>
  )
}

export default HomePage
