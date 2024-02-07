import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/home/HomePage"
import Properties from "../pages/properties/Properties"
import LoginPage from "../pages/login/LoginPage"
import RegisterPage from "../pages/register/RegisterPage"
import ForgotPasswordPage from "../pages/fogotPassword/ForgotPasswordPage"
import ErrorPage from "../pages/error/ErrorPage"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"

function ProtectedRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default ProtectedRoutes
