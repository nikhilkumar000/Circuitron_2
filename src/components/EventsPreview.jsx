import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);
import { events } from '../data/eventsData';

const EventsPreview = () => {
  const featuredEvents = events.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Featured Events
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover exciting competitions, workshops, and exhibitions designed to challenge and inspire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-secondary/80 to-primary/10 backdrop-blur-sm rounded-xl p-6 border border-primary/20 card-hover"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                    <p className="text-primary font-semibold text-sm">{event.tagline}</p>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {event.description.substring(0, 100)}...
                  </p>
                  
                  <div className="pt-2">
                    {event.registrationLink ? (
                      <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" className="w-full block">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full btn-primary py-2 text-sm">
                          Know More / Register
                        </motion.button>
                      </a>
                    ) : (
                      <MotionLink to="/events" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full text-sm btn-secondary py-2 inline-flex items-center justify-center">
                        Know More
                      </MotionLink>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <MotionLink
              to="/events"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center"
            >
              View All Events
            </MotionLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsPreview;


