import React from "react";

const WhyChooseUs = () => {
  const data = [
    {
      id: "01 ",
      title: "Expert Artistry",
      desc: "Certified makeup artist with years of experience in bridal and special event makeup.",
    },
    {
      id: "02",
      title: "Premium Products",
      desc: "Using only high-quality, professional-grade cosmetics that last all day.",
    },
    {
      id: "03",
      title: "Personalized Service",
      desc: "Every look is customized to enhance your natural beauty and match your vision.",
    },
    {
      id: "04",
      title: "Client Satisfaction",
      desc: "Dedicated to making you feel confident and beautiful on your special day.",
    },
  ];

  return (
    <section className="bg-rose-50 py-20 px-6 md:px-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-3">
          Why Choose Us
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Dedicated to excellence in every detail
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {data.map((item) => (
          <div key={item.id} className="flex items-start gap-8">
            <span className="text-[60px] md:text-[72px] font-light text-[#d6b8b2] leading-none w-20 md:w-20">
              {item.id}
            </span>

            <div>
              <h3 className="text-xl md:text-2xl font-serif text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default WhyChooseUs;
