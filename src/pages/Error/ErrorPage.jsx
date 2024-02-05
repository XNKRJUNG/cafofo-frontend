import React from "react"
import { useNavigate } from "react-router-dom"
import { Button, Typography, Box } from "@mui/material"
import { styled } from "@mui/system"

const ErrorContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  textAlign: "center",
  gap: "20px"
})

function ErrorPage() {
  const navigate = useNavigate()

  return (
    <ErrorContainer>
      <Typography variant="h2" color="error">
        404 - Page Not Found
      </Typography>
      <Typography variant="body1">Oops! The page you are looking for does not exist or has been moved.</Typography>
      <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        Go Home
      </Button>
    </ErrorContainer>
  )
}

export default ErrorPage
