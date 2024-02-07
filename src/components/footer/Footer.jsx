import React from "react"
import { Box, Container, Typography } from "@mui/material"

const Footer = () => {
  return (
    <>
      <Box component="footer" sx={{ bgcolor: "background.paper", py: 5.5 }}>
        <hr />
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            {"Copyright © "}
            {new Date().getFullYear()}
            {" CAFOFO Groups "}
          </Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
            Cafofo group is committed to ensuring smoot digital accessibility and experience. We are continuously working to improve the accessibility of our web experience for everyone, and we welcome feedback and accommodation requests. If you wish to report an issue or seek an accommodation, please let us know.
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default Footer
