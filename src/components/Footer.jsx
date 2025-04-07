import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../assets/logo.png";
import bgImage from "../assets/syringe.jpg"; // Make sure to import your background image

const Footer = () => {
  return (
    <footer
      className="text-white relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#006241", // Fallback color
      }}
    >
      {/* Smooth Fade-in Effect on Load */}
      <div className="py-10 px-6 sm:px-12 bg-black bg-opacity-70 animate-fadeIn">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* About Section */}
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-[120px] w-[130px]" />
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/share/16GUP3t2K6/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-teal-700 hover:bg-teal-500 hover:text-white transition-all duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/explore/locations/1337305383009807/enlight-academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-teal-700 hover:bg-teal-500 hover:text-white transition-all duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Our Courses */}
          <div>
            <h2 className="text-xl font-bold mb-4">Our Courses</h2>
            <ul className="space-y-2 text-sm">
              {[
                { title: "PCL In General Medicine (HA)", link: "/pcl-general-medicine" },
                { title: "Diploma In Pharmacy", link: "/diploma-pharmacy" },
                { title: "PCL In Nursing", link: "/pcl-nursing" },
              ].map((course, index) => (
                <li key={index}>
                  <Link to={course.link} className="hover:text-green-300 transition-all duration-300">
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Helpful Links</h2>
            <ul className="space-y-2 text-sm">
              {["About Us", "Contact Us", "Gallery"].map((link, index) => (
                <li key={index}>
                  <Link
                    to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-green-300 transition-all duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2">
                <MdEmail className="text-lg text-green-300" />
                <a href="mailto:hvtcampus@gmail.com" className="hover:text-green-300 transition-all duration-300">
                  hvtcampus@gmail.com
                </a>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                <FaPhoneAlt className="text-lg text-green-300" />
                <div className="flex flex-col">
                  <a href="tel:+9779809494619" className="hover:text-green-300 transition-all duration-300">
                    +977 9809494619
                  </a>
                  <a href="tel:+015365755" className="hover:text-green-300 transition-all duration-300">
                    01 5365755
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-lg text-green-300" />
                <span className="hover:text-green-300 transition-all duration-300">
                  Putalisadak, Kathmandu, Nepal
                </span>
              </li>
            </ul>
            <Link
              to="/contact-us"
              className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-blue-800 bg-opacity-80 text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Holy Vision Technical Campus. All Rights Reserved. Designed by{" "}
          <span className="font-bold hover:text-green-300 transition-all duration-300">Clouds Nepal Web</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
