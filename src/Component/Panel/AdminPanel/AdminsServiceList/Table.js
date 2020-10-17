import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import loadingGif from "../../../images/images/01-progress.gif";
import { ContextElement } from "../../../../App";
const Table = () => {
  const [panelName, setPanelName] = useContext(ContextElement);

  setPanelName("Service List");
  const [orders, setOrders] = useState([]);

  const showData = () => {
    fetch("https://pure-cliffs-89224.herokuapp.com/showOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }
  showData();
 
  const updateStatus = (id, val) => {
    setOrders([])
    console.log(id, val)
    const status = {status:val}
      fetch(`https://pure-cliffs-89224.herokuapp.com/update/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(status),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            showData();
          }
        });
  }

    const sColor = (status) => {
      if (status === "Done") { return "#009444"; }
      if (status === "Pending") {return "red"}
      if (status === "On going") { return "orange"}
  }
  
  return (
    <table class="table table-borderless bg-light">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email ID</th>
          <th scope="col">Service</th>
          <th scope="col">Project Detail</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.length === 0 && (
          <img
            src={loadingGif}
            style={{ width: "300px", textAlign: "center" }}
            alt=""
          />
        )}
        {orders.map((d) => (
          <tr>
            <th scope="row">{d.name}</th>
            <td>{d.email}</td>
            <td>{d.title}</td>
            <td>{d.projectDetail}</td>
            <td>
              <Dropdown
                onSelect={(option) => updateStatus(`${d._id}`, option)}
              >
                <Dropdown.Toggle variant="light" id="dropdown-basic"  style={{color: sColor(d.status)}}>
                  {d.status}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Done" style={{color:'green'}}>Done</Dropdown.Item>
                  <Dropdown.Item eventKey="On going" style={{color:'orange'}}>On going</Dropdown.Item>
                  <Dropdown.Item eventKey="Pending" style={{color:'red'}}>Pending</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
