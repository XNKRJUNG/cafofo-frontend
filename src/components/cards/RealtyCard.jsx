import React, { useEffect, useState } from "react"
import { Card, CardContent, Typography, Grid } from "@mui/material"

const RealtyCard = props => {
  console.log("realtycard", props)
  const { propertyDetail } = props
  console.log(props.propertyDetail)

  return (
    <Card sx={{ maxWidth: 600, mx: "auto" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Typography variant="h4" component="div" sx={{ fontWeight: "bold", mb: 2 }}>
          ${propertyDetail?.price}
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 3 }}>
          {propertyDetail?.address?.nummber} {propertyDetail?.address?.street} {propertyDetail?.address?.city}
          {propertyDetail?.address?.state}
          {propertyDetail?.address?.country} {propertyDetail?.address?.zip}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
              {propertyDetail?.numberOfBed}
            </Typography>
            <Typography variant="subtitle1">beds</Typography>
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
              {propertyDetail?.numberOfBathRoom}
            </Typography>
            <Typography variant="subtitle1">baths</Typography>
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
              {propertyDetail?.area}
            </Typography>
            <Typography variant="subtitle1">sqft</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default RealtyCard
