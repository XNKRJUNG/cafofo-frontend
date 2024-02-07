import React from "react"
import { Box } from "@mui/material"
import SearchBar from "../../components/searchBar/SearchBar"
import banner from "../../assets/banner.jpg"
import Features from "../../components/features/Features"

const HomePage = () => {
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
        <SearchBar />
      </Box>
      <Box>
        <Features />
      </Box>
    </>
  )
}

export default HomePage
