import React, { useState } from "react"
import { Box, Paper, IconButton, ButtonBase, Typography, useTheme } from "@mui/material"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import { styled } from "@mui/material/styles"

const CarouselContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%" // Adjust the width as needed
}))

const StyledPaper = styled(Paper)({
  position: "relative",
  height: 400, // Adjust the height as needed
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "contain", // Updated to show the whole image without clipping
    display: "block"
  }
})

const ThumbnailContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(2) // Adjust spacing as needed
}))

const Thumbnail = styled(ButtonBase)(({ theme }) => ({
  width: 50, // Adjust the width as needed
  height: 50, // Adjust the height as needed
  overflow: "hidden",
  border: "2px solid",
  borderColor: "transparent",
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(1),
  "&.active": {
    borderColor: theme.palette.primary.main
  },
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }
}))

const CarouselItem = ({ item }) => (
  <StyledPaper elevation={4}>
    <img src={item.src} alt={item.label} />
  </StyledPaper>
)

const ImageCarousel = ({ items }) => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = items.length

  const handleNext = () => {
    setActiveStep(prevActiveStep => (prevActiveStep + 1) % maxSteps)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => (prevActiveStep - 1 + maxSteps) % maxSteps)
  }

  const handleStepChange = step => {
    setActiveStep(step)
  }

  return (
    <CarouselContainer>
      <IconButton
        onClick={handleBack}
        disabled={activeStep === 0}
        sx={{
          position: "absolute",
          top: "50%",
          left: 5,
          transform: "translateY(-50%)",
          zIndex: 1,
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent background
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)" // Darken on hover for better visibility
          }
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>

      <CarouselItem item={items[activeStep]} />

      <IconButton
        onClick={handleNext}
        disabled={activeStep === maxSteps - 1}
        sx={{
          position: "absolute",
          top: "50%",
          right: 5,
          transform: "translateY(-50%)",
          zIndex: 1,
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent background
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.7)" // Darken on hover for better visibility
          }
        }}
      >
        <KeyboardArrowRight />
      </IconButton>

      <ThumbnailContainer>
        {items.map((item, index) => (
          <Thumbnail key={item.label} onClick={() => handleStepChange(index)} className={activeStep === index ? "active" : ""}>
            <img src={item.src} alt={item.label} />
          </Thumbnail>
        ))}
      </ThumbnailContainer>

      <Box
        sx={{
          position: "absolute",
          bottom: theme.spacing(2),
          left: theme.spacing(2),
          color: theme.palette.text.primary
        }}
      >
        <Typography
          variant="body2"
          width={65}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            color: "white",
            borderRadius: 10,
            display: "flex",
            justifyContent: "center"
          }}
        >
          {activeStep + 1} / {maxSteps}
        </Typography>
      </Box>
    </CarouselContainer>
  )
}

export default ImageCarousel
