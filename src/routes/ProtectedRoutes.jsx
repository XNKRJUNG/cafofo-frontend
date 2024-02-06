import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ErrorPage from "../pages/Error/ErrorPage"
import HomePage from "../pages/Home/HomePage"
import Properties from "../pages/Properties/Properties"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
