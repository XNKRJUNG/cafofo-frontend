import React, { useEffect, useState } from "react";
import axios from "axios";
import OwnerSidebar from "../ownerSidebar/OwnerSidebar";
import OwnerProperties from "../ownerProperties/OwnerProperties";
import {dummyPropertiesData} from "../../dummy/PropertiesDummy";

const OwnerDashboardProperties = () => {

    const fetchData = async () => {
        try {
            const token = sessionStorage.getItem("token");
            const response = await axios.get("http://localhost:8080/api/v1/owners/${id}/properties", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // setUsers(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="dashBoard" style={{ display: "flex" }}>
            <div>
                <OwnerSidebar />
            </div>
            <div style={{ margin: "10px" }}>
                <OwnerProperties fetchData={fetchData} properties={dummyPropertiesData} />
            </div>
        </div>
    );
};

export default OwnerDashboardProperties;
