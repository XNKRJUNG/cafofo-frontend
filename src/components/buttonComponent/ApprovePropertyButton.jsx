import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const ApprovePropertyButton = (props) => {
    const {property,fetchData} = props;
    const token = sessionStorage.getItem('token');
    const navigate = useNavigate();

    //Make the delete by id here
    const aproveProperty = async (propertyId) => {
        console.log(propertyId);
        console.log(token);
        const endpoints = `http://localhost:8080/api/v1/admin/approve-owner-property/${propertyId}`;
        console.log(endpoints);

            await axios.put(endpoints, null,{
                headers: {
                    Authorization: `Bearer ${token}`, //token value already here
                },
            }).then((response) => {
                console.log(response.data); // handle the response data
                alert("PROPERTY ADDED SUCCESSFULLY!");
                fetchData();
                //FETCH DATA
            }).catch((error) => {
                console.error(error); // handle the error
            })
    }

    const approveHandler = () => {
        aproveProperty(property.id);
    }

    const editHandler = () => {
        navigate(`/owner-dashboard/edit-property/${property.id}`, { state: { property: property } });
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button onClick={approveHandler} variant="contained" color="success" style={{ margin: "10px" }}>Approve</Button>
        </div>
    );
};

export default ApprovePropertyButton;