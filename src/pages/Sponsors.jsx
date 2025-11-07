import React from 'react';
import { motion } from 'framer-motion';

const Sponsors = () => {
  const sponsors = [
    { name: "TechCorp", logo: "/assets/sponsors/techcorp.png", tier: "platinum", description: "Leading technology solutions provider" },
    { name: "InnovateLabs", logo: "/assets/sponsors/innovatelabs.png", tier: "gold", description: "Innovation and research partner" },
    { name: "FutureTech", logo: "/assets/sponsors/futuretech.png", tier: "gold", description: "Future technology enablers" },
    { name: "CodeForge", logo: "/assets/sponsors/codeforge.png", tier: "silver", description: "Software development solutions" },
    { name: "DataDriven", logo: "/assets/sponsors/datadriven.png", tier: "silver", description: "Data analytics and insights" },
    { name: "CloudSync", logo: "/assets/sponsors/cloudsync.png", tier: "silver", description: "Cloud computing solutions" },
    { name: "IoT Solutions", logo: "/assets/sponsors/iotsolutions.png", tier: "bronze", description: "IoT implementation experts" },
    { name: "Embedded Pro", logo: "/assets/sponsors/embeddedpro.png", tier: "bronze", description: "Embedded systems specialists" },
    { name: "RoboTech", logo: "/assets/sponsors/robotech.png", tier: "bronze", description: "Robotics and automation" },
    { name: "CyberSec", logo: "/assets/sponsors/cybersec.png", tier: "bronze", description: "Cybersecurity solutions" },
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

  const getTierSize = (tier) => {
    switch (tier) {
      case 'platinum': return 'w-32 h-32';
      case 'gold': return 'w-28 h-28';
      case 'silver': return 'w-24 h-24';
      case 'bronze': return 'w-20 h-20';
      default: return 'w-20 h-20';
    }
  };

  const groupedSponsors = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) {
      acc[sponsor.tier] = [];
    }
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {});

  const tiers = ['platinum', 'gold', 'silver', 'bronze'];

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
              Our Sponsors & Partners
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proudly supported by industry leaders who share our vision of technological innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sponsors by Tier */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {tiers.map((tier, tierIndex) => (
            <motion.div
              key={tier}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: tierIndex * 0.2 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 capitalize">
                  {tier} Sponsors
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {groupedSponsors[tier]?.map((sponsor, sponsorIndex) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: sponsorIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-secondary/80 to-primary/10 backdrop-blur-sm rounded-xl p-8 border border-primary/20 card-hover text-center">
                      {/* Sponsor logo placeholder */}
                      <div className={`${getTierSize(tier)} bg-gradient-to-br ${getTierColor(tier)} rounded-lg mx-auto mb-6 flex items-center justify-center`}>
                        <span className="text-white font-bold text-2xl">
                          {sponsor.name.charAt(0)}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">{sponsor.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{sponsor.description}</p>
                      
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getTierColor(tier)} text-white`}>
                        {tier.toUpperCase()}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Become a Sponsor CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 border border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Interested in Sponsoring TechXpo 2025?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Join us in making TechXpo 2025 a grand success. Get in touch to explore sponsorship opportunities 
                and be part of the future of technology. Your support helps us create an amazing experience for all participants.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Brand Visibility</h3>
                  <p className="text-gray-300">Get your brand in front of 500+ tech enthusiasts and industry professionals</p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full mx-auto flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Networking</h3>
                  <p className="text-gray-300">Connect with talented students and potential future employees</p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Innovation</h3>
                  <p className="text-gray-300">Support the next generation of tech innovators and entrepreneurs</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8 py-4"
                >
                  Become a Sponsor
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg px-8 py-4"
                >
                  Download Sponsorship Kit
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Sponsors;







