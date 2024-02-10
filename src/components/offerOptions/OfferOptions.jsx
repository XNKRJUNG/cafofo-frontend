import React from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const OfferOptions = (props) => {
    const { id, offerDate, offerStatus, offerPrice, property, cancel_flag, fetchData } = props;
    const navigate = useNavigate();
    
    const handleConfirm = () => {
        navigate(`/admin-dashboard/users/${id}/reset-password`);
    };

    const deactivateUser = async (id) => {
        try {
            const token = sessionStorage.getItem("token");
            await axios.post(`http://localhost:8080/api/v1/admin/change-activation-user/`+id, {}, {
                headers: {
                    Authorization: `Bearer `+token,
                },
            });
            await fetchData();
        } catch (error) {
            console.error(error);
        }
    }


    const handleDeactivate = () => {
        console.log(id);
        deactivateUser(id);
    }




    return (
                <div className='user' style={{ 
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    padding: '16px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#fff',
                    margin: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                   
                    <Typography variant='h6'>ID: {id}</Typography>
                    <Typography variant='h6'>Property Name: {property.propertyName}</Typography>
                    <Typography variant='h6'>Offer Price: R$ {offerPrice}</Typography>
                    <Typography variant='h6'>{offerStatus}</Typography>

                    <Button onClick={handleConfirm} variant='contained' style={{ margin: '8px' }}>Accept</Button> {/* Add margin to the buttons */}
                    <Button onClick={handleDeactivate} variant='contained' style={{ margin: '8px', backgroundColor:'#c62828'}}>Decline</Button> {/* Add margin to the buttons */}
                </div>
            );
        };

        export default OfferOptions;
           