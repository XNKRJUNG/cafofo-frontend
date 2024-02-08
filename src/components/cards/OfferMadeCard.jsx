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

  const { images, propertyName, address, price } = props

  // To Favorite the property
  const [isFavorited, setIsFavorited] = useState(false)

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited)
  }

  return (
    <Grid item xs={12} sm={6} md={3}>
      <CustomCard>
        <CardActionArea>
          <CardMedia component="img" height="185" image={images[0]} alt={propertyName} />
          <CardContent>
            <Typography variant="body3" color="text.secondary">
              Your Offer:
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold" }}>
              ${new Intl.NumberFormat("en-US").format(price - 1000)}
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
        <Box position="absolute" top={1} right={1}>
          <IconButton
            onClick={toggleFavorite}
            aria-label="add to favorites"
            sx={{
              "&:hover": {
                backgroundColor: "transparent"
              }
            }}
          >
            {isFavorited ? (
              <FavoriteIcon color="error" sx={{ stroke: "grey", strokeWidth: 1 }} />
            ) : (
              <FavoriteBorderIcon
                sx={{
                  color: "#ffffff",
                  stroke: "grey",
                  strokeWidth: 1
                }}
              />
            )}
          </IconButton>
        </Box>
      </CustomCard>
    </Grid>
  )
}

export default OfferMadeCard
