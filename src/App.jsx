import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import OurServices from "./Pages/Services/OurServices";
import Nav from "./Components/Nav/Nav";
import ScrollToTop from "./Components/ScrollToTop";
import BookingPage from "./Pages/Booking/Booking";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="pt-18">
      <ScrollToTop />
      <Nav/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/book" element={<BookingPage />} /> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
