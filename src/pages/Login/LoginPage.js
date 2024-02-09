import * as React from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import { setUser } from "../../features/auth/authSlice"

import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import axios from "axios"

const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    authenticate(data.get("email"), data.get("password"))
    console.log({
      email: data.get("email"),
      password: data.get("password")
    })
  }

  const authenticate = (email, password) => {
    axios
      .post("http://localhost:8080/api/v1/auth/authenticate", { email, password })
      .then(response => {
        sessionStorage.setItem("token", response.data.token)
        sessionStorage.setItem("emailName", email)
        // Dispatch setUser action
        dispatch(setUser({ email: email, id: response.data.userId, role: response.data.role, isLoggedIn: true }))
        navigate("/")
      })
      .catch(error => {
        console.log(error)
        alert("Invalid email or password!")
      })
  }

  return (
    <>
      <hr
        style={{
          border: 0,
          height: ".4px",
          backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))",
          marginTop: 0
        }}
      />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "56vh"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
            <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" onClick={() => navigate("/forgotPassword")}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={() => navigate("/register")}>
                  {"Don't have an account? Register one"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default LoginPage
