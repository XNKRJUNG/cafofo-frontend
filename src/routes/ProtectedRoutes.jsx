import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "../pages/home/HomePage"
import Properties from "../pages/properties/Properties"
import LoginPage from "../pages/login/LoginPage"
import RegisterPage from "../pages/register/RegisterPage"
import ForgotPasswordPage from "../pages/fogotPassword/ForgotPasswordPage"
import ErrorPage from "../pages/error/ErrorPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
