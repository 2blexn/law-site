import Header from './components/Header/Header.jsx'
import Carousel from "./components/Carousel/Carousel.jsx";
import Services from "./components/Services/Services.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ContactPage from "./components/ContactForm/ContactPage.jsx";
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css'

function ScrollToSection() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/' && location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 80; 
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);
  return null;
}

function App() {
  return (
    <>
      <Header />
      <ScrollToSection />
      <Routes>
        <Route path="/" element={
          <>
            <Carousel/>
            <Services />
            <Footer />
          </>
        } />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
