import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const CreatePropertyButtons = (props) => {
    const {property} = props;
    const token = sessionStorage.getItem('token');
    const navigate = useNavigate();

    //Make the delete by id here
    const deleteProperty = async (propertyId) => {
            await axios.delete(`http://localhost:8080/api/v1/properties/${propertyId}`, {
                headers: {
                    Authorization: `Bearer ${token}`, //token value already here
                },
            }).then((response) => {
                console.log(response.data); // handle the response data
                alert("PROPERTY DELETED SUCCESSFULLY!");
                navigate("/owner-dashboard");
            }).catch((error) => {
                console.error(error); // handle the error
            })
    }

    const deleteHandler = () => {
        deleteProperty(property.id);
    }

    const editHandler = () => {
        navigate(`/owner-dashboard/edit-property/${property.id}`, { state: { property: property } });
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button onClick={editHandler} variant="contained" color="primary" style={{ margin: "10px" }}>Edit</Button>
            <Button onClick={deleteHandler} variant="contained" color="error" style={{ margin: "10px" }}>Delete</Button>
        </div>
    );
};

export default CreatePropertyButtons;