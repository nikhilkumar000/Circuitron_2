import React from 'react';
import { motion } from 'framer-motion';

const Sponsors = () => {
  // Sample sponsor data - replace with actual sponsors
  const sponsors = [
    { name: "TechCorp", logo: "/assets/sponsors/techcorp.png", tier: "platinum" },
    { name: "InnovateLabs", logo: "/assets/sponsors/innovatelabs.png", tier: "gold" },
    { name: "FutureTech", logo: "/assets/sponsors/futuretech.png", tier: "gold" },
    { name: "CodeForge", logo: "/assets/sponsors/codeforge.png", tier: "silver" },
    { name: "DataDriven", logo: "/assets/sponsors/datadriven.png", tier: "silver" },
    { name: "CloudSync", logo: "/assets/sponsors/cloudsync.png", tier: "silver" },
    { name: "IoT Solutions", logo: "/assets/sponsors/iotsolutions.png", tier: "bronze" },
    { name: "Embedded Pro", logo: "/assets/sponsors/embeddedpro.png", tier: "bronze" },
  ];

  const getTierColor = (tier) => {
    switch (tier) {
      case 'platinum': return 'from-gray-300 to-white';
      case 'gold': return 'from-yellow-400 to-yellow-600';
      case 'silver': return 'from-gray-400 to-gray-600';
      case 'bronze': return 'from-amber-600 to-amber-800';
      default: return 'from-gray-500 to-gray-700';
    }
  };

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
              Our Sponsors & Partners
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Proudly supported by industry leaders who share our vision of technological innovation
            </p>
          </div>

          {/* Sponsors grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-secondary/80 to-primary/10 backdrop-blur-sm rounded-xl p-6 border border-primary/20 card-hover h-32 flex items-center justify-center">
                  {/* Placeholder for sponsor logo */}
                  <div className="text-center space-y-2">
                    <div className={`w-12 h-12 bg-gradient-to-br ${getTierColor(sponsor.tier)} rounded-lg mx-auto flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">
                        {sponsor.name.charAt(0)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 font-medium">{sponsor.name}</p>
                    <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${getTierColor(sponsor.tier)} text-white`}>
                      {sponsor.tier.toUpperCase()}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to action for sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Interested in Sponsoring?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join us in making TechXpo 2025 a grand success. Get in touch to explore sponsorship opportunities 
              and be part of the future of technology.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Become a Sponsor
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;







