import React from 'react';
import './App.css';
import Home from './Component/Home/Home';
import PlaceOrder from './Component/Panel/CustomerPanel/Order/PlaceOrder';
import CustomerServiceList from './Component/Panel/CustomerPanel/CustomerServiceList';
import CustomerReview from './Component/Panel/CustomerPanel/CustomerReview';
import AddService from './Component/Panel/AdminPanel/AddService';
import AdminServiceList from './Component/Panel/AdminPanel/AdminsServiceList/AdminServiceList';
import MakeAdmin from './Component/Panel/AdminPanel/MakeAdmin';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext } from 'react';
import { useState } from 'react';
import Login from './Component/Login/Login';
import PrivateRouter from './Component/Login/PrivateRouter';
import Panel from './Component/Panel/Panel';


export const ContextElement = createContext();

function App() {

  const [panelName, setPanelName] = useState("");
  const [userLoginInfo, setUserLoginInfo] = useState({});
  const [admin, setAdmin] = useState(false);
  const [formData, setFormData] = useState({})
  return (
    <ContextElement.Provider
      value={[
        panelName,
        setPanelName,
        userLoginInfo,
        setUserLoginInfo,
        admin,
        setAdmin,
        formData,
        setFormData,
      ]}
    >
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRouter path="/panel">
            <Panel />
          </PrivateRouter>
          <PrivateRouter path="/placeOrder/:title">
            <PlaceOrder />
          </PrivateRouter>
          <PrivateRouter path="/placeOrder">
            <PlaceOrder />
          </PrivateRouter>
          <PrivateRouter path="/customerServiceList">
            <CustomerServiceList />
          </PrivateRouter>
          <PrivateRouter path="/customerReview">
            <CustomerReview />
          </PrivateRouter>
          <PrivateRouter path="/addService">
            <AddService />
          </PrivateRouter>
          <PrivateRouter path="/adminServiceList">
            <AdminServiceList />
          </PrivateRouter>
          <PrivateRouter path="/makeAdmin">
            <MakeAdmin />
          </PrivateRouter>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ContextElement.Provider>
  );
}

export default App;
