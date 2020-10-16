import React, { useContext, } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ContextElement } from '../../../App';

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
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center service">
            <div className="card" onClick={redirect}>
              <div className="card-body ">
                <img src={`data:image/png;base64,${image.img}`} alt="" />
                <h5>{title}</h5>
                <p>{text}</p>
              </div>
            </div>
      </div>
    );
};

export default ServiceCard;