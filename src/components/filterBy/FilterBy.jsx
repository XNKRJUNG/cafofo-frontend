import React, { useState, useEffect } from "react"
import { Box, TextField, Button } from "@mui/material"
import { NestedTypeComponent } from "../nestedDropdown/NestedType"
import { styled } from "@mui/material/styles"
import axios from "axios";

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

const FilterBy = ({onSearch}) => {
  const [searchText, setSearchText] = useState("") // New state for text search
  const [dealType, setDealType] = useState("")
  const [homeType, setHomeType] = useState("")
  const [priceRange, setPriceRange] = useState("")
  const [roomsRange, setRoomsRange] = useState("")
  const [bathroomsRange, setBathroomsRange] = useState("")
  const [areaRange, setAreaRange] = useState("")
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");


  // Handlers for each dropdown
  const handleSearchTextChange = event => setSearchText(event.target.value) // Handler for text search
  const handleDealTypeChange = event => setDealType(event.target.value)
  const handleHomeTypeChange = event => setHomeType(event.target.value)
 // const handlePriceRangeChange = event => setPriceRange(event.target.value)
  const handlePriceRangeChange = event => {
    const selectedValue = event.target.value; 
    setPriceRange(selectedValue);
    const [minPrice, maxPrice] = selectedValue.split('-');

    console.log('Min Price:', minPrice);
    console.log('Max Price:', maxPrice);
    setMinPrice(Number(minPrice)); 
    setMaxPrice(Number(maxPrice));
  };
  const handleRoomsRangeChange = event => setRoomsRange(event.target.value)
  const handleBathroomsRangeChange = event => setBathroomsRange(event.target.value)
  //const handleAreaRangeChange = event => setAreaRange(event.target.value)
  const handleAreaRangeChange = event => {
    const selectedAreaValue = event.target.value; 
    setAreaRange(selectedAreaValue);
    const [minArea, maxArea] = selectedAreaValue.split('-');
    console.log('Min Area:', minArea);
    console.log('Max Area:', maxArea);
    setMinArea(Number(minArea)); 
    setMaxArea(Number(maxArea));

  };

  // Define the options for the nested dropdowns
  const priceOptions = [
    { value: "0-100000", label: "Up to $100,000" },
    { value: "100000-200000", label: "$100,000 to $200,000" },
    { value: "200000-300000", label: "$200,000 to $300,000" },
    { value: "600-1000", label: "$600 to $1000" }
    // Add more price options as needed
  ]

  const roomsOptions = [
    { value: "1", label: "1 bedroom" },
    { value: "2", label: "2 bedrooms" },
    { value: "3", label: "3 bedrooms" },
    { value: "4", label: "4 bedrooms" }
    // Add more room options as needed
  ]

  const bathroomsOptions = [
    { value: "1", label: "1 bathroom" },
    { value: "2", label: "2 bathrooms" },
    { value: "3", label: "3 bathrooms" },
    { value: "4", label: "4 bathrooms" }
    // Add more room options as needed
  ]

  const areaOptions = [
    { value: "0-500", label: "Up to 500 sqft" },
    { value: "500-1000", label: "500 to 1000 sqft" },
    { value: "1000-10000", label: "1000 to 10000 sqft" }
    // Add more area options as needed
  ]

  const buildQueryString = () => {
    let queryString = '';
  
    if (dealType) {
      queryString += `dealtype=${dealType}&`;
    }
  
    if (minPrice !== null && maxPrice !== null) {
      queryString += `minprice=${minPrice}&maxprice=${maxPrice}&`;
    }
  
    if (roomsRange) {
      queryString += `numbed=${roomsRange}&`;
    }
  
    if (bathroomsRange) {
      queryString += `numbath=${bathroomsRange}&`;
    }
  
    if (homeType) {
      queryString += `hometype=${homeType}&`;
    }
  
    if (minArea !== null && maxArea !== null) {
      queryString += `minarea=${minArea}&maxarea=${maxArea}&`;
    }
  
    if (searchText) {
      queryString += `factandfactory=${searchText}&`;
    }
  
    // Remove trailing '&' if present
    if (queryString.endsWith('&')) {
      queryString = queryString.slice(0, -1);
    }
  
    return queryString;
  };

    const fetchData = async () => {
      
        try {
            const criteriaQuery = buildQueryString();
            console.log(criteriaQuery)
            const token = sessionStorage.getItem("token");
            console.log(dealType)
            
            console.log("token>>>>>"+token);
            
            const response = await axios.get(`http://localhost:8080/api/v1/properties/filter?${criteriaQuery}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("Result" , response.data);
           onSearch(response.data);
            console.log("Result" + response.data);
        } catch (error) {
            console.error(error);
        }
    };


useEffect(()=>{
    fetchData();
},[])


  return (
    <>
      <StyledFilterBox>
        <TextField id="outlined-basic" label="Search" variant="filled" value={searchText} onChange={handleSearchTextChange} size="small" />

        {/* Deal Type Dropdown */}
        <NestedTypeComponent
          label="Deal Type"
          value={dealType}
          options={[
            { value: "FOR_SALE", label: "For Sale" },
            { value: "FOR_RENT", label: "For Rent" },
            { value: "SOLD", label: "Sold out" }
            // Add more deal type options as needed
          ]}
          onChange={handleDealTypeChange}
        />

        {/* Home Type Dropdown */}
        <NestedTypeComponent
          label="Home Type"
          value={homeType}
          options={[
            { value: "APARTMENT", label: "apartment" },
            { value: "HOUSE", label: "house" },
            { value: "CONDO", label: "condo" },
            { value: "TOWNHOUSE", label: "Town Homes" },
            { value: "LAND", label: "land" },
            { value: "OTHER", label: "other" },
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

        <Button variant="contained" onClick={fetchData}>Search</Button>
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
