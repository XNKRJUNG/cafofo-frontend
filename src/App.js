// import "./App.css"
import ProtectedRoutes from "./routes/ProtectedRoutes"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./app/store"
import { Provider } from "react-redux"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "./theme/GlobalTheme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ProtectedRoutes />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  )
}

export default App
