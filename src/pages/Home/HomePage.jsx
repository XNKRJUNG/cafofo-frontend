import React from "react"
import Navbar from "../../components/navbar/Navbar"
import SearchBar from "../../components/searchBar/SearchBar"
import banner from "../../assets/banner.jpg"
import { Box } from "@mui/material"

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          position: "relative", // Needed to position the search bar absolutely within
          flexGrow: 1,
          height: 500, // Set a fixed height for the banner
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
        {/* Positioning the SearchBar in the center of the banner */}
        <SearchBar />
      </Box>
      {/* <SearchBar /> */}
    </>
  )
}

export default HomePage
