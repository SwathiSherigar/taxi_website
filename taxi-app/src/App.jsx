
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import AboutPage from "./Pages/AboutPage"
import ServicesPage from "./Pages/ServicesPage"
import ContactusPage from "./Components/ContactusPage"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import { NavProvider } from "./context/NavContext"
function App() {
  return (
    <>
    <NavProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage/>} />
          <Route path="/contactus" element={<ContactusPage/>}/>
        </Routes>
        <Footer/>
      </Router>
      </NavProvider>
    </>
  );
}

export default App
