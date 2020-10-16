import React, { useContext, useEffect, useState } from 'react';
import Panel from '../Panel';
import { ContextElement } from '../../../App';
import CustomerServiceCard from './CustomerServiceCard';

const CustomerServiceList = () => {
    const [
      panelName,
      setPanelName,
      userLoginInfo,
      setUserLoginInfo,
    ] = useContext(ContextElement);
   
  setPanelName('Service List')
  const [servicesData , setServicesData] = useState([])

  useEffect(() => {
     fetch("http://localhost:8000/getMyServices?email=" + userLoginInfo.email)
       .then((res) => res.json())
       .then((data) => setServicesData(data));
  },[])

    return (
      <Panel>
        <div className="row d-flex justify-content-center">
          {servicesData.map((d, i) => (
            <CustomerServiceCard data={d} key={i} />
          ))}
        </div>
      </Panel>
    );
};

export default CustomerServiceList;