import React, { useEffect, useState } from "react"
import { Container, Grid, Typography } from "@mui/material"
import { dummyPropertiesData } from "../../dummy/FavPropertiesDummy"
import OfferMadeCard from "../../components/cards/OfferMadeCard"
import { useParams } from "react-router-dom"
import axios from "axios"

const CustViewOffer = () => {
  const params = useParams();
  const [offersCard, setOffersCard] = useState([]);
  const token= sessionStorage.getItem("token");

  useEffect(() => {
    console.log("I am form Offer-List page :"+ params.id);
    if (params) {
      axios
        .get("http://localhost:8080/api/v1/customers/"+params.id+"/offers",
        {headers:{
          Authorization: `Bearer ${token}`,
        },})
        .then((response) => {
          setOffersCard(response.data);
        })
        .catch((err) => console.log(err.message));
    }
  }, [params.id]);

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
                property={p.propertyDto}
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
