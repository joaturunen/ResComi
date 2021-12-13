import React, { useState, useEffect } from 'react';
import { MdEmojiObjects } from 'react-icons/md';
import Tab from '../components/tab/Tab';
import CustomerInfo from './customerInfo';
import Car from './car';
import _ from 'lodash';
import Tires from './tires';
import { buttonStyle } from '../style/colors';


// tämä avautuu hakutuloksesta, ei näy navissa

export default function Customer({url, customer_id, customerCars, setCustomerCars, car_id, customerTires, setCustomerTires}) {

  
  const MAX_GROOVE = 10.1;
  const MAX_TIRE_SIZE = 26;
  const MAX_BOLT_SIZE = 21;

  

  const tabContent = [
    {
      title: "Perustiedot",
      content:
        <div className="row">
          
          <CustomerInfo url={url} 
            customer_id={customer_id}
            customerCars={customerCars}
            setCustomerCars={setCustomerCars}
            customerTires={customerTires}
            setCustomerTires={setCustomerTires} />
            
        </div>,
    },
    {
      title: "Ajoneuvo",
      content: 
      <div className="row">
        <Car url={url} 
          customerCars={customerCars} 
          setCustomerCars={setCustomerCars} 
          customer_id={customer_id}/>
      </div>,
    },
    {
      title: "Renkaat",
      content: 
      <div className="row">
        <Tires customerTires={customerTires} 
          setCustomerTires={setCustomerTires} 
          car_id={car_id} 
          />
      </div>,
    },
    {
      title: "Raportit",
      content: 
      
      <div className="row col-sm-6">
        <table className="table text-center table-striped">
        <thead>
          <tr>
                <th scope="col">Tilausnumero</th>
                <th scope="col">PVM</th>
                <th scope="col">Rekisteri</th>
                <th scope="col"></th>
              </tr>
            </thead>
        <tbody>
              
                <tr >
                  <td>Tähän tulee tilausnumero</td>
                  <td>Tähän tulee päivämäärä</td>
                  <td>Tähän tulee rekisteri</td>
                  <td>
                  <button className='btn' style={buttonStyle} >Raportti</button>
                  </td>
                </tr>
             
            </tbody>
      </table>
     
      </div>,
    },
  ];

  return (
    <div>
      <div className="row">       
        <Tab active={0}>
          {tabContent.map((tab, index) => (
            <Tab.TabPane key={'Tab-${index}'} tab={tab.title}>{tab.content}</Tab.TabPane>
          ))}
        </Tab>
      </div>
    </div>
  );
};