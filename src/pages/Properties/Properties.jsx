import React, { useEffect, useState } from "react"
import { Container, Grid } from "@mui/material"
import PropertyCard from "../../components/cards/PropertyCard"
import { dummyPropertiesData } from "../../dummy/PropertiesDummy"
import FilterBy from "../../components/filterBy/FilterBy"
import axios from "axios"

const Properties = () => {
  const [propertyDetail, setPropertyDetail] = useState([])

  useEffect(() => {
    const token = sessionStorage.getItem("token")
    const fetchPropertiesData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/properties", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setPropertyDetail(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchPropertiesData()
  }, [])

  const handleSearch = filteredData => {
    setPropertyDetail(filteredData)
  }

  return (
    <>
      <FilterBy onSearch={handleSearch} />
      <Container>
        <div>Properties</div>
        <Grid container spacing={4}>
          {propertyDetail.map(p => (
            <PropertyCard id={p.id} key={p.id} images={p.images} address={p.address} price={p.price} numberOfBed={p.numberOfBed} numberOfBathroom={p.numberOfBathroom} homeType={p.homeType} dealType={p.dealType} area={p.area} />
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Properties
