import React, { useContext } from 'react';
import logo from '../../images/images/logos/logo.png'
import { Link } from 'react-router-dom';
import { ContextElement } from '../../../App';
const NavBar = () => {
    const [panelName, setPanelName, userLoginInfo] = useContext(ContextElement)
    return (
      <div className="container">
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ padding: "20px 0" }}
        >
          <a className="navbar-brand" href="/home">
            <img src={logo} style={{ width: "150px" }} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/home">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="portfolio">
                  Our Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="outTeam">
                  Out Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contactUs">
                  Contact Us
                </a>
              </li>
            </ul>

            <Link to="/login">
              {userLoginInfo.loginStatus ? (
                <h6>{userLoginInfo.name}</h6>
              ) : (
                <button className="btn my-2 my-sm-0  btn-dark" type="submit">
                  Log in
                </button>
              )}
            </Link>
          </div>
        </nav>
      </div>
    );
};

export default NavBar;