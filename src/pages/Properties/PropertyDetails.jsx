import React from "react"
import ImageCarousel from "../../components/imageCarousel/ImageCarousel"

import image1 from "../../dummy/images/house1.jpeg"
import image2 from "../../dummy/images/house4.jpeg"
import image3 from "../../dummy/images/house3.jpeg"
import image4 from "../../dummy/images/house2.jpeg"
import image5 from "../../dummy/images/house5.jpeg"
import RealtyCard from "../../components/cards/RealtyCard"

const PropertyDetails = () => {
  return (
    <>
      <div>PropertyDetails</div>
      <ImageCarousel items={images} />
      <RealtyCard />
    </>
  )
}

export default PropertyDetails

const images = [
  {
    label: "Image One",
    src: `${image1}`
  },
  {
    label: "Image Two",
    src: `${image2}`
  },
  {
    label: "Image Three",
    src: `${image3}`
  },
  {
    label: "Image Four",
    src: `${image4}`
  },
  {
    label: "Image Five",
    src: `${image5}`
  }
]
