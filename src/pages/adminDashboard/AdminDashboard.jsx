import React from "react"
import Sidebar from "../../components/sidebar/Sidebar"

const AdminDashboard = () => {
  return (
    <div className="dashBoard" style={{ display: "flex" }}>
      <div>
        <Sidebar />
      </div>
      <div style={{ height: "70vh" }}>
       
      </div>
    </div>
  )
}

export default AdminDashboard
