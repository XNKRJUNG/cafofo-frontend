import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from "../pages/Home/HomePage"
import Properties from "../pages/Properties/Properties"
import LoginPage from "../pages/Login/LoginPage"
import RegisterPage from "../pages/Register/RegisterPage"
import ForgotPasswordPage from "../pages/FogotPassword/ForgotPasswordPage"
import PropertyDetails from "../pages/Properties/PropertyDetails"
import ErrorPage from "../pages/Error/ErrorPage"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"

const ProtectedRoutes = () => {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/properties" element={<Properties/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/forgotPassword" element={<ForgotPasswordPage/>} />
                <Route path="/buy" element={<Properties/>} />
                <Route path="/rent" element={<Properties/>} />
                <Route path="/properties/1" element={<PropertyDetails/>} />
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default ProtectedRoutes