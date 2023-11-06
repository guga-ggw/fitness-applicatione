import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Landing from './pages/LandingPage';
import MainPage from './pages/MainPage';
import { AnimatePresence } from 'framer-motion';
import Services from './pages/Services';
import AboutPage from './pages/AboutPage';
import ServiceIdPage from './pages/ServiceIdPage';
function App() {
  const loc = useLocation()

  return (
    <AnimatePresence>
      <Routes location={loc} key={loc.key}>
        <Route path="" element={<Landing />} />
        <Route path='mainpage' element={<MainPage />} />
        <Route path='services' element={<Services />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='services/:id' element={<ServiceIdPage/>}/>
      </Routes>
    </AnimatePresence>

  );
}

export default App;