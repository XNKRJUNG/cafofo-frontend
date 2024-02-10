import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import useAuth from "../features/hooks/useAuth"

import Homepage from "../pages/Home/HomePage"
import Properties from "../pages/Properties/Properties"
import LoginPage from "../pages/Login/LoginPage"
import RegisterPage from "../pages/Register/RegisterPage"
import ForgotPasswordPage from "../pages/FogotPassword/ForgotPasswordPage"
import PropertyDetails from "../pages/Properties/PropertyDetails"

import FavoritesPage from "../pages/favroite/FavoritesPage"
import CustViewOffer from "../pages/customerOfferList/CustViewOffer"

import AdminDashoard from "../pages/adminDashboard/AdminDashboard"
import AdminDashoardUsers from "../pages/adminDashoardUsers/AdminDashoardUsers"
import AdminChangesPassword from "../components/adminChangesPassword/AdminChangesPassword"

import OwnerDashboard from "../components/ownerDashboard/OwnerDashboard"
import OwnerDashboardProperties from "../components/ownerDashboardProperties/OwnerDashboardProperties"
import AddProperty from "../components/addProperty/AddProperty"
import EditProperty from "../editProperty/EditProperty"

import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"

import ErrorPage from "../pages/Error/ErrorPage"
import AdminDashboardProperties from "../pages/adminDashsboardProperties/AdminDashboardProperties"
import OnwerDashboardOffers from "../pages/ownerDashboardOffers/OwnerDashboardOffers"

const ProtectedRoutes = () => {
  const { role, isLoggedIn } = useAuth()

  const viewBuyRentPageAccess = !isLoggedIn || (isLoggedIn && role === "CUSTOMER")
  const viewCustomerPageAccess = isLoggedIn && role === "CUSTOMER"
  const viewOwnerPageAccess = isLoggedIn && role === "OWNER"
  const viewAdminPageAccess = isLoggedIn && role === "ADMIN"

  const RootComponent = () => {
    if (!isLoggedIn) return <Homepage /> // Assuming you have a different homepage for unauthorized users
    switch (role) {
      case "CUSTOMER":
        return <Homepage />
      case "OWNER":
        return <OwnerDashboard />
      case "ADMIN":
        return <AdminDashoard />
      default:
        return <Homepage />
    }
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<RootComponent />} />

        <Route path="/login" element={!isLoggedIn ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/register" element={!isLoggedIn ? <RegisterPage /> : <Navigate to="/" />} />
        <Route path="/forgotPassword" element={!isLoggedIn ? <ForgotPasswordPage /> : <Navigate to="/" />} />

        <Route path="/buy/:dealType" element={viewBuyRentPageAccess ? <Properties /> : isLoggedIn ? <Navigate to="/unauthorized" /> : <LoginPage />} />
        <Route path="/rent/:dealType" element={viewBuyRentPageAccess ? <Properties /> : isLoggedIn ? <Navigate to="/unauthorized" /> : <LoginPage />} />
        <Route path="/sold/:dealType" element={<Properties />} />

        <Route path="/properties" element={viewBuyRentPageAccess ? <Properties /> : isLoggedIn ? <Navigate to="/unauthorized" /> : <LoginPage />} />
        <Route path="/properties/:id" element={viewBuyRentPageAccess ? <PropertyDetails /> : isLoggedIn ? <Navigate to="/unauthorized" /> : <LoginPage />} />

        <Route path="/users/favorites" element={viewCustomerPageAccess ? <FavoritesPage /> : <Navigate to="/unauthorized" />} />
        <Route path="/users/view-offer-list" element={viewCustomerPageAccess ? <CustViewOffer /> : <Navigate to="/unauthorized" />} />

        <Route path="/admin-dashboard" element={viewAdminPageAccess ? <AdminDashoard /> : <Navigate to="/unauthorized" />} />
        <Route path="/admin-dashboard/users" element={viewAdminPageAccess ? <AdminDashoardUsers /> : <Navigate to="/unauthorized" />} />
        <Route path="/admin-dashboard/users/:id/reset-password" element={viewAdminPageAccess ? <AdminChangesPassword /> : <Navigate to="/unauthorized" />} />
        <Route path="/admin-dashboard/properites-to-be-approved" element={viewAdminPageAccess ? <AdminDashboardProperties /> : <Navigate to="/unauthorized" />} />

        <Route path="/owner-dashboard" element={viewOwnerPageAccess ? <OwnerDashboard /> : <Navigate to="/unauthorized" />} />
        <Route path="/owner-dashboard/properties" element={viewOwnerPageAccess ? <OwnerDashboardProperties /> : <Navigate to="/unauthorized" />} />
        <Route path="/owner-dashboard/properties/add-new-property" element={viewOwnerPageAccess ? <AddProperty /> : <Navigate to="/unauthorized" />} />
        <Route path="/owner-dashboard/edit-property/:id" element={viewOwnerPageAccess ? <EditProperty /> : <Navigate to="/unauthorized" />} />
        <Route path="/owner-dashboard/offers" element={<OnwerDashboardOffers />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default ProtectedRoutes
