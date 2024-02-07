import React from "react"
import { Card, CardContent, Typography, Grid } from "@mui/material"

const RealtyCard = () => {
  return (
    <Card sx={{ maxWidth: 600, mx: "auto" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Typography variant="h4" component="div" sx={{ fontWeight: "bold", mb: 2 }}>
          $334,900
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 3 }}>
          7916 Westfield Dr NE, Cedar Rapids, IA 52402
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
              5
            </Typography>
            <Typography variant="subtitle1">beds</Typography>
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
              3
            </Typography>
            <Typography variant="subtitle1">baths</Typography>
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
              2,457
            </Typography>
            <Typography variant="subtitle1">sqft</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default RealtyCard
