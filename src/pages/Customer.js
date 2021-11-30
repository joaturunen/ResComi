import React, { useState } from 'react';
import Tab from '../components/tab/Tab';
import CustomerInfo from './customerInfo';
import Car from './car';

// tämä avautuu hakutuloksesta, ei näy navissa

export default function Customer({ url, customer, car }) {

  const tabContent = [
    {
      title: "Perustiedot",
      content: <div class="col-sm-3">
        <label>Etunimi</label>
        <input type="text" class="form-control" />
        {/* <CustomerInfo customer={customer} /> */}
      </div>,
    },
    {
      title: "Auto",
      content: <div class="col-sm-3">
        <label>Rekisterinumero</label>
        <input type="text" class="form-control" />
        {/* <Car car={car}/> */}
      </div>,
    },
    {
      title: "Renkaat",
      content: <div class="col-sm-3">
        <label>Renkaan merkki</label>
        <input type="text" class="form-control" />
      </div>,
    },
    {
      title: "Varaus",
      content: <div class="col-sm-3">
        <label>Varaus numero</label>
        <input type="text" class="form-control" />
      </div>,
    },
    {
      title: "Varaushistoria",
      content: <div class="col-sm-3">
        <label>Edelliset varaukset</label>
        <input type="text" class="form-control" />
      </div>,
    },
  ];

  return (
    <>
        <div>
          <form>
            <div class="row">
              <h4>Asiakkaan tiedot</h4>
              <Tab active={0}>
                {tabContent.map((tab, index) => (
                  <Tab.TabPane key={'Tab-${index}'} tab={tab.title}>{tab.content}</Tab.TabPane>
                ))}
              </Tab>
            </div>
          </form>
        </div>
    </>
  );
};
