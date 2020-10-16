import React, { useContext, useState } from "react";
import Panel from "../Panel";
import { ContextElement } from "../../../App";

const MakeAdmin = () => {
  const [panelName, setPanelName] = useContext(ContextElement);
  const [info, setInfo] = useState({});

  setPanelName("Make Admin");

   const handleOnChange = (e) => {
     const newInfo = { ...info };
     newInfo[e.target.name] = e.target.value;
     setInfo(newInfo);
   };
  
  const handleSubmit = () => {
     fetch("http://localhost:8000/addAdmin", {
       method: "POST",
       body: JSON.stringify(info),
       headers: {
         "Content-type": "application/json; charset=UTF-8",
       },
     })
       .then((res) => res.json())
       .then((data) => {
         if (data) {
           alert("Admin addaded successfully.");
         }
       });
  }
  return (
    <Panel>
      <form
        onSubmit={handleSubmit}
        className="make-admin"
      >
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            placeholder="Email address"
            class="form-control"
            name="email"
            id="exampleInputEmail1"
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

export default MakeAdmin;
