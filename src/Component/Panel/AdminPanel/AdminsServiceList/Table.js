import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import loadingGif from '../../../images/images/01-progress.gif'
const Table = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/showOrders")
            .then(res => res.json())
        .then(data => setOrders(data))
    },[])

    const checkStatus1 = (status) => {
        if (status === 'Pending') { return "On going" }
        if (status === 'On going') { return "Done" }
        if (status === 'Done') { return "Pending" }
    }
    const checkStatus2 = (status) => {
        if (status === 'Pending') { return "Done" }
        if (status === 'On going') { return "Pending" }
        if (status === 'Done') { return "On going" }
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
          {orders.length === 0 && <img src={loadingGif} style={{width:'300px',textAlign:"center"}} alt="" />}
          {orders.map((d) => (
            <tr>
              <th scope="row">{d.name}</th>
              <td>{d.email}</td>
              <td>{d.title}</td>
              <td>{d.projectDetail}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    {d.status}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item >{checkStatus1(d.status)}</Dropdown.Item>
                    <Dropdown.Item >{checkStatus2(d.status)}</Dropdown.Item>
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