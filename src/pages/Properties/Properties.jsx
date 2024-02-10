import React, { useEffect, useState } from "react"
import { Container, Grid } from "@mui/material"
import PropertyCard from "../../components/cards/PropertyCard"
import { dummyPropertiesData } from "../../dummy/PropertiesDummy"
import FilterBy from "../../components/filterBy/FilterBy"
import axios from "axios"
import { useParams } from "react-router-dom"

const Properties = () => {
  const param = useParams()
  const [props, setProps] = useState([])
  // const [propertyDetail, setPropertyDetail] = useState([]);

  // const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqYW5lLnNtaXRoQGV4YW1wbGUuY29tIiwiaWF0IjoxNzA3NDU0NjUyLCJleHAiOjE3MDc0NTYwOTJ9.eylWboPKz1N1OrLBJKmpdXSaVTwgVvyD_psnUrDltP4"
  //   useEffect(() => {
  //     const fetchPropertiesData = async () => {
  //         try {
  //           console.log(`Fetching data from: http://localhost:8080/api/v1/properties`)
  //             // const token = sessionStorage.getItem("token");
  //             const response = await axios.get("http://localhost:8080/api/v1/properties", {
  //               headers: {
  //                 Authorization: `Bearer ${token}`,
  //             },
  //           });
  //           setPropertyDetail(response.data);
  //         } catch (error) {
  //           console.error(error);
  //       }
  //     };
  //     fetchPropertiesData();
  // }, []);
  // console.log("Properties <<>>>"+ propertyDetail)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem("token")
        const response = await axios.get("http://localhost:8080/api/v1/commom/properties?dealtype=" + param.dealType, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        console.log("response", response.data)
        const propertiesWithImages = response?.data.map((property, index) => {
          // Find the corresponding dummy data image by matching IDs
          property.image = dummyPropertiesData[index].images
          return property
        })
        // setProperties(propertiesWithImages);
        // setProps(response.data)
        setProps(propertiesWithImages)
        console.log("Resulttt" + propertiesWithImages)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [param.dealType])

  console.log(props)

  const handleSearch = filteredData => {
    setProps(filteredData)
  }

  return (
    <>
      <FilterBy onSearch={handleSearch} />
      <Container>
        <div>Properties</div>
        <Grid container spacing={4}>
          {/* {propertyDetail.map(p => (            
            <PropertyCard id={p.id} key={p.id} images={p.images} address={p.address} price={p.price} numberOfBed={p.numberOfBed} numberOfBathroom={p.numberOfBathroom} homeType={p.homeType} dealType={p.dealType} area={p.area} /> */}
          {props.map(p => (
            <PropertyCard key={p.id} id={p.id} images={p.image} address={p.address} price={p.price} numberOfBed={p.numberOfBed} numberOfBathRoom={p.numberOfBathRoom} homeType={p.homeType} dealType={p.dealType} area={p.area} />
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Properties
