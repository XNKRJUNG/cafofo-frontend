import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ErrorPage from "../pages/Error/ErrorPage"
import HomePage from "../pages/Home/HomePage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
