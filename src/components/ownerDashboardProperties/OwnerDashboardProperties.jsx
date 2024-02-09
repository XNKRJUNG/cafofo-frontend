import React, { useEffect, useState } from "react";
import axios from "axios";
import OwnerSidebar from "../ownerSidebar/OwnerSidebar";
import OwnerProperties from "../ownerProperties/OwnerProperties";
import {dummyPropertiesData} from "../../dummy/PropertiesDummy";

const OwnerDashboardProperties = () => {
    const [property,setProperty] = useState([]);
    const token = sessionStorage.getItem("token");
    
    useEffect(() => {
        
        const fetchData = async () => {
            try {
              
                const response = await axios.get("http://localhost:8080/api/v1/owners/properties", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProperty(response.data);
                        
            } catch (error) {
                console.error(error);
            }
        }; 
        fetchData();
    }, []);
   

    console.log("<<Owner dashborad>>"+property);

    return (
        <div className="dashBoard" style={{ display: "flex" }}>
            <div>
                <OwnerSidebar />
            </div>
            <div style={{ margin: "10px" }}>
                <OwnerProperties fetchData={property} properties={property} />
            </div>
        </div>
    );
};

export default OwnerDashboardProperties;
