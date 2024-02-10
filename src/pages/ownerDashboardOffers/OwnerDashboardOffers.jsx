import React, { useEffect, useState } from "react";
import axios from "axios";
import OwnerSidebar from "../../components/ownerSidebar/OwnerSidebar";
import OffersOptions from "../../components/offersOptions/OffersOptions";
import { useSelector } from "react-redux";

const OnwerDashboardOffers = () => {
    const [offers, setOffers] = useState([]);
    const {userId} = useSelector(state => state.auth)
 

    const fetchData = async () => {
        console.log(userId);
        try {
            const token = sessionStorage.getItem("token");
            console.log(token);
            const path = `http://localhost:8080/api/v1/owners/${userId}/offers`;
            console.log(path);

            const response = await axios.get(path, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setOffers(response.data);
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
            <div>
                <OffersOptions offers={offers} fetchData ={fetchData} />
            </div>
        </div>
    );
};

export default OnwerDashboardOffers;
