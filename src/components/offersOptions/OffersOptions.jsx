import React from 'react';
import OfferOptions from '../offerOptions/OfferOptions';

const OffersOptions = (props) => {

const {offers,fetchData} = props;
console.log(offers);
const offerItems = offers.map((offer, index) => {
    return (
        <div style={{ margin: "10px", padding: "10px", border: "1px solid #ccc", borderRadius: "4px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>

            <OfferOptions
                key={index}
                id={offer.id}
                offerDate={offer.offerDate}
                offerPrice={offer.offerPrice}
                property={offer.property}
                offerStatus={offer.offerStatus}
                cancel_flag={offer.cancel_flag}
                fetchData={fetchData}
            />
        </div>
    )
});
    return (
        <div className='usersDiv' style={{ display: 'flex' }}>
            {offerItems}
        </div>
    )
}

export default OffersOptions;