import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import car1 from '../assets/1.jpeg';
import car2 from '../assets/2.jpeg';
import car3 from '../assets/3.jpeg';
const services = [
  {
    title: "Airport Transfers",
    description: "Comfortable and reliable airport transfers to ensure you reach your destination on time.",
    image: car1
  },
  {
    title: "Corporate Travel",
    description: "Professional travel solutions for businesses, including chauffeur-driven services.",
    image: car2
  },
  {
    title: "City Tours",
    description: "Explore the city in style with our guided tours and premium transportation.",
    image:car3
  },
  {
    title: "Event Transportation",
    description: "Arrive at your event in elegance with our dedicated transportation services.",
    image:car1
  },
];

const pageAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1 },
};

const ServicePage = () => {
  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-24 overflow-hidden bg-gray-100">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/background-service.jpg')" }}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-24">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12"
          {...pageAnimation}
        >
          Our Premium Services
        </motion.h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          Discover our range of premium transportation services designed to cater to all your travel needs. From airport transfers to corporate travel, city tours, and event transportation, we provide exceptional service to ensure a smooth and enjoyable experience.
        </p>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative rounded-3xl overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img src={service.image} alt={service.title} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-center text-center text-white">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-lg mb-6">{service.description}</p>
                <Link
                  to="/contactus"
                  className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md mt-4 inline-block transition-transform transform hover:scale-105"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicePage;
