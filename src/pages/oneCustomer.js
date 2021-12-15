import React from 'react';
import Tab from '../components/tab/Tab';
import CustomerInfo from './customerInfo';
import Car from './car';
import _ from 'lodash';
import { buttonStyle } from '../style/colors';
import CustomerOrders from './customerOrders';


// tämä avautuu hakutuloksesta, ei näy navissa

export default function Customer({
  url, 
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
        <CustomerInfo url={url} 
          customer_id={customer_id}
          setCustomerCars={setCustomerCars}
          setCustomerOrders={setCustomerOrders}/>
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
      title: "Raportit",
      content: 
      <div className="row">
        <CustomerOrders 
          openReport={openReport}
          customerOrders={customerOrders} />
      </div>
      
      // <div className="row col-sm-6">
      //   <table className="table text-center table-striped">
      //   <thead>
      //     <tr>
      //           <th scope="col">Tilausnumero</th>
      //           <th scope="col">PVM</th>
      //           <th scope="col">Rekisteri</th>
      //           <th scope="col"></th>
      //         </tr>
      //       </thead>
      //   <tbody>
              
      //           <tr >
      //             <td>Tähän tulee tilausnumero</td>
      //             <td>Tähän tulee päivämäärä</td>
      //             <td>Tähän tulee rekisteri</td>
      //             <td>
      //             <button className='btn' style={buttonStyle} >Raportti</button>
      //             </td>
      //           </tr>
             
      //       </tbody>
      // </table>
     
      // </div>,
    },
  ];

  return (
    <div>
      <div >       
        <Tab active={0}>
          {tabContent.map((tab, index) => (
            <Tab.TabPane key={'Tab-${index}'} tab={tab.title}>{tab.content}</Tab.TabPane>
          ))}
        </Tab>
      </div>
    </div>
  );
};