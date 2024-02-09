import React, { useState } from 'react';
import { Grid, TextField, Select, MenuItem, Button, InputLabel, Typography } from '@mui/material';
import {useLocation, useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditProperty = () => {
    const location = useLocation();
    const property = location.state.property;
    const navigate = useNavigate();
    console.log("property id "+ property.id);
    const [propertyName, setPropertyName] = useState(property.propertyName);
    const [country, setCountry] = useState(property.address.country);
    const [state, setState] = useState(property.address.state);
    const [city, setCity] = useState(property.address.city);
    const [street, setStreet] = useState(property.address.street);
    const [number, setNumber] = useState(property.address.number);
    const [zip, setZip] = useState(property.address.zip);
    const [price, setPrice] = useState(property.price);
    const [numberOfBed, setNumberOfBed] = useState(property.numberOfBed);
    const [numberOfBathRoom, setNumberOfBathRoom] = useState(property.numberOfBathRoom);
    const [factAndFeatures, setFactAndFeatures] = useState(property.factAndFeatures);
    const [homeType, setHomeType] = useState(property.homeType);
    const [dealType, setDealType] = useState(property.dealType);
    const [area, setArea] = useState(property.area);
    const [image, setImage] = useState('');
    const[approvalStatus,setApprovalStatus] = useState(property.approvalStatus)
    const param = useParams();


    const handleUpload = () => {
        // Add your logic for handling form upload. Erase old values and save new ones
        //upload: 
        //save it
    };
    const token = sessionStorage.getItem("token");

    const handleUpdate = () => {
        const data = {
            id: property.id,
            image: [
                {
                    path: "1707450671385_Blog-Photos-3-1024x819.png"
                },
                {
                    path: "1707450671397_for-rent-sign-in-front-of-gray-house.jpg"
                }
        
            ]   ,            
            address:{
                country: country,
                state: state ,
                city: city,
                street:street,
                number:number,
                zip:zip
            },
            price: price,
            numberOfBed: numberOfBed,
            numberOfBathRoom: numberOfBathRoom,
            factAndFeatures: factAndFeatures,
            homeType: homeType,
            dealType: dealType,
            area: area,
            propertyName: propertyName  ,
            approvalStatus:approvalStatus 
        }    
        
        axios
    .put(`http://localhost:8080/api/v1/properties/`+param.id, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    .then((response) => {
        // Handle successful response here
        // For example, redirect to another page
        alert("PROPERTY EDIT SUCCESSFULLY!");
        navigate("/owner-dashboard");
    })
    .catch((error) => {
        // Handle error here
        alert("PROPERTY EDIT FAILED")
        console.error("Error:", error)});
      
          
        };
    
    

    return (
        
        <Grid container justifyContent="center" alignItems="center" spacing={2} marginTop={1}>
            <Typography variant="h3" align="center">
                    UPDATE PROPERTY
                </Typography>
            <Grid item xs={12} container justifyContent="center" alignItems="center">
                <TextField label="Property Name" id="propertyName" value={propertyName} onChange={(e) => setPropertyName(e.target.value)} fullWidth />
            </Grid>
            <Grid item xs={12} container justifyContent="center" alignItems="center">
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                        <TextField label="Number" id="number" value={number} onChange={(e) => setNumber(e.target.value)} sx={{ width: '100%' }} />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                        <TextField label="State" id="state" value={state} onChange={(e) => setState(e.target.value)} sx={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Street" id="street" value={street} onChange={(e) => setStreet(e.target.value)} sx={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="ZIP" id="zip" value={zip} onChange={(e) => setZip(e.target.value)} sx={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="City" id="city" value={city} onChange={(e) => setCity(e.target.value)} sx={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Country" id="country" value={country} onChange={(e) => setCountry(e.target.value)} sx={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} container justifyContent="center" alignItems="center">
                <TextField label="Price" id="price" value={price} onChange={(e) => setPrice(e.target.value)} fullWidth />
            </Grid>
            <Grid item xs={12} container justifyContent="center" alignItems="center">
                <TextField label="Number of Bedrooms" id="numberOfBed" value={numberOfBed} onChange={(e) => setNumberOfBed(e.target.value)} fullWidth />
            </Grid>
            <Grid item xs={12} container justifyContent="center" alignItems="center">
                <TextField label="Number of Bathrooms" id="numberOfBathRoom" value={numberOfBathRoom} onChange={(e) => setNumberOfBathRoom(e.target.value)} fullWidth />
            </Grid>
            <Grid item xs={12} container justifyContent="center" alignItems="center">
                <TextField label="Facts and Features" id="factAndFeatures" value={factAndFeatures} onChange={(e) => setFactAndFeatures(e.target.value)} fullWidth />
            </Grid>
            <Grid item xs={12} container justifyContent="center" alignItems="center">
                <Grid item xs={12} marginLeft={2} justifyContent="center" alignItems="center">
                    <InputLabel htmlFor="homeType">Home Type</InputLabel>
                </Grid>
                <Select id="homeType" value={homeType} onChange={(e) => setHomeType(e.target.value)} fullWidth>
                    <MenuItem value="APARTMENT">APARTMENT</MenuItem>
                    <MenuItem value="HOUSE">HOUSE</MenuItem>
                    <MenuItem value="CONDO">CONDO</MenuItem>
                    <MenuItem value="TOWNHOUSE">TOWNHOUSE</MenuItem>
                    <MenuItem value="LAND">LAND</MenuItem>
                    <MenuItem value="OTHER">OTHER</MenuItem>
                    {/* Add other options for home type */}
                </Select>
            </Grid>
            <Grid item xs={12} container justifyContent="center" alignItems="center">
            <Grid item xs={12} marginLeft={2} justifyContent="center" alignItems="center">            
                <InputLabel htmlFor="dealType">Deal Type</InputLabel>
            </Grid>
                <Select id="dealType" value={dealType} onChange={(e) => setDealType(e.target.value)} fullWidth>
                    <MenuItem value="FOR_SALE">FOR SALE</MenuItem>
                    <MenuItem value="FOR_RENT">FOR RENT</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} container justifyContent="center" alignItems="center">
                <TextField label="Area" id="area" value={area} onChange={(e) => setArea(e.target.value)} fullWidth />
            </Grid>
            <Grid item xs={12} container justifyContent="center" alignItems="center">
                <div>
                    <InputLabel htmlFor="image">Images</InputLabel>
                    <input type="file" id="image" accept="image/*" multiple  onChange={(event) => {
                                                                                            setImage(event.target.files)}}/>
                    <Grid item marginTop={1} xs={12} container justifyContent="center" alignItems="center">
                        <Button variant="contained" color='success' onClick={handleUpload} sx={{ width: '30%' }}>Upload</Button>
                    </Grid>

                </div>
            </Grid>
            <Grid item xs={12} container justifyContent="center" alignItems="center">
                <Button variant="contained" onClick={handleUpdate} sx={{ width: '10%' , margin:'10px'}}>Update Property</Button>
                <Button variant="contained" color='error' onClick={()=>{navigate(-1)}} sx={{ width: '10%', margin:'10px' }}>Back</Button>
            </Grid>
        </Grid>
    );
};

export default EditProperty;
