import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ContextElement } from "../../../../App";
import { useParams } from "react-router-dom";

const OrderForm = () => {
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

  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
  const onSubmit = (data) => {
    const allData = { ...data, image: formData.image, status: "Pending" };

    fetch("https://pure-cliffs-89224.herokuapp.com/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Order submitted successfully");
        }
      });
  };

  setPanelName("Order");

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "570px" }}>
        <input
          type="text"
          className="form-control mb-3"
          name="name"
          defaultValue={userLoginInfo.name}
          placeholder="Your name / company’s name"
          ref={register({ required: true })}
        />
        {errors.name && <span style={{ color: "red" }}>Name is required </span>}
        <input
          type="text"
          className="form-control mb-3"
          defaultValue={userLoginInfo.email}
          name="email"
          placeholder="Your email address"
          ref={register({ required: true })}
        />
        {errors.email && (
          <span style={{ color: "red" }}>Email is required </span>
        )}
        <input
          type="text"
          className="form-control mb-3"
          name="title"
          placeholder="Service Name"
          defaultValue={formData.title}
          ref={register({ required: true })}
        />
        {errors.title && (
          <span style={{ color: "red" }}>Service name is required </span>
        )}
        <input
          type="text"
          className="form-control mb-3"
          name="projectDetail"
          placeholder="Project Details"
          ref={register({ required: true })}
        />
        {errors.projectDetail && (
          <span style={{ color: "red" }}>Project detail is required </span>
        )}
        <input
          type="text"
          className="form-control mb-3"
          name="price"
          placeholder="Price"
          ref={register({ required: true })}
        />
        {errors.price && (
          <span style={{ color: "red" }}>Price is required </span>
        )}
        <button className="btn btn-dark" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
