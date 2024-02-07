import React from "react"
import { Card, CardContent, TextField, Button, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

const CustomCard = styled(Card)(({ theme }) => ({
  maxWidth: 600,
  margin: "auto"
  // marginTop: theme.spacing()
}))

const CustomButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2)
}))

const ContactAgentForm = () => {
  return (
    <CustomCard elevation={0}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Contact Agent
        </Typography>
        <form noValidate autoComplete="off">
          <TextField fullWidth required id="name" label="Name" margin="normal" variant="outlined" size="small" />
          <TextField fullWidth required id="phone" label="Phone" margin="normal" variant="outlined" size="small" />
          <TextField fullWidth required id="email" label="Email" margin="normal" variant="outlined" size="small" />
          <TextField fullWidth required id="message" label="Message" margin="normal" variant="outlined" multiline rows={4} />
          <CustomButton type="submit" fullWidth variant="contained" color="primary" size="large">
            MAKE AN OFFER
          </CustomButton>
        </form>
      </CardContent>
    </CustomCard>
  )
}

export default ContactAgentForm
