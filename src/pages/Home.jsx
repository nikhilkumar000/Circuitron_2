import React from 'react';
import { motion } from 'framer-motion';

// Components
import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import EventsPreview from '../components/EventsPreview';
import GalleryPreview from '../components/GalleryPreview';
import TeamPreview from '../components/TeamPreview';
import ContactPreview from '../components/ContactPreview';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <Hero />
      
      {/* About Preview Section */}
      <AboutPreview />
      
      {/* Events Preview Section */}
      <EventsPreview />
      
  {/* Gallery Preview Section */}
  <GalleryPreview />
      
      {/* Team Preview Section */}
      <TeamPreview />
      
      {/* Contact Preview Section */}
      <ContactPreview />
    </motion.div>
  );
};

export default Home;


