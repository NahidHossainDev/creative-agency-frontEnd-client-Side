import React from "react";
import SideBar from "./SideBar/SideBar";
import { useContext } from "react";
import { ContextElement } from "../../App";
import OrderForm from "./CustomerPanel/Order/OrderForm";
import Table from "./AdminPanel/AdminsServiceList/Table";

const Panel = (props) => {
  const [
    panelName,
    setPanelName,
    userLoginInfo,
    setUserLoginInfo,
    admin,
  ] = useContext(ContextElement);


  return (
    <div className="row">
      <div className="col-sm-2 p-3 d-flex justify-content-center">
        <SideBar />
      </div>
      <div className="col-sm-10  p-0">
        <div className="d-flex p-3 ">
          <h5 className="inline-block">{panelName}</h5>
          <h5 className="inline-block ml-auto">{userLoginInfo.name}</h5>
        </div>
        <div className="pt-5 pl-4 panel-body">{(props.children)? props.children : (admin ? <Table/> : <OrderForm/>)}</div>
      </div>
    </div>
  );
};

export default Panel;
