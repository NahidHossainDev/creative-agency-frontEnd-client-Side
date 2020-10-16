import React, { useState, useEffect } from 'react';
import clint1 from "../../images/images/customer-1.png"
import clint2 from "../../images/images/customer-2.png"
import clint3 from "../../images/images/customer-3.png"
import ReviewCard from './ReviewCard';

// const reviewData = [
//   {
//     img: clint1,
//     name: "Nash Patrik",
//     text:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat",
//   },
//   {
//     img: clint2,
//     name: "Nash Patrik",
//     text:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat",
//   },
//   {
//     img: clint3,
//     name: "Nash Patrik",
//     text:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat",
//   },
// ];
const Review = () => {
  const [reviewData, setReviewData] = useState([]);

   useEffect(() => {
     fetch("http://localhost:8000/showReviews")
       .then((res) => res.json())
       .then((data) => setReviewData(data));
   }, []);
  
    return (
      <section className="container">
        <h2 className="pb-5 text-center">
          Clients <span style={{ color: "#7AB259" }}>Feedback</span>
        </h2>
        <div className="row d-flex justify-content-center">
          {reviewData.map((d) => (
            <ReviewCard img={d.img} name={d.name} text={d.comment} designation={d.designation}/>
          ))}
        </div>
      </section>
    );
};

export default Review;