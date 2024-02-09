import React, { useEffect, useState } from "react"
import { Container, Grid } from "@mui/material"
import PropertyCard from "../../components/cards/PropertyCard"
import { dummyPropertiesData } from "../../dummy/PropertiesDummy"
import FilterBy from "../../components/filterBy/FilterBy"
import axios from "axios"
import { useParams } from "react-router-dom"

const Properties = () => {

  const [propertyDetail, setPropertyDetail] = useState([]);    
  const token = sessionStorage.getItem("token");
  console.log("<<token    >>"+token)
  
  useEffect(() => {
    const fetchData = async () => {
        try {
          
            const response = await axios.get("http://localhost:8080/api/v1/properties", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setPropertyDetail(response.data);            
        } catch (error) {
            console.error(error);
        }
    }; 
    fetchData();
}, []);
console.log("Properties <<>>>"+ propertyDetail)

  return (
    <>
      <FilterBy />
      <Container>
        <div>Properties</div>
        <Grid container spacing={4}>
          {propertyDetail.map(p => (            
            <PropertyCard id={p.id} key={p.id} images={p.images} address={p.address} price={p.price} numberOfBed={p.numberOfBed} numberOfBathroom={p.numberOfBathroom} homeType={p.homeType} dealType={p.dealType} area={p.area} />
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Properties
