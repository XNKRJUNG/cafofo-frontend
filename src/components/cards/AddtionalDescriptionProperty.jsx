import React, { useState } from "react"
import { Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const AdditionalDescriptionProperty = () => {
  const [expanded, setExpanded] = useState(true)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card sx={{ maxWidth: 800, m: "auto" }} elevation={0}>
      <CardContent>
        <Typography variant="h6" gutterBottom component="div">
          Property details
        </Typography>
        <Accordion expanded={expanded} onChange={handleExpandClick}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Nice solid home in a great part of town. Come see this nice 2 bedroom 1 bath home with a nice oversized 2 car garage...</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>Fully fenced in backyard for privacy. New deck on the front of the home makes this home very inviting. Inside you have plenty of space in this cozy home. The living room, kitchen and both bedrooms upstairs are all good size rooms. Basement is a full basement the owners have started to finish for extra living space. A new owner could possibly take off where they left off. Does need a little TLC such as flooring but the home also has hard wood floors under the carpet. Call an agent today for a showing.</Typography>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  )
}

export default AdditionalDescriptionProperty
