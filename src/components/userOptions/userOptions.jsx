import React from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UserOptions = (props) => {
    const { id, firstName, lastName, email, role, active } = props;
    const navigate = useNavigate();
    
    const handleConfirm = () => {
        navigate(`/admin-dashboard/users/${id}/reset-password`);
    };


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
                   
                    <Typography variant='h6'>First Name: {firstName}</Typography>
                    <Typography variant='h6'>Last Name: {lastName}</Typography>
                    <Typography variant='h6'>Email: {email}</Typography>
                    <Typography variant='h6'>Role: {role}</Typography>
                    <Typography variant='h6'>Active: {active ? 'Yes' : 'No'}</Typography>
                    <Button onClick={handleConfirm} variant='contained' style={{ margin: '8px' }}>Reset Password</Button> {/* Add margin to the buttons */}
                    <Button variant='contained' style={{ margin: '8px', backgroundColor: active ? '#c62828' : 'green' }}>{active ? 'Deactivate' : 'Activate'}</Button> {/* Add margin to the buttons */}
                </div>
            );
        };

        export default UserOptions;
           