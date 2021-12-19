import React from 'react';
import Tab from '../components/tab/Tab';
import CustomerInfo from './customerInfo';
import Car from './car';
import _ from 'lodash';
import CustomerOrders from './customerOrders';
import {URL} from '../back/Config';

// tämä avautuu hakutuloksesta, ei näy navissa

export default function Customer({
  customer_id, 
  customerCars, 
  setCustomerCars, 
  customerOrders, 
  setCustomerOrders, 
  openReport}) {

  const tabContent = [
    {
      title: "Perustiedot",
      content:
      <div className="row">
        <CustomerInfo
          customer_id={customer_id}
          setCustomerCars={setCustomerCars}
          setCustomerOrders={setCustomerOrders}/>
      </div>,
    },
    {
      title: "Ajoneuvot",
      content: 
      <div className="row">
        <Car
          customerCars={customerCars} 
          setCustomerCars={setCustomerCars} 
          customer_id={customer_id}/>
      </div>,
    },
    {
      title: "Raportit",
      content: 
      <div className="row">
        <CustomerOrders 
          openReport={openReport}
          customerOrders={customerOrders} />
      </div>

    },
  ];

  return (
    <div>
      <div>       
        <Tab active={0}>
          {tabContent.map((tab, index) => (
            <Tab.TabPane key={'Tab-${index}'} tab={tab.title}>{tab.content}</Tab.TabPane>
          ))}
        </Tab>
      </div>
    </div>
  );
};