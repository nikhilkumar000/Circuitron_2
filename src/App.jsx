import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import FloatingRegisterButton from './components/FloatingRegisterButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-secondary to-primary/10 relative">
      <ParticleBackground />
      <div className="fixed inset-0 circuit-bg opacity-20 pointer-events-none" style={{ zIndex: 0 }} />
      <Navbar />
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/schedule" element={<Schedule />} />
            {/* Sponsors page removed */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingRegisterButton />
    </div>
  );
}

export default App;