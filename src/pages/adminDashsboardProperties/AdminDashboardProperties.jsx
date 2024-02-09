import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import  PropertiesOptions from "../../components/propertiesOptions/PropertiesOptions";

const AdminDashboardProperties = () => {
    const [properties, setproperties] = useState([]);

    const fetchData = async () => {
        try {
            const token = sessionStorage.getItem("token");
            const response = await axios.get("http://localhost:8080/api/v1/admin/properties-to-be-approved", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setproperties(response.data);
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
                <Sidebar />
            </div>
            <div>
                <PropertiesOptions properties={properties} fetchData ={fetchData} />
            </div>
        </div>
    );
};

export default AdminDashboardProperties;
