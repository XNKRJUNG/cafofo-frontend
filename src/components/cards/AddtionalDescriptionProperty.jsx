import React, { useState } from "react"
import { Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const AdditionalDescriptionProperty = (props) => {
  const [expanded, setExpanded] = useState(true)
  const {propertyDetail} = props

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card sx={{ maxWidth: 800, m: "auto" }} elevation={0}>
      <CardContent>
        <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: "bold" }}>
          Property Details:
        </Typography>
        <Accordion expanded={expanded} onChange={handleExpandClick}>
          <AccordionDetails>
            <Typography paragraph>{propertyDetail?.factAndFeatures}</Typography>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  )
}

export default AdditionalDescriptionProperty
