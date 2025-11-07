import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Build gallery images from public assets folder. Update this list if you add/remove images in public/assets/gallery
  const galleryFilenames = [
    'IMG-20251024-WA0001.jpg',
    'IMG-20251024-WA0002.jpg',
    'IMG-20251024-WA0003.jpg',
    'IMG-20251024-WA0004.jpg',
    'IMG-20251024-WA0005.jpg',
    'IMG-20251024-WA0008.jpg'
  ];

  const base = import.meta.env.BASE_URL || '/';

  const galleryImages = galleryFilenames.map((name, idx) => ({
    id: idx + 1,
    src: `${base}assets/gallery/${name}`,
    alt: name.replace(/[-_\.]/g, ' '),
    title: name.replace(/[-_\.]/g, ' '),
    category: 'Gallery'
  }));

  const categories = ['All', 'Ceremony', 'Exhibition', 'Workshop'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
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
              Gallery
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Relive the amazing moments from our previous events and get excited for TechXpo 2025
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

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary/80 to-primary/10 backdrop-blur-sm border border-primary/20 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <LazyLoadImage
                    src={image.src}
                    alt={image.alt}
                    effect="blur"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    wrapperClassName="w-full h-full"
                  />
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white w-full">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                    <p className="text-sm text-gray-300">{image.alt}</p>
                    <span className="inline-block mt-2 px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors duration-200 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image container */}
              <div className="bg-gradient-to-br from-secondary to-primary/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
                {/* Placeholder for actual image */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-center space-y-4">
                    <svg className="w-16 h-16 text-primary mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-lg text-gray-300">{selectedImage.title}</p>
                  </div>
                </div>
                
                {/* Image info */}
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
                  <p className="text-gray-300">{selectedImage.alt}</p>
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;


