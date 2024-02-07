// import "./App.css"
import ProtectedRoutes from "./routes/ProtectedRoutes"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "./theme/GlobalTheme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProtectedRoutes/>
    </ThemeProvider>
  )
}

export default App
