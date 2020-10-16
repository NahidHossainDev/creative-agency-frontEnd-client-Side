import React, { useContext, useState } from 'react';
import logo from "../../images/images/logos/logo.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHdd, faCommentDots, faPlus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { ContextElement } from '../../../App';
import { useEffect } from 'react';

const SideBar = () => {
  const [
    panelName,
    setPanelName,
    userLoginInfo,
    setUserLoginInfo,
    admin,
    setAdmin,
  ] = useContext(ContextElement);

  console.log(admin);
  return (
    <div className="sideBar">
      <Link to="/home">
        <img
          src={logo}
          style={{ width: "150px", marginBottom: "50px" }}
          alt=""
        />
      </Link>

      {admin ? (
        <div>
          <Link to="/adminServiceList" className="d-block mb-3">
            {" "}
            <FontAwesomeIcon icon={faShoppingCart} /> Service List
          </Link>
          <Link to="/addService" className="d-block mb-3">
            {" "}
            <FontAwesomeIcon icon={faPlus} />
            Add Service{" "}
          </Link>
          <Link to="/makeAdmin" className="d-block mb-3">
            {" "}
            <FontAwesomeIcon icon={faUserPlus} /> Make Admin{" "}
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/placeOrder" className="d-block mb-3">
            {" "}
            <FontAwesomeIcon icon={faShoppingCart} /> Order
          </Link>
          <Link to="/customerServiceList" className="d-block mb-3">
            {" "}
            <FontAwesomeIcon icon={faHdd} /> Service List
          </Link>
          <Link to="/customerReview" className="d-block mb-3">
            {" "}
            <FontAwesomeIcon icon={faCommentDots} /> Review{" "}
          </Link>
        </div>
      )}
    </div>
  );
};

export default SideBar;