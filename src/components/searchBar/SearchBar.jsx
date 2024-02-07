import React, { useState } from "react"
import { Box, TextField, IconButton, InputAdornment } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { styled } from "@mui/material/styles"

const StyledSearchBar = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  borderRadius: theme.shape.borderRadius,
  maxWidth: "800px",
  width: "100%"
}))

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("")

  // Handle change in search input
  const handleChange = event => {
    setSearchQuery(event.target.value)
  }

  // Handle click on search button
  const handleClick = () => {
    console.log("Searching for:", searchQuery)
    // Implement search logic here
    // For example, navigate to search results page or filter displayed data
  }

  return (
    <StyledSearchBar>
      <TextField
        variant="outlined"
        placeholder="Enter an address, neighborhood, city, or ZIP code"
        fullWidth
        value={searchQuery}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit" aria-label="search" onClick={handleClick}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            paddingRight: 0 // Remove padding to make the button fit nicely
          }
        }}
      />
    </StyledSearchBar>
  )
}

export default SearchBar
