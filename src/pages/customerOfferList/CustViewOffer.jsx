import React, { useEffect, useState } from "react"
import { Container, Grid, Typography } from "@mui/material"
import { dummyPropertiesData } from "../../dummy/FavPropertiesDummy"
import OfferMadeCard from "../../components/cards/OfferMadeCard"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useSelector } from "react-redux"

const CustViewOffer = () => {
  const { userId } = useSelector(state => state.auth)

  const [offersCard, setOffersCard] = useState([])
  const token = sessionStorage.getItem("token")

  useEffect(() => {
    if (userId) {
      axios
        .get("http://localhost:8080/api/v1/customers/" + userId + "/offers", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          setOffersCard(response.data)
        })
        .catch(err => console.log(err.message))
    }
  }, [userId])

  return (
    <>
      <Container>
        <Typography variant="h4" gutterBottom>
          List of Offers Made
        </Typography>
        <Grid container spacing={4}>
          {offersCard.length > 0 ? (
            offersCard.map(p => (
              <OfferMadeCard
                id={p.id}
                key={p.id}
                property={p.property}
                offerPrice={p.offerPrice}
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

export default CustViewOffer
