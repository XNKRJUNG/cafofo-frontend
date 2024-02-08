import React from "react"
import ImageCarousel from "../../components/imageCarousel/ImageCarousel"
import RealtyCard from "../../components/cards/RealtyCard"
import { Grid, Typography } from "@mui/material"

import image1 from "../../dummy/images/house1.jpeg"
import image2 from "../../dummy/images/house4.jpeg"
import image3 from "../../dummy/images/house3.jpeg"
import image4 from "../../dummy/images/house2.jpeg"
import image5 from "../../dummy/images/house5.jpeg"
import MakeOffer from "../../components/makeOffer/MakeOffer"
import AdditionalDescriptionProperty from "../../components/cards/AddtionalDescriptionProperty"

const PropertyDetails = () => {
  return (
    <>
      <Grid container spacing={4} sx={{ maxWidth: 1200, margin: "auto", padding: 2 }}>
        <Grid item>
          <Typography variant="body" component="div" onClick={""} sx={{ cursor: "pointer", textDecoration: "underline" }}>
            Back
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" component="div" sx={{ fontWeight: "bold" }}>
            Property name
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <ImageCarousel items={images} />
        </Grid>
        <Grid item xs={12} md={4}>
          <MakeOffer />
        </Grid>
      </Grid>
      <hr
        style={{
          border: 0,
          height: ".4px",
          backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
          marginTop: 0
        }}
      />{" "}
      <Grid container spacing={4} sx={{ maxWidth: 1200, margin: "auto", padding: 2 }}>
        <Grid item xs={12} md={4}>
          <RealtyCard />
        </Grid>
        <Grid item xs={12} md={8}>
          <AdditionalDescriptionProperty />
        </Grid>
      </Grid>
    </>
  )
}

export default PropertyDetails

const images = [
  {
    label: "Image One",
    src: `${image1}`
  },
  {
    label: "Image Two",
    src: `${image2}`
  },
  {
    label: "Image Three",
    src: `${image3}`
  },
  {
    label: "Image Four",
    src: `${image4}`
  },
  {
    label: "Image Five",
    src: `${image5}`
  }
]
