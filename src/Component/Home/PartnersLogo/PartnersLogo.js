import React from 'react';
import logo1 from "../../images/images/logos/slack.png"
import logo2 from "../../images/images/logos/google.png";
import logo3 from "../../images/images/logos/uber.png";
import logo4 from "../../images/images/logos/netflix.png";
import logo5 from "../../images/images/logos/airbnb.png";

const PartnersLogo = () => {
    return (
      <section className="container partnerLogo">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src={logo1} alt=""></img>
          </div>
          <div className="col-lg-2 col-md-3  col-sm-4 col-6">
            <img src={logo2} alt=""></img>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src={logo3} alt=""></img>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src={logo4} alt=""></img>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6">
            <img src={logo5} alt=""></img>
          </div>
        </div>
      </section>
    );
};

export default PartnersLogo;