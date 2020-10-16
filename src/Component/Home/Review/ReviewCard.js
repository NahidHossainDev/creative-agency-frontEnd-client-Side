import React from 'react';

const ReviewCard = ({ img, name, text, designation }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
      <div className="card review-card">
        <div className="card-body">
          <div className="row">
            <img src={img} className="col-3" alt="" />
            <div className="col-9">
              <h6>{name}</h6>
              <p>{designation}</p>
            </div>
          </div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;