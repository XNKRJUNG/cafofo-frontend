import React, { useState } from "react"
import { Box, Card, CardContent, TextField, Button, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

const CustomCard = styled(Card)(({ theme }) => ({
  maxWidth: 600
  // marginTop: theme.spacing(5)
}))

const CustomButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2)
}))

const MakeOffer = () => {
  const [isOfferMade, setIsOfferMade] = useState(false)

  const [buttonVariant, setButtonVariant] = useState("outlined")

  const handleClick = () => {
    setButtonVariant(prevVariant => (prevVariant === "contained" ? "outlined" : "contained"))
    //Add implementation here
  }

  const handleMakeOffer = () => {
    setIsOfferMade(true)
  }
  return (
    <CustomCard elevation={0}>
      <CardContent sx={{ margin: "auto", height: "auto" }}>
        <CustomButton
          type="button" // Assuming this is not specifically for form submission
          fullWidth
          variant={buttonVariant}
          color="error"
          size="large"
          onClick={handleClick}
        >
          {buttonVariant === "contained" ? "Added to Favorites" : "Add to Favorites"}
        </CustomButton>
        <Typography variant="h6" gutterBottom>
          Property Status:
        </Typography>
        <Box sx={{ color: "blue", border: "2px solid blue", display: "flex", justifyContent: "center", alignItems: "center", height: 35, maxHeight: 50, marginBottom: 5 }}>
          <Typography>Available</Typography>
          {/* This has to be replaced for the Offer Status value from backend  */}
        </Box>
        <Typography variant="h6" gutterBottom>
          Place Your Offer:
        </Typography>
        <form noValidate autoComplete="off">
          <TextField fullWidth required id="price" label="Amount: " margin="normal" variant="outlined" size="small" />
          {isOfferMade ? (
            <>
              {/* When isOfferMade is true, show a disabled "Make An Offer" button */}
              <CustomButton
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                disabled // This disables the button
              >
                Make An Offer
              </CustomButton>

              {/* And also show an active "Update Offer" button */}
              <CustomButton type="submit" fullWidth variant="contained" color="primary" size="large">
                Update Offer
              </CustomButton>
            </>
          ) : (
            // When isOfferMade is false, show only the active "Make An Offer" button
            <CustomButton type="submit" fullWidth variant="contained" color="primary" size="large" onClick={handleMakeOffer}>
              Make An Offer
            </CustomButton>
          )}
        </form>
      </CardContent>
    </CustomCard>
  )
}

export default MakeOffer
