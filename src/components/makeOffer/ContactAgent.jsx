import React from "react"
import { Button, IconButton, TextField, Dialog, DialogContent, DialogTitle } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close" // Import CloseIcon

const ContactAgent = ({ open, onClose }) => {
  // State for form inputs
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  })

  // Handle input change
  const handleChange = event => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  // Handle form submission
  const handleSubmit = event => {
    event.preventDefault()
    console.log(formData)
    // Here you would typically send the data to a server or another handler
  }

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        Contact Agent
        <IconButton onClick={onClose} style={{ position: "absolute", right: "1rem", top: "1rem" }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField autoFocus margin="dense" id="name" name="name" label="Name" type="text" fullWidth variant="outlined" value={formData.name} onChange={handleChange} />
          <TextField margin="dense" id="phone" name="phone" label="Phone" type="tel" fullWidth variant="outlined" value={formData.phone} onChange={handleChange} />
          <TextField margin="dense" id="email" name="email" label="Email" type="email" fullWidth variant="outlined" value={formData.email} onChange={handleChange} />
          <TextField margin="dense" id="message" name="message" label="Message" type="text" fullWidth multiline rows={4} variant="outlined" value={formData.message} onChange={handleChange} />
          <Button type="submit" color="primary" variant="contained" fullWidth>
            Make an offer
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ContactAgent
