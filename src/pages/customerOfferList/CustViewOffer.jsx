import React from "react"
import { Container, Grid, Typography } from "@mui/material"
import { dummyPropertiesData } from "../../dummy/FavPropertiesDummy"
import OfferMadeCard from "../../components/cards/OfferMadeCard"

const CustViewOffer = () => {
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
          List of Offers Made
        </Typography>
        <Grid container spacing={4}>
          {favorites.length > 0 ? (
            favorites.map(p => (
              <OfferMadeCard
                id={p.id}
                key={p.id}
                images={p.images}
                propertyName={p.propertyName} // Assuming each property has a name
                address={p.address}
                price={p.price}
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

export default CustViewOffer
