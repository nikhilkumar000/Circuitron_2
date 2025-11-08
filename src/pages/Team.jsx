import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { facultyCoordinators, executiveTeam, coreTeam } from '../data/teamData';

const Team = () => {

  // ✅ Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
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

      {/* ✅ Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">Our Team</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the passionate minds behind TechXpo 2025 - the Circuitron Crew
            </p>
          </motion.div>
        </div>
      </section>

      {/* ✅ Faculty Coordinators */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >

            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">Faculty Coordinators</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>

              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our mentors and guides who shape the future of technology at our institute
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >

              {facultyCoordinators.map((member) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >

                  <div className="bg-gradient-to-br from-secondary/80 to-primary/10 backdrop-blur-sm rounded-xl p-6 border border-primary/20 card-hover">

                    {/* ✅ Image */}
                    <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 
                                    rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                      {member.img ? (
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                        </svg>
                      )}
                    </div>

                    {/* ✅ Text */}
                    <div className="text-center space-y-3">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-primary font-semibold">{member.position}</p>
                      <p className="text-sm text-gray-300">{member.description}</p>
                    </div>

                  </div>
                </motion.div>
              ))}

            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ✅ Executive Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >

            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">Executive Team</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>

              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                The leadership team that drives our vision and ensures the success of every event
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >

              {executiveTeam.map((member) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >

                  <div className="bg-gradient-to-br from-secondary/80 to-primary/10 backdrop-blur-sm 
                                  rounded-xl p-6 border border-primary/20 card-hover">

                    {/* ✅ Image */}
                    <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 
                                    rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                      {member.img ? (
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                        </svg>
                      )}
                    </div>

                    {/* ✅ Text */}
                    <div className="text-center space-y-3">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-primary font-semibold">{member.position}</p>
                      {/* {member.rollNo && <p className="text-sm text-gray-300">{member.rollNo}</p>} */}
                    </div>

                  </div>
                </motion.div>
              ))}

            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ✅ Core Team */}
      <section className="py-20 bg-gradient-to-br from-secondary to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >

            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">Core Team Members</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>

              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                The dedicated individuals who work tirelessly to make every event a success
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >

              {coreTeam.map((member) => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >

                  <div className="bg-gradient-to-br from-secondary/80 to-primary/10 backdrop-blur-sm 
                                  rounded-xl p-6 border border-primary/20 card-hover">

                    {/* ✅ Image */}
                    <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 
                                    rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                      {member.img ? (
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                        </svg>
                      )}
                    </div>

                    {/* ✅ Text */}
                    <div className="text-center space-y-2">
                      <h3 className="text-lg font-bold text-white">{member.name}</h3>
                      <p className="text-primary font-semibold text-sm">{member.role}</p>
                      {/* {member.rollNo && <p className="text-sm text-gray-300">{member.rollNo}</p>} */}
                    </div>

                  </div>
                </motion.div>
              ))}

            </motion.div>
          </motion.div>

        </div>
      </section>

    </motion.div>
  );
};

export default Team;