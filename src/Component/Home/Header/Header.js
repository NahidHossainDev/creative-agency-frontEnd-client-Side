import React from "react";
import NavBar from "../NavBar/NavBar";
import img from "../../images/images/logos/Frame.png";
const Header = () => {
  return (
    <div className="header mb-5">
      <NavBar />
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-5">
            <h1>Let’s Grow Your Brand To The Next Level</h1>
            <p className="pt-2 pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </p>
            <button className="btn  btn-dark">Hire Us</button>
          </div>
          <div className="col-md-7">
            <img src={img} className="header-cover-pic" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
