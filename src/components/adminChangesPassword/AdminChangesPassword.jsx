import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminChangesPassword = () => {
    const [password1, setpassword1] = useState('');
    const [password2, setpassword2] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

    //now make the request to the server to change the password
    const handleChangePassword = async (id, password) => {
        if (password1 !== password2) {
            alert("Passwords do not match");
            return;
        }

            const token = sessionStorage.getItem("token");
            
           await axios.post("http://localhost:8080/api/v1/admin/reset-password", {
                userId: id,
                newPassword: password
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then((response) => {
                console.log(response);
                navigate(-1);
            }).catch((error) => {
                console.error(error);
            });
    };

    const handleConfirm = () => {
        handleChangePassword(id, password1);
        
    };

    return (
        <div style={{ marginTop: '30vh' }}>
            <div style={{ margin: '10px', display: 'flex', justifyContent: 'center' }}>
                <TextField
                placeholder="Type Your Password"
                type="password"
                value={password1}
                onChange={(e) => setpassword1(e.target.value)}
                />
            </div>
            <div style={{ margin: '10px', display: 'flex', justifyContent: 'center' }}>
                    <TextField
                    placeholder="Re-type Your Password"
                    type="password"
                    value={password2}
                    onChange={(e) => setpassword2(e.target.value)}
                />
            </div>
            <div style={{ margin: '10px', display: 'flex', justifyContent: 'center' }}>
                <Button onClick={handleConfirm} variant="contained" color="primary">
                    CONFIRM
                </Button>
            </div>

        </div>
    );
};

export default AdminChangesPassword;