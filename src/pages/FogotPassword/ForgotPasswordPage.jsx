import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockResetIcon from "@mui/icons-material/LockReset"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { useNavigate } from "react-router-dom"

const ForgotPasswordPage = () => {
  const navigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    // Implement your password reset logic here
    console.log({
      email: data.get("email")
    })
    // Optionally navigate to another page (e.g., login) after submission
    // navigate('/login');
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockResetIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Send Reset Link
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" onClick={() => navigate("/login")}>
                Back to login
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default ForgotPasswordPage
