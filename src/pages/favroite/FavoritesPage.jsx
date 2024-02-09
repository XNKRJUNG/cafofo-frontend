import React, { useEffect, useState } from "react"
import { Container, Grid, Typography } from "@mui/material"
import PropertyCard from "../../components/cards/PropertyCard"
import { dummyPropertiesData } from "../../dummy/FavPropertiesDummy"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"

const FavoritesPage = props => {
  const dispatch = useDispatch()
  const { userId } = useSelector(state => state.auth)

  const params = useParams()
  // const navigate = useNavigate();
  const [favoritesCard, setfavoritesCard] = useState([])

  const token = sessionStorage.getItem("token")
  // const userId= sessionStorage.getItem("userId");

  useEffect(() => {
    if (params) {
      axios
        .get("http://localhost:8080/api/v1/customers/" + userId + "/favorite-lists", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          const propertiesWithImages = response?.data.map((property, index) => {
            // Find the corresponding dummy data image by matching IDs
            property.image = dummyPropertiesData[index].images
            return property
          })
          setfavoritesCard(propertiesWithImages)
        })
        .catch(err => console.log(err.message))
    }
  }, [params.id])

  return (
    <>
      <Container>
        <Typography variant="h4" gutterBottom>
          Favorite Properties
        </Typography>
        <Grid container spacing={4}>
          {favoritesCard.length > 0 ? (
            favoritesCard.map(p => (
              <PropertyCard
                id={p.id}
                key={p.id}
                images={p.image}
                propertyName={p.propertyName} // Assuming each property has a name
                address={p.address}
                price={p.price}
                numberOfBed={p.numberOfBed}
                numberOfBathroom={p.numberOfBathroom}
                factAndFeatures={p.factAndFeatures}
                homeType={p.homeType}
                dealType={p.dealType}
                area={p.area}
                isFavorited={true} // Since this is the favorites page
              />
            ))
          ) : (
            <Typography variant="subtitle1">You have no favorite properties.</Typography>
          )}
        </Grid>
      </Container>
    </>
  )
}

export default FavoritesPage
