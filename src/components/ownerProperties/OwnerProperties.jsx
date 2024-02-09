import React from 'react';
import UserOptions from '../userOptions/userOptions';
import PropertyCard from '../cards/PropertyCard';
import { Button } from '@mui/material';
import { handleBreakpoints } from '@mui/system';
import { Create } from '@mui/icons-material';
import CreatePropertyButtons from '../buttonComponent/CreatePropertyButtons';

const OwnerProperties = (props) => {

const {properties,fetchData} = props;
console.log(properties);
const propertyItems = properties.map((property, index) => {
    return (
        <div style={{ margin: "10px", padding: "10px", border: "1px solid #ccc", borderRadius: "4px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
            <PropertyCard
                key={index}
                id = {property.id}
                images={property.images}
                propertyName={property.propertyName}
                address={property.address}
                price={property.price}
                numberOfBed={property.numberOfBed}
                numberOfBathroom={property.numberOfBathroom}
                homeType={property.homeType}
                dealType={property.dealType}
                area={property.area}
                fetchData={fetchData}
            />
            <CreatePropertyButtons property={property} />
        </div>
    )
});
    return (
        <div className='usersDiv' style={{ display: 'flex' }}>
            {propertyItems}
        </div>
    )
}

export default OwnerProperties;