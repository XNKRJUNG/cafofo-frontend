import React, { useEffect, useState } from "react"
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
import { useNavigate, useParams } from "react-router-dom"
import PropertyCard from "../../components/cards/PropertyCard"
import axios from "axios"

const PropertyDetails = () => {
  const navigate = useNavigate()

  const [propertyDetail, setPropertyDetail] = useState([])
  const param = useParams()
  const token = sessionStorage.getItem("token")
  console.log(param.id)
  // const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqYW5lLnNtaXRoQGV4YW1wbGUuY29tIiwiaWF0IjoxNzA3NDU0NjUyLCJleHAiOjE3MDc0NTYwOTJ9.eylWboPKz1N1OrLBJKmpdXSaVTwgVvyD_psnUrDltP4"
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/properties/" + param.id, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setPropertyDetail(response.data)
        console.log("Result" + response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [param.id])
  console.log(propertyDetail)

  return (
    <>
      <Grid container spacing={4} sx={{ maxWidth: 1200, margin: "auto", padding: 2 }}>
        <Grid item></Grid>
        <Grid item>
          <Typography variant="body" component="div" onClick={() => navigate(-1)} sx={{ cursor: "pointer", textDecoration: "underline" }}>
            Back
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" component="div" sx={{ fontWeight: "bold" }}>
            {propertyDetail.propertyName}
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <ImageCarousel items={images} />
        </Grid>
        <Grid item xs={12} md={4}>
          <MakeOffer id={param.id} />
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
          <RealtyCard propertyDetail={propertyDetail} />
        </Grid>
        <Grid item xs={12} md={8}>
          <AdditionalDescriptionProperty propertyDetail={propertyDetail} />
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
