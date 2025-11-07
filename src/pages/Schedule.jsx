import React from 'react';
import { motion } from 'framer-motion';

const Schedule = () => {
  const scheduleData = [
    {
      day: "November 10, 2025",
      events: [
        { time: "09:00 - 10:00", title: "Registration & Welcome", location: "Main Auditorium", type: "General" },
        { time: "10:00 - 10:30", title: "Opening Ceremony", location: "Main Auditorium", type: "Ceremony" },
        { time: "10:30 - 11:00", title: "Keynote Address", location: "Main Auditorium", type: "Keynote" },
        { time: "11:00 - 11:15", title: "Short Break", location: "Lobby", type: "Break" },
        { time: "11:15 - 13:00", title: "Robo Race", location: "Robotics Lab", type: "Competition" },
        { time: "13:00 - 15:00", title: "Project Exhibition", location: "Exhibition Hall", type: "Exhibition" },
        { time: "15:15 - 17:00", title: "Robo War", location: "Arena / Robotics Lab", type: "Competition" },
        { time: "17:00 - 18:00", title: "Award Ceremony & Closing", location: "Main Auditorium", type: "Ceremony" },
        { time: "18:00 - 18:15", title: "Group Photo & Farewell", location: "Main Hall", type: "General" }
      ]
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Competition': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Workshop': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Exhibition': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'Ceremony': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'Keynote': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'Networking': return 'bg-pink-500/20 text-pink-300 border-pink-500/30';
      case 'Break': return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
      default: return 'bg-primary/20 text-primary border-primary/30';
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
              Event Schedule
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Plan your TechXpo 2025 experience with our detailed schedule of events and activities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schedule Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {scheduleData.map((day, dayIndex) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                  {day.day}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
              </div>

              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <motion.div
                    key={eventIndex}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: eventIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-secondary/80 to-primary/10 backdrop-blur-sm rounded-xl p-6 border border-primary/20 card-hover"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <div className="w-20 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{event.time}</span>
                          </div>
                          <h3 className="text-xl font-bold text-white">{event.title}</h3>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-300">
                          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getTypeColor(event.type)}`}>
                          {event.type}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-gradient-to-br from-secondary to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Important Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Registration</h3>
                <p className="text-gray-300">Registration opens at 9:00 AM on Day 1. Please arrive early to avoid delays.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Schedule Changes</h3>
                <p className="text-gray-300">Schedule is subject to change. Check the notice board for updates.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Support</h3>
                <p className="text-gray-300">Need help? Visit the information desk or contact our volunteers.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Schedule;


