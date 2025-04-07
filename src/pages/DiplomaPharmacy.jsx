import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticularDirectContactUs from "../components/ParticularDirectContactUs";
import firstAidImage from "../assets/five.jpg"; // Replace with correct image path

const FirstAidEmergencyManagementPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[350px] flex items-center justify-center mt-[60px]"
        style={{ backgroundImage: `url(${firstAidImage})` }}
      >
        <motion.div
          className="bg-black bg-opacity-60 p-8 text-white text-center rounded-lg shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-extrabold">First Aid & Emergency Management</h2>
          <p className="text-lg mt-3">
            Gain essential skills to provide immediate medical care in emergencies.
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* What You'll Learn */}
        <section className="text-center mb-12">
          <motion.h3
            className="text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            What You’ll Learn
          </motion.h3>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* First Aid Basics */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-green-700">First Aid Basics</h4>
            <ul className="list-disc list-inside text-gray-700 mt-3 leading-relaxed">
              <li>Assessing and responding to medical emergencies</li>
              <li>CPR and AED usage for adults, children, and infants</li>
              <li>Wound care and bleeding control techniques</li>
              <li>Fracture stabilization and injury management</li>
            </ul>
          </motion.div>

          {/* Emergency Management Skills */}
          <motion.div
            className="bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold text-green-700">Emergency Response Skills</h4>
            <ul className="list-disc list-inside text-gray-700 mt-3 leading-relaxed">
              <li>Handling heart attacks, strokes, and seizures</li>
              <li>Managing burns, choking, and poisoning cases</li>
              <li>Disaster preparedness and evacuation techniques</li>
              <li>Psychological first aid and crisis intervention</li>
            </ul>
          </motion.div>
        </section>

        {/* Why Choose First Aid & Emergency Management? */}
        <section className="mt-16 bg-green-50 p-10 rounded-lg shadow-md text-center">
          <motion.h3
            className="text-2xl font-bold text-green-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Why Choose First Aid & Emergency Management?
          </motion.h3>
          <p className="text-gray-700 mt-4 leading-relaxed max-w-4xl mx-auto">
            First aid and emergency response skills are **life-saving and crucial** in various professions.  
            Whether you’re a **healthcare provider, teacher, or workplace safety officer**, this training 
            equips you with **critical intervention skills** during medical emergencies.
          </p>
        </section>

        {/* Certification & Career Growth */}
        <section className="mt-16 bg-gray-100 p-10 rounded-lg shadow-md text-center">
          <motion.h3
            className="text-2xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Certification & Career Growth
          </motion.h3>
          <p className="text-gray-700 mt-4 leading-relaxed max-w-4xl mx-auto">
            Completing this training grants you a **recognized certification**,  
            making you a valuable asset in **hospitals, schools, corporate sectors, and public safety organizations**.
          </p>
        </section>

        {/* Contact Form */}
        <ParticularDirectContactUs course="First Aid and Emergency Management" />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FirstAidEmergencyManagementPage;