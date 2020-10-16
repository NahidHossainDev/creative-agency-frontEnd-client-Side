import React from 'react';

const CustomerServiceCard = (props) => {
    const { img, title, projectDetail, status, image } = props.data;
    let cName = "";
    if (status === "Done") { cName = "alert-success"; }
    if(status === "Pending") {cName = "alert-danger";}
    if(status === "On going"){cName = "alert-warning";}
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center customer-service-card">
        <div className="card">
          <div className="card-body ">
            <div className="d-flex">
              <img
                src={`data:${image.contentType};base64,${image.img}`}
                alt=""
              />
              <span className={`alert ${cName} ml-auto`}>{status}</span>
            </div>
            <h5>{title}</h5>
            <p>{projectDetail}</p>
          </div>
        </div>
      </div>
    );
};

export default CustomerServiceCard;