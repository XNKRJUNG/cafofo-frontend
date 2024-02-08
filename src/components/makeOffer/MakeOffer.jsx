import React from "react"
import { Box, Card, CardContent, TextField, Button, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

const CustomCard = styled(Card)(({ theme }) => ({
  maxWidth: 600,
  marginTop: theme.spacing(5)
}))

const CustomButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2)
}))

const MakeOffer = () => {
  return (
    <CustomCard elevation={0}>
      <CardContent sx={{ margin: "auto", height: "auto" }}>
        <Typography variant="h6" gutterBottom>
          Property Status:
        </Typography>
        <Box sx={{ color: "blue", border: "2px solid blue", display: "flex", justifyContent: "center", alignItems: "center", height: 35, maxHeight: 50, marginBottom: 5 }}>
          <Typography>Available</Typography>
        </Box>
        <Typography variant="h6" gutterBottom>
          Place Your Offer:
        </Typography>
        <form noValidate autoComplete="off">
          <TextField fullWidth required id="price" label="Amount: " margin="normal" variant="outlined" size="small" />
          <CustomButton type="submit" fullWidth variant="contained" color="primary" size="large">
            MAKE AN OFFER
          </CustomButton>
        </form>
      </CardContent>
    </CustomCard>
  )
}

export default MakeOffer
