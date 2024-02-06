import * as React from "react"
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from "@mui/material"
import { styled } from "@mui/system"

const CustomCard = styled(Card)({
  maxWidth: 345 // Adjust based preference
})

const PropertyCard = props => {
  const { images, propertyName, address, price, numberOfBed, numberOfBathroom, homeType, dealType, area } = props
  return (
    <Grid item xs={12} sm={6} md={3}>
      <CustomCard>
        <CardActionArea>
          <CardMedia component="img" height="140" image={images[0]} alt={propertyName} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              ${price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {numberOfBed} bds | {numberOfBathroom} ba | {area} sqft - {homeType} {dealType}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {address.street}, {address.city}, {address.state}, {address.zipCode}
            </Typography>
          </CardContent>
        </CardActionArea>
      </CustomCard>
    </Grid>
  )
}

export default PropertyCard
