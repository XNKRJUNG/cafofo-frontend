import React from "react"
import { Container, Grid } from "@mui/material"
import PropertyCard from "../../components/cards/PropertyCard"
import { dummyPropertiesData } from "../../dummy/PropertiesDummy"

const Properties = () => {
  return (
    <>
      <Container>
        <div>Properties</div>
        <Grid container spacing={4}>
          {dummyPropertiesData.map(p => (
            <PropertyCard id={p.id} key={p.id} images={p.images} address={p.address} price={p.price} numberOfBed={p.numberOfBed} numberOfBathroom={p.numberOfBathroom} homeType={p.homeType} dealType={p.dealType} area={p.area} />
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Properties
