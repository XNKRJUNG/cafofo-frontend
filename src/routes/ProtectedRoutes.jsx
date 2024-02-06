import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ErrorPage from "../pages/Error/ErrorPage"
import HomePage from "../pages/Home/HomePage"
import Properties from "../pages/Properties/Properties"
import ForgotPasswordPage from "../pages/FogotPassword/ForgotPasswordPage"
import RegisterPage from "../pages/Register/RegisterPage"
import LoginPage from "../pages/Login/LoginPage"

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
