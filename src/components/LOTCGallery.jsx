import React from "react";
import { motion } from "framer-motion";

// 🖼️ Replace these imports with your actual paths
import work1 from "../assets/work1.jpeg";

import work5 from "../assets/work5.jpeg";

import work7 from "../assets/work7.jpeg";
import work8 from "../assets/work8.jpeg";
import work9 from "../assets/work9.jpeg";
import work12 from "../assets/work12.jpeg";

import img33 from "../assets/33.jpeg";
import img99 from "../assets/99.jpeg";
import img8888 from "../assets/8888.jpeg";



const images = [ work5,work1,  img33, work7, work8,work12,img8888,
 img99, work9];

const LOTCGallery = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Community Work / Learning Outside the Classroom (LOTC)
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mt-2 rounded-full" />
        </motion.h2>

        {/* Grid of Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <img
                src={img}
                alt={`Community work ${index + 1}`}
                className="w-full h-48 sm:h-52 md:h-56 object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LOTCGallery;
