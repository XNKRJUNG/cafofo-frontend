import React, { useState } from "react"
import { Box, Card, CardContent, TextField, Button, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import axios from "axios"
import { useSelector } from "react-redux"

const CustomCard = styled(Card)(({ theme }) => ({
  maxWidth: 600
  // marginTop: theme.spacing(5)
}))

const CustomButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2)
}))

const MakeOffer = props => {
  const { userId } = useSelector(state => state.auth)

  const [price, setPrice] = useState("")
  const [isOfferMade, setIsOfferMade] = useState(false)

  const [buttonVariant, setButtonVariant] = useState("outlined")
  const [offerId, setOfferId] = useState("")

  const token = sessionStorage.getItem("token")

  const handleClick = () => {
    setButtonVariant(prevVariant => (prevVariant === "contained" ? "outlined" : "contained"))
    const apiUrl = `http://localhost:8080/api/v1/customers/${userId}/favorite-lists?propertyId=${props.id}` // make favourite
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json" // Adjust content type as per your API requirements
    }
    fetch(apiUrl, {
      method: buttonVariant === "contained" ? "DELETE" : "POST",
      headers
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        // Check the content type of the response
        const contentType = response.headers.get("content-type")
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return response.json() // Parse JSON if the content type is JSON
        } else {
          return response.text() // Otherwise, handle as text or other formats
        }
      })
      .then(data => {
        console.log("API Response:", data)
      })
      .catch(error => {
        console.error("Error during API call:", error)
      })
  }

  // const handleMakeOffer = () => {
  //   //When isOfferMade is true, show a disabled "Add An Offer" button=>call Post
  //   //http://localhost:8080/api/v1/customer/4/offers
  //   setIsOfferMade(false)
  //   //When isOfferMade is false, show a disabled "Update An Offer" button=>call Patch
  //   //http://localhost:8383/api/v1/customers/4/offers/1?price=50000

  //   //When isOfferMade is false, show a disabled "Cancel An Offer" button=>call Delete
  //   //http://localhost:8080/api/v1/customers/4/offers?offerId=1
  // }
  console.log("<<<ID>>>>:" + props.id + "price" + price + "user ID" + userId)

  const handleMakeOffer = async () => {
    setIsOfferMade(true) // This will trigger the component to re-render

    // No need to check isOfferMade here since you're setting it to true above
    console.log("IN the handleMakeOffer")
    console.log(`http://localhost:8080/api/v1/customers/${userId}/offers`)
    try {
      console.log("Test;:::::::::::")

      const response = await axios.post(
        `http://localhost:8080/api/v1/customers/${userId}/offers`,
        {
          propertyId: props.id,
          offerPrice: parseFloat(price) // Assuming 'price' is a state or prop holding the offer price
        },
        {
          headers: {
            Authorization: `Bearer ${token}` // Assuming 'token' is correctly defined elsewhere in your component
          }
        }
      )

      setOfferId(response.data) // Assuming you're storing the response data for later use
    } catch (error) {
      console.error("Error saving offer:", error)
    }
  }

  console.log(offerId)

  // } else {
  //     // If isOfferMade is false, make a PATCH or DELETE request based on the condition
  //     const offerId = 1; // Replace with the actual offer ID
  //     const apiUrl = `http://localhost:8383/api/v1/customers/${userId}/offers/${offerId}`;

  //     const headers = {
  //       Authorization: `Bearer ${token}`,
  //       'Content-Type': 'application/json',
  //     };

  //     fetch(apiUrl, {
  //       method: 'PATCH',
  //       headers,
  //        body: JSON.stringify({
  //         "propertyId":1,
  //         "offerPrice":300000.0
  //     }),
  //     })
  //       .then(response => {
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         return response.json();
  //       })
  //       .then(data => {
  //         console.log("Offer created:", data);
  //         // Perform any additional actions if needed
  //       })
  //       .catch(error => {
  //         console.error("Error during API call:", error);
  //       });
  // }
  // const apiUrl = `http://localhost:8080/api/v1/customers/${userId}/offers?offerId=${offerId}`;
  //};

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
          {isOfferMade ? <Typography>Pending</Typography> : <Typography>Available</Typography>}
          {/* This has to be replaced for the Offer Status value from backend  */}
        </Box>
        <Typography variant="h6" gutterBottom>
          Place Your Offer:
        </Typography>
        <form noValidate autoComplete="off">
          <TextField fullWidth required id="price" label="Amount: " margin="normal" variant="outlined" size="small" value={price} onChange={e => setPrice(e.target.value)} />
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
