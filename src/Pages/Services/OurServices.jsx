import {
  img1,
  img2,
  img3,
  img4,
  video4,
  video3,
  video2,
  video2thumb,
  video3thumb,
  video4thumb,
} from "../../imports";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import VideoWithFallback from "../../Components/VideoWithFallback";

const OurServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [activeOverlay, setActiveOverlay] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      media: video4,
      thumbnail: video4thumb,
      mediaType: "video",
      title: "Simple Beat with Lashes",
      description: "Eye makeup focus with lash application",
      duration: "45 mins",
      price: "$100",
    },
    {
      id: 2,
      media: img3,
      mediaType: "image",
      title: "Full Face with Lashes",
      description: "Complete makeup coverage including lashes",
      duration: "60 mins",
      price: "$120",
    },
    {
      id: 3,
      media: img2,
      mediaType: "image",
      title: "Full Face with Lashes and Gele",
      description: "Full makeup plus traditional gele styling",
      duration: "90 mins",
      price: "$140",
    },
    {
      id: 4,
      media: img4,
      mediaType: "image",
      title: "Photoshoot Service",
      description:
        "Makeup with one outfit is $250 \nMakeup with two outfits is $350 \nMakeup with three outfits is $450",
      duration: "--",
      price: "Starting at $250",
    },
    {
      id: 5,
      media: video2,
      thumbnail: video2thumb,
      mediaType: "video",
      title: "Home/Hotel Service Makeup",
      description: "On-location makeup service with travel.",
      duration: "60 mins",
      price: "Contact for Pricing",
    },
    {
      id: 6,
      media: img1,
      mediaType: "image",
      title: "Bridal Glam Consultation",
      description: "Pre-wedding makeup consultation and planning.",
      duration: "30 mins",
      price: "Contact for Pricing",
    },
    {
      id: 7,
      media: video3,
      thumbnail: video3thumb,
      mediaType: "video",
      title: "Bridal Glam",
      description: "Full bridal makeup application.",
      duration: "90 mins",
      price: "Starting at $500",
    },
    {
      id: 8,
      mediaType: "none",
      title: "Bridal Party Glam Soft",
      description: "Soft glam makeup for bridesmaids.",
      duration: "60 mins",
      price: "Contact for Pricing",
    },
    {
      id: 9,
      mediaType: "none",
      title: "Bridal Party Glam Full",
      description: "Full glam makeup for bridesmaids.",
      duration: "75 mins",
      price: "Contact for Pricing",
    },
    {
      id: 10,
      mediaType: "none",
      title: "Bride Gele",
      description: "Traditional gele styling for bride.",
      duration: "45 mins",
      price: "Contact for Pricing",
    },
    {
      id: 11,
      mediaType: "none",
      title: "Bridesmaid Gele",
      description: "Traditional gele styling for bridesmaids.",
      duration: "30 mins",
      price: "Contact for Pricing",
    },
    {
      id: 12,
      mediaType: "none",
      title: "Owambe Gele",
      description: "Traditional gele for special occasions.",
      duration: "45 mins",
      price: "Contact for Pricing",
    },
    {
      id: 13,
      mediaType: "none",
      title: "Mother of Bride/Groom Gele",
      description: "Traditional gele for mothers.",
      duration: "40 mins",
      price: "Contact for Pricing",
    },
  ];

  const handleBookAppointment = (serviceName) => {
    navigate("/terms", { state: { selectedService: serviceName } });
  };

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
              <div className="relative h-64 md:h-72 overflow-hidden group">
                {/* Video */}
                {service.mediaType === "video" && (
                  <VideoWithFallback
                    src={service.media}
                    thumbnail={service.thumbnail}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    onClick={() =>
                      setActiveOverlay(
                        activeOverlay === service.id ? null : service.id,
                      )
                    }
                  />
                )}

                {/* Image */}
                {service.mediaType === "image" && (
                  <img
                    src={service.media}
                    alt={service.title}
                    onClick={() =>
                      setActiveOverlay(
                        activeOverlay === service.id ? null : service.id,
                      )
                    }
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                )}

                {/* No Media - Gradient Placeholder */}
                {service.mediaType === "none" && (
                  <div
                    onClick={() =>
                      setActiveOverlay(
                        activeOverlay === service.id ? null : service.id,
                      )
                    }
                    className="w-full h-full bg-linear-to-br from-rose-200 via-rose-300 to-rose-400 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
                  >
                    <svg
                      className="w-16 h-16 text-white opacity-40"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300
                    ${
                      activeOverlay === service.id
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }
                    md:group-hover:opacity-100 md:group-hover:pointer-events-auto
                  `}
                >
                  <button
                    onClick={() => handleBookAppointment(service.title)}
                    className="bg-transparent border-2 border-white text-white px-6 py-2.5 hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm font-medium"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl md:text-lg font-medium text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm md:text-sm whitespace-pre-line">
                  {service.description}
                </p>

                <button
                  onClick={() => setSelectedService(service)}
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

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setSelectedService(null)}
          />

          {/* Modal */}
          <div className="relative bg-white max-w-2xl w-full shadow-xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto">
            {/* Media */}
            <div className="relative h-80">
              {selectedService.mediaType === "video" && (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={selectedService.media} type="video/mp4" />
                </video>
              )}

              {selectedService.mediaType === "image" && (
                <img
                  src={selectedService.media}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
              )}

              {selectedService.mediaType === "none" && (
                <div className="w-full h-full bg-linear-to-br from-rose-200 via-rose-300 to-rose-400 flex items-center justify-center">
                  <svg
                    className="w-24 h-24 text-white opacity-40"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}

              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <h2 className="text-white text-3xl font-bold">
                  {selectedService.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h4 className="font-semibold mb-2">SERVICE DETAILS</h4>
              <p className="text-gray-600 mb-6 whitespace-pre-line">
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
                  className="text-gray-500 hover:text-gray-700"
                >
                  Close
                </button>

                <button
                  onClick={() => handleBookAppointment(selectedService.title)}
                  className="bg-rose-400 text-white px-6 py-2.5 hover:bg-rose-500 transition-all duration-300 text-sm font-medium"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurServices;
