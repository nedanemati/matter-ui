import { useState } from "react";
import Header from "../components/ui/Header";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Footer from "./ui/Footer";
import Services from "./ui/Services";
import CustomSoftware from "./ui/CustomSoftware.jsx ";
import About from "./ui/About";
import Contact from "./ui/Contact";
import Estimate from "./ui/Estimate";
import MobileApps from "./ui/MobileApps";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} setSelectedIndex={setSelectedIndex} selectedIndex={selectedIndex} />

        <Routes>
          <Route exact path="/" element={<LandingPage />} />

          <Route path="/services" element={<Services />} />
          <Route path="/customsoftware" element={<CustomSoftware />} />
          <Route path="/mobileapps" element={<MobileApps />} />
          <Route path="/websites" element={<>websites</>} />
          <Route path="/revolotion" element={<>revolotion</>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/estimate" element={<Estimate />} />
        </Routes>
        <Footer value={value} setValue={setValue} setSelectedIndex={setSelectedIndex} selectedIndex={selectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
