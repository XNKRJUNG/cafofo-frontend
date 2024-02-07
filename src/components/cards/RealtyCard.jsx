import React from "react"
import { Card, CardContent, Typography, Button, Grid, Box, Divider } from "@mui/material"
import { styled } from "@mui/material/styles"
import ContactAgent from "../makeOffer/ContactAgent"

const CustomCard = styled(Card)(({ theme }) => ({
  maxWidth: 600 // Set the maximum width of the card
}))

const TitleTypography = styled(Typography)({
  fontWeight: "bold"
})

const SubtitleTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1)
}))

const FeatureTypography = styled(Typography)(({ theme }) => ({
  display: "inline",
  marginRight: theme.spacing(2)
}))

const FeatureDivider = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(1, 0)
}))

const CustomButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1, 1, 1, 0),
  borderRadius: 4
}))

const RealtyCard = () => {
  const [openContactAgent, setOpenContactAgent] = React.useState(false)

  const handleOpenContactAgent = () => {
    setOpenContactAgent(true)
  }

  const handleCloseContactAgent = () => {
    setOpenContactAgent(false)
  }

  return (
    <CustomCard>
      <CardContent>
        <TitleTypography variant="h4" gutterBottom>
          $334,900
        </TitleTypography>
        <SubtitleTypography variant="subtitle1">7916 Westfield Dr NE, Cedar Rapids, IA 52402</SubtitleTypography>

        <FeatureDivider />

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FeatureTypography variant="body1">5 beds</FeatureTypography>
          </Grid>
          <Grid item xs={4}>
            <FeatureTypography variant="body1">3 baths</FeatureTypography>
          </Grid>
          <Grid item xs={4}>
            <FeatureTypography variant="body1">2,457 sqft</FeatureTypography>
          </Grid>
        </Grid>

        <FeatureDivider />

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <CustomButton variant="contained" color="primary">
              Request a tour
            </CustomButton>
            <CustomButton variant="outlined" size="small" onClick={handleOpenContactAgent}>
              Contact agent
            </CustomButton>
            <ContactAgent open={openContactAgent} onClose={handleCloseContactAgent} />
          </Box>
        </Box>
      </CardContent>
    </CustomCard>
  )
}

export default RealtyCard
