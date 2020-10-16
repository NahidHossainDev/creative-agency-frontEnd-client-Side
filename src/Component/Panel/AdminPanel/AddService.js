import React, { useContext } from "react";
import Panel from "../Panel";
import { ContextElement } from "../../../App";
import { useState } from "react";

const AddService = () => {
  const [panelName, setPanelName] = useContext(ContextElement);
  const [info, setInfo] = useState({});
  const [file, setFile] = useState({});
  setPanelName("Add Service");

  const handleOnBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleOnChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("description", info.description);
    formData.append("title", info.title);

    fetch("https://pure-cliffs-89224.herokuapp.com/addServices", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Service addaded successfully.");
        }
      });
  };

  return (
    <Panel>
      <form onSubmit={handleSubmit} className="add-service">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Service Title</label>
          <input
            type="text"
            placeholder="Enter Title"
            id="exampleInputEmail1"
            name="title"
            className="form-control mb-3"
            onBlur={handleOnBlur}
          ></input>
        </div>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="5"
          placeholder="Enter Description"
          className="form-control mb-3"
          onBlur={handleOnBlur}
        ></textarea>
        <div class="form-group">
          <label htmlFor="photo">Upload photo</label>
          <input
            type="file"
            placeholder="Enter Title"
            id="photo"
            className="form-control mb-3"
            name="photo"
            onChange={handleOnChange}
          ></input>
        </div>
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
    </Panel>
  );
};

export default AddService;
