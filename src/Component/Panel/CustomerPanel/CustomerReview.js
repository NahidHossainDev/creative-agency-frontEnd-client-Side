import React, { useContext } from 'react';
import Panel from '../Panel';
import { ContextElement } from '../../../App';
import { useForm } from 'react-hook-form';

const CustomerReview = () => {
    const [ panelName,
        setPanelName,
        userLoginInfo,
        setUserLoginInfo,] = useContext(ContextElement);
  
    const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
    const onSubmit = (data) => {
    const allData = { ...data, img: userLoginInfo.image };
       fetch("http://localhost:8000/addReview", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(allData),
       })
         .then((res) => res.json())
         .then((data) => {
           if (data) {
             alert("Review submitted successfully");
           }
         });
    }
    setPanelName("Review")
    return (
      <Panel>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "570px" }}>
          <input
            type="text"
            className="form-control mb-3"
            name="name"
            placeholder="Your name / company’s name"
            ref={register({ required: true })}
          />
          {errors.name && (
            <span style={{ color: "red" }}>Name is required </span>
          )}
          <input
            type="text"
            className="form-control mb-3"
            name="designation"
            placeholder="Designation"
            ref={register({ required: true })}
          />
          {errors.designation && (
            <span style={{ color: "red" }}>Designation is required </span>
          )}
          <textarea
            name="comment"
            id=""
            cols="30"
            rows="5"
            className="form-control mb-3"
            ref={register({ required: true })}
          ></textarea>
          {errors.comment && (
            <span style={{ color: "red" }}>This field is required </span>
          )}
          <button className="btn btn-dark" type="submit">
            Submit
          </button>
        </form>
      </Panel>
    );
};

export default CustomerReview;