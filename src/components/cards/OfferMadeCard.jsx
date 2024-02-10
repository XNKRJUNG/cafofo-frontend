import * as React from "react"
import { useState } from "react"
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography, Grid, IconButton } from "@mui/material"
import { styled } from "@mui/system"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { useNavigate } from "react-router"

const CustomCard = styled(Card)({
  maxWidth: 345, // Adjust based on preference
  position: "relative", // Set position relative for absolute positioning of the IconButton
  margin: "auto" // Center the card if the grid's item doesn't fill the entire width
})

const OfferMadeCard = props => {
  const navigate = useNavigate()
  const { property, offerPrice } = props
  const { propertyName, address, price, images } = property

  // To Favorite the property
  const [isFavorited, setIsFavorited] = useState(false)

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited)
  }

  return (
    <Grid item xs={12} sm={6} md={3}>
      <CustomCard>
        <CardActionArea>
          {images && images.length > 0 && <CardMedia component="img" image={images[0]} height="185" alt={propertyName} />}
          <CardContent>
            <Typography variant="body3" color="text.secondary">
              Your Offer:
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold" }}>
              ${new Intl.NumberFormat("en-US").format(offerPrice)}
            </Typography>
            <Typography variant="body3" color="text.secondary">
              Listed for:
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold" }}>
              ${new Intl.NumberFormat("en-US").format(price)}
            </Typography>
            <Typography variant="body1" color="text.primary">
              {propertyName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {address.street}, {address.city}, {address.state}, {address.zipCode}
            </Typography>
            <Button variant="contained" sx={{ width: "100%", marginTop: 1 }} onClick={() => navigate("/properties/1")}>
              View Details
            </Button>
          </CardContent>
        </CardActionArea>
      </CustomCard>
    </Grid>
  )
}

export default OfferMadeCard
