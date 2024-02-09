import React from "react"
import OwnerSidebar from "../ownerSidebar/OwnerSidebar"

const OwnerDashboard = () => {
  return (
    <div className="dashBoard" style={{ display: "flex" }}>
      <div>
        <OwnerSidebar />
      </div>
      <div style={{ height: "70vh" }}>
       
      </div>
    </div>
  )
}

export default OwnerDashboard
