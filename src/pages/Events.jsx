import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { events } from '../data/eventsData';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const categories = ['All', 'Technical', 'Robotics', 'Workshop', 'Exhibition'];

  const filteredEvents = selectedCategory === 'All' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">
              Events & Competitions
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our exciting lineup of competitions, workshops, and exhibitions designed to challenge and inspire
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gradient-to-br from-secondary to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/50'
                    : 'bg-secondary/50 text-gray-300 hover:bg-primary/20 hover:text-primary border border-primary/20'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-secondary/80 to-primary/10 backdrop-blur-sm rounded-xl p-6 border border-primary/20 card-hover cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="space-y-4">
                  {/* Event Header */}
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-white">{event.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        event.category === 'Technical' ? 'bg-blue-500/20 text-blue-300' :
                        event.category === 'Robotics' ? 'bg-green-500/20 text-green-300' :
                        event.category === 'Workshop' ? 'bg-purple-500/20 text-purple-300' :
                        'bg-orange-500/20 text-orange-300'
                      }`}>
                        {event.category}
                      </span>
                    </div>
                    <p className="text-primary font-semibold text-sm">{event.tagline}</p>
                  </div>
                  
                  {/* Event Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {event.description}
                  </p>
                  
                  {/* Action Button (only Know More / registration link) */}
                  <div className="flex space-x-2">
                    {event.registrationLink ? (
                      <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full btn-primary py-2 text-sm"
                        >
                          Know More / Register
                        </motion.button>
                      </a>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 btn-secondary py-2 text-sm"
                        onClick={() => setSelectedEvent(event)}
                      >
                        Know More
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Event Modal */}
      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gradient-to-br from-secondary to-primary/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-primary/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-white">{selectedEvent.title}</h2>
                  <p className="text-primary font-semibold text-lg">{selectedEvent.tagline}</p>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
                <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">{selectedEvent.description}</p>

                <div className="space-y-2">
                  <h4 className="text-white font-semibold">Requirements</h4>
                  <p className="text-sm text-gray-300">{selectedEvent.requirements}</p>
                </div>

                <div className="flex space-x-4 pt-4">
                  {selectedEvent.registrationLink ? (
                    <a href={selectedEvent.registrationLink} target="_blank" rel="noopener noreferrer">
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary">
                        Register / Know More
                      </motion.button>
                    </a>
                  ) : null}
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-secondary" onClick={() => setSelectedEvent(null)}>
                    Close
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Events;
