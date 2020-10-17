import React, { useState, useContext } from "react";
import * as firebase from "firebase/app";
import firebaseConfig from "../firebase.config";
import "firebase/auth";
import "firebase/firestore";
import { ContextElement } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import logo from "../images/images/google.png";
const Login = () => {
  const [
    panelName,
    setPanelName,
    userLoginInfo,
    setUserLoginInfo,
    admin,
    setAdmin,
  ] = useContext(ContextElement);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  async function googleLogIn() {
    const provider = new firebase.auth.GoogleAuthProvider();

    await firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email, photoURL } = result.user;
        const signInInfo = {
          name: displayName,
          email: email,
          image: photoURL,
          loginStatus: true,
        };
        // setUserToken();
        setUserLoginInfo(signInInfo);
        checkAdmin(email);
        history.replace(from);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  const setUserToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
      })
      .catch(function (error) {
        // Handle error
      });
  };
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        const signOutInfo = {
          name: "",
          email: "",
          loginStatus: false,
        };
        sessionStorage.removeItem("token");
        setUserLoginInfo(signOutInfo);
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  const checkAdmin = (email) => {
    fetch("https://pure-cliffs-89224.herokuapp.com/checkAdmin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  };

  return (
    <div className="loginForm">
      <div className="form">
        {userLoginInfo.loginStatus ? (
          <button className="btn btn-dark" onClick={signOut}>
            Log Out
          </button>
        ) : (
          <div>
            <h4>Log in with</h4>
            <button className="loginBtn" onClick={googleLogIn}>
              <img src={logo} alt="" />
              Continue with Google
            </button>
            <p>
              Don’t have an account? |
              <span style={{ color: "blue" }}> Create an account</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
