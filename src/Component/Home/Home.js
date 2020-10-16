import React from "react";
import Header from "./Header/Header";
import PartnersLogo from "./PartnersLogo/PartnersLogo";
import Service from "./Service/Service";
import Portfolio from "./Portfolio/Portfolio";
import Review from "./Review/Review";
import ContactUs from "./ContactUs/ContactUs";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <PartnersLogo />
      <Service />
          <Portfolio />
          <Review />
          <ContactUs/>
    </div>
  );
};

export default Home;
