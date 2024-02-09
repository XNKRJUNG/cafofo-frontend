import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "../pages/Home/HomePage"
import Properties from "../pages/Properties/Properties"
import LoginPage from "../pages/Login/LoginPage"
import RegisterPage from "../pages/Register/RegisterPage"
import ForgotPasswordPage from "../pages/FogotPassword/ForgotPasswordPage"
import PropertyDetails from "../pages/Properties/PropertyDetails"
import FavoritesPage from "../pages/favroite/FavoritesPage"
import ErrorPage from "../pages/Error/ErrorPage"
import AdminDashoard from "../pages/adminDashboard/AdminDashboard"
import AdminDashoardUsers from "../pages/adminDashoardUsers/AdminDashoardUsers"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import AdminChangesPassword from "../components/adminChangesPassword/AdminChangesPassword"
import OwnerDashboard from "../components/ownerDashboard/OwnerDashboard"
import OwnerDashboardProperties from "../components/ownerDashboardProperties/OwnerDashboardProperties"
import AddProperty from "../components/addProperty/AddProperty"

const ProtectedRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="/buy" element={<Properties />} />
        <Route path="/rent" element={<Properties />} />
        <Route path="/properties/1" element={<PropertyDetails />} />
        <Route path="/users/1/favroites" element={<FavoritesPage />} />
        <Route path="/admin-dashboard" element= {<AdminDashoard />} />
        <Route path="/admin-dashboard/users" element= {<AdminDashoardUsers/>} />
        <Route path="/admin-dashboard/users/:id/reset-password" element= {<AdminChangesPassword/>} />
        <Route path="/owner-dashboard" element= {<OwnerDashboard />} />
        <Route path="/owner-dashboard/properties" element= {<OwnerDashboardProperties />} />
        <Route path="/owner-dashboard/properties/add-new-property" element= {<AddProperty />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default ProtectedRoutes
