import React from "react";
import Nav from "../../Components/Nav/Nav";
import Hero from "../../Components/Hero/Hero";
import OurServices from "../../Components/Services/OurServices";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import ClientLove from "../../Components/WhyChooseUs/ClientLove";
import CTA from "../../Components/CTA/CTA";

const Homepage = () => {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <OurServices />
        <WhyChooseUs />
        <ClientLove />
      </section>
      <section id="contact">
        <CTA />
      </section>
    </div>
  );
};

export default Homepage;
