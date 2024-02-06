import { createTheme } from "@mui/material/styles"

export const theme = createTheme({
  components: {
    // Style every MUI component
    MuiContainer: {
      styleOverrides: {
        root: {
          // Set max-width for the content and auto margin for center alignment
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "16px", // MUI default padding
          paddingRight: "16px" // MUI default padding
        }
      }
    }
  }
})
