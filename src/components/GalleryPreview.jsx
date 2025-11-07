import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MotionLink = motion(Link);

const GalleryPreview = () => {
  // Build a small preview list from actual public assets
  const base = import.meta.env.BASE_URL || '/';
  const previewFilenames = [
    'IMG-20251024-WA0001.jpg',
    'IMG-20251024-WA0002.jpg',
    'IMG-20251024-WA0003.jpg',
    'IMG-20251024-WA0004.jpg'
  ];

  const galleryImages = previewFilenames.map((name, idx) => ({
    id: idx + 1,
    src: `${base}assets/gallery/${name}`,
    alt: name.replace(/[-_\.]/g, ' '),
    title: name.replace(/[-_\.]/g, ' ')
  }));

  return (
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
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Relive the moments from our previous events and get a glimpse of what to expect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-secondary/80 to-primary/10 backdrop-blur-sm border border-primary/20"
              >
                <div className="aspect-square overflow-hidden">
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
                  <div className="p-4 text-white">
                    <h3 className="font-semibold">{image.title}</h3>
                    <p className="text-sm text-gray-300">{image.alt}</p>
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
              to="/gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center"
            >
              View Full Gallery
            </MotionLink>
            <div className="mt-6">
              <a
                href="https://drive.google.com/file/d/1Zv-wZ5zcP8t6_KfL859mo2oRgRSMpr4r/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent underline"
              >
                View Detailed Brochure (Google Drive)
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;
