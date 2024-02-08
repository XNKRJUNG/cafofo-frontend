import React from "react"
import { Container, Grid, Typography } from "@mui/material"
import PropertyCard from "../../components/cards/PropertyCard"
import { dummyPropertiesData } from "../../dummy/FavPropertiesDummy"

const FavoritesPage = () => {
  // This would be replaced with actual state management logic to determine favorites
  const favorites = dummyPropertiesData.filter(property => {
    console.log(property)
    return property.isFavorited
  })

  console.log(favorites)

  return (
    <>
      <Container>
        <Typography variant="h4" gutterBottom>
          Favorite Properties
        </Typography>
        <Grid container spacing={4}>
          {favorites.length > 0 ? (
            favorites.map(p => (
              <PropertyCard
                id={p.id}
                key={p.id}
                images={p.images}
                propertyName={p.propertyName} // Assuming each property has a name
                address={p.address}
                price={p.price}
                numberOfBed={p.numberOfBed}
                numberOfBathroom={p.numberOfBathroom}
                homeType={p.homeType}
                dealType={p.dealType}
                area={p.area}
                isFavorited={true} // Since this is the favorites page
              />
            ))
          ) : (
            <Typography variant="subtitle1">You have no favorite properties.</Typography>
          )}
        </Grid>
      </Container>
    </>
  )
}

export default FavoritesPage
