import React, { useContext, } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ContextElement } from '../../../App';
import { useSpring, animated } from "react-spring";

// for react-spring animation
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ServiceCard = ({ title, image, text }) => {
 const [
   panelName,
   setPanelName,
   userLoginInfo,
   setUserLoginInfo,
   admin,
   setAdmin,
   formData,
   setFormData,
 ] = useContext(ContextElement);
   
  const history = useHistory();

  const redirect = () => {
    setFormData({ title: title, image: image });
    history.push("/panel");
  };

  // for react-spring animation
   const [props, set] = useSpring(() => ({
     xys: [0, 0, 1],
     config: { mass: 5, tension: 350, friction: 40 },
   }));
 
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center service">
        <animated.div
          className="card"
          onClick={redirect}
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        >
          <div className="card-body ">
            <img src={`data:image/png;base64,${image.img}`} alt="" />
            <h5>{title}</h5>
            <p>{text}</p>
          </div>
        </animated.div>
      </div>
    );
};

export default ServiceCard;