import React from "react";

const ClientLove = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-20">
      {/* Client Love Section */}
      <div className="mt-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-3 custom-font">
            Client Love
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Real feedback from our beautiful clients, shared directly on
            Instagram.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              text: `"Oh my dayssss, WHAT A WOMAANNNNNN 😍😍😍😍😍"`,
              name: "A.B.A",
              handle: "@a__pineapple__",
            },
            {
              text: `"🔥🔥🔥🔥 our beautiful Xplictgold woman! flawless"`,
              name: "Oluwaseyi Omole",
              handle: "@xplictgold",
            },
            {
              text: `"Beautiful ❤️🔥"`,
              name: "Oluwaseyi Omole",
              handle: "@xplictgold",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 p-6 flex flex-col justify-between overflow-hidden  hover:shadow-md transition-shadow duration-300"
            >
              {/* Quote */}
              <div>
                <span className="text-4xl text-[#d6b8b2]">”</span>
                <p className="text-gray-800 text-sm mt-4 mb-8 leading-relaxed">
                  {item.text}
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {item.name}
                  </p>
                  <p className="text-gray-500 text-xs">{item.handle}</p>
                </div>

                {/* Instagram Icon */}
                <div className="border border-gray-300 p-1.5 rounded-sm">
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="3.5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <a
            href="https://www.instagram.com/prettyb_mua/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-gray-300 px-6 py-3 text-sm text-gray-800 hover:bg-gray-100 transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="3.5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
            Read more on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientLove;
