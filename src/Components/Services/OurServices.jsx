import React from "react";
import { img1, img2, img3, img4, video4, video3, video2, video2thumb, video3thumb, video4thumb } from "../../imports";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import VideoWithFallback from "../VideoWithFallback";

const OurServices = () => {
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
      media: video3,
      thumbnail: video3thumb,
      mediaType: "video",
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
      description: "Make up with one outfit is $250 \nMake up with two outfits is $350 \nMake up with three outfits is $450",
      duration: "74 mins",
      price: "$250-$540",
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
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
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
                        activeOverlay === service.id ? null : service.id
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
                        activeOverlay === service.id ? null : service.id
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
                        activeOverlay === service.id ? null : service.id
                      )
                    }
                    className="w-full h-full bg-gradient-to-br from-rose-200 via-rose-300 to-rose-400 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
                  >
                    
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

                <Link
                  to="/services"
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
                </Link>

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
    </section>
  );
};

export default OurServices;