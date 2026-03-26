
import { img1, img2, img3, img4 } from "../../imports";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const OurServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      image: img1,
      title: "Simple Beat with Lashes",
      description: "Eye makeup focus with lash application",
      duration: "45 mins",
      price: "$75",
    },
    {
      id: 2,
      image: img2,
      title: "Full Face with Lashes",
      description: "Complete makeup coverage including lashes",
      duration: "60 mins",
      price: "$95",
    },
    {
      id: 3,
      image: img2,
      title: "Full Face with Lashes and Gele",
      description: "Full makeup plus traditional gele styling",
      duration: "90 mins",
      price: "$145",
    },
    {
      id: 4,
      image: img4,
      title: "Photoshoot Service",
      description: "Professional makeup for photo sessions.",
      duration: "74 mins",
      price: "$120",
    },
    {
      id: 5,
      image: img4,
      title: "Home/Hotel Service Makeup",
      description: "On-location makeup service with travel.",
      duration: "60 mins",
      price: "$110",
    },
    {
      id: 6,
      image: img1,
      title: "Bridal Glam Consultation",
      description: "Pre-wedding makeup consultation and planning.",
      duration: "30 mins",
      price: "$50",
    },
    {
      id: 7,
      image: img1,
      title: "Bridal Glam",
      description: "Full bridal makeup application.",
      duration: "90 mins",
      price: "$200",
    },
    {
      id: 8,
      image: img3,
      title: "Bridal Party Glam Soft",
      description: "Soft glam makeup for bridesmaids.",
      duration: "60 mins",
      price: "$85",
    },
    {
      id: 9,
      image: img3,
      title: "Bridal Party Glam Full",
      description: "Full glam makeup for bridesmaids.",
      duration: "75 mins",
      price: "$110",
    },
    {
      id: 10,
      image: img2,
      title: "Bridal Gele",
      description: "Traditional gele styling for bride.",
      duration: "45 mins",
      price: "$80",
    },
    {
      id: 11,
      image: img2,
      title: "Bridesmaid Gele",
      description: "Traditional gele styling for bridesmaids.",
      duration: "30 mins",
      price: "$50",
    },
    {
      id: 12,
      image: img2,
      title: "Owambe Gele",
      description: "Traditional gele for special occasions.",
      duration: "45 mins",
      price: "$75",
    },
    {
      id: 13,
      image: img2,
      title: "Mother of Bride/Groom Gele",
      description: "Traditional gele for mothers.",
      duration: "40 mins",
      price: "$70",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 custom-font">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-serif">
            Professional makeup services tailored to your needs and occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-94 md:h-102 overflow-hidden group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    to="/terms"
                    className="bg-transparent border-2 border-white text-white px-6 py-2.5 hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm font-medium"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl md:text-lg font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm md:text-sm">
                  {service.description}
                </p>

                <button
                  onClick={() => {console.log(service);setSelectedService(service)}}
                  className="inline-flex items-center text-rose-400 hover:text-rose-500 text-sm mb-2 transition-colors"
                >
                  See More
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-xs">{service.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-900 font-bold text-sm">
                    <span>{service.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setSelectedService(null)}
          />

          {/* Modal */}
          <div className="relative bg-white max-w-2xl w-full mx-4 shadow-xl overflow-hidden z-10">
            {/* Image */}
            <div className="relative h-70">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <h2 className="text-white text-3xl font-bold">
                  {selectedService.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h4 className="font-semibold mb-2">SERVICE DETAILS</h4>
              <p className="text-gray-600 mb-6">
                {selectedService.description}
              </p>

              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-gray-500">
                  {selectedService.duration}
                </span>
                <span className="font-bold">{selectedService.price}</span>
              </div>

              {/* Buttons */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-500"
                >
                  Close
                </button>

                <Link to="/terms" className="bg-rose-300 text-black px-6 py-2">
                  Book This Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurServices;
