import React from "react";
import { motion } from "framer-motion";

const BoardOfDirectors = () => {
  const directors = [
    { name: "Dipak Chandra Baral", role: "Chairman, Holyvision Technical Campus" },
    { name: "Dr. Tulshi Das Shrestha", role: "Executive Director" },
    { name: "Dr. Soni Mahato", role: "Executive Director" },
    { name: "Dr. Moni Mahto", role: "Board Member" },
    { name: "Dr. Sumintra Nakarmi", role: "Board Member" },
    { name: "Mrs. Amrita Mahaseth", role: "Board Member, Holyvision Technical Campus" },
    { name: "Mrs. Urmila Bhattrai Baral", role: "Board Member" },
  ];

  // Container animation
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Card pop-in: now with opacity + y + scale
  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.85 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 120,
        duration: 0.6,
      },
    },
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-10">
      {/* Header with zoom-in animation */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-4xl font-bold text-center mb-10"
      >
        <span className="text-blue-600">Board</span>{" "}
        <span className="text-red-600">of Directors</span>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto mt-2 rounded-full" />
      </motion.h2>

      <motion.div
        className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {directors.map((director, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.06,
              rotateX: 5,
              rotateY: -5,
              boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
            }}
            className="relative bg-white rounded-2xl shadow-2xl px-6 py-8 w-full max-w-xs border border-blue-100 transition-transform duration-500 transform hover:-translate-y-2 group"
          >
            {/* Shining border on hover */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-500 pointer-events-none z-[-1]"></div>

            <div className="text-xl font-bold text-gray-800 mb-2 text-center">{director.name}</div>
            <div className="text-sm text-gray-500 text-center">{director.role}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BoardOfDirectors;
