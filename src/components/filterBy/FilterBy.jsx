import React, { useState } from "react"
import { Box, TextField, Button } from "@mui/material"
import { NestedTypeComponent } from "../nestedDropdown/NestedType"
import { styled } from "@mui/material/styles"

const StyledFilterBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: theme.spacing(2),
  justifyContent: "center",
  padding: theme.spacing(2),
  position: "sticky", // Add this line
  top: 0, // Set to the desired distance from the top
  zIndex: 1000, // Ensure it's above other elements
  background: "white", // Set a background to ensure content below doesn't show through
  boxShadow: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))" // Optional: adds shadow to the sticky box
}))

const FilterBy = () => {
  const [searchText, setSearchText] = useState("") // New state for text search
  const [dealType, setDealType] = useState("")
  const [homeType, setHomeType] = useState("")
  const [priceRange, setPriceRange] = useState("")
  const [roomsRange, setRoomsRange] = useState("")
  const [bathroomsRange, setBathroomsRange] = useState("")
  const [areaRange, setAreaRange] = useState("")

  // Handlers for each dropdown
  const handleSearchTextChange = event => setSearchText(event.target.value) // Handler for text search
  const handleDealTypeChange = event => setDealType(event.target.value)
  const handleHomeTypeChange = event => setHomeType(event.target.value)
  const handlePriceRangeChange = event => setPriceRange(event.target.value)
  const handleRoomsRangeChange = event => setRoomsRange(event.target.value)
  const handleBathroomsRangeChange = event => setBathroomsRange(event.target.value)
  const handleAreaRangeChange = event => setAreaRange(event.target.value)

  // Define the options for the nested dropdowns
  const priceOptions = [
    { value: "0-100000", label: "Up to $100,000" },
    { value: "100000-200000", label: "$100,000 to $200,000" },
    { value: "200000-300000", label: "$200,000 to $300,000" }
    // Add more price options as needed
  ]

  const roomsOptions = [
    { value: "1-2", label: "1-2 bedrooms" },
    { value: "3-4", label: "3-4 bedrooms" }
    // Add more room options as needed
  ]

  const bathroomsOptions = [
    { value: "1-2", label: "1-2 bathrooms" },
    { value: "3-4", label: "3-4 bathrooms" }
    // Add more room options as needed
  ]

  const areaOptions = [
    { value: "0-500", label: "Up to 500 sqft" },
    { value: "500-1000", label: "500 to 1000 sqft" }
    // Add more area options as needed
  ]

  return (
    <>
      <StyledFilterBox>
        <TextField id="outlined-basic" label="Search" variant="filled" value={searchText} onChange={handleSearchTextChange} size="small" />

        {/* Deal Type Dropdown */}
        <NestedTypeComponent
          label="Deal Type"
          value={dealType}
          options={[
            { value: "for-sale", label: "For Sale" },
            { value: "for-rent", label: "For Rent" }
            // Add more deal type options as needed
          ]}
          onChange={handleDealTypeChange}
        />

        {/* Home Type Dropdown */}
        <NestedTypeComponent
          label="Home Type"
          value={homeType}
          options={[
            { value: "single-homes", label: "Single Homes" },
            { value: "town-homes", label: "Town Homes" }
            // Add more home type options as needed
          ]}
          onChange={handleHomeTypeChange}
        />

        {/* Price Range Dropdown */}
        <NestedTypeComponent label="Price Range" value={priceRange} options={priceOptions} onChange={handlePriceRangeChange} />

        {/* Rooms Range Dropdown */}
        <NestedTypeComponent label="Rooms" value={roomsRange} options={roomsOptions} onChange={handleRoomsRangeChange} />

        {/* BathRooms Range Dropdown */}
        <NestedTypeComponent label="Bathrooms" value={bathroomsRange} options={bathroomsOptions} onChange={handleBathroomsRangeChange} />

        {/* Area Range Dropdown */}
        <NestedTypeComponent label="Area" value={areaRange} options={areaOptions} onChange={handleAreaRangeChange} />

        <Button variant="contained">Search</Button>
      </StyledFilterBox>
      <hr
        style={{
          border: 0,
          height: ".4px",
          backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))"
        }}
      />
    </>
  )
}

export default FilterBy
