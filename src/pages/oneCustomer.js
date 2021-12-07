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
          {/* <div className="col-sm-4">
            <label>Etunimi</label>
            <input type="text" className="form-control" value={firstname}/>
          </div>
          <div className="col-sm-4">
            <label>Sukunimi</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-4">
            <label>Asiakkuus luotu</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-4">
            <label>Lähiosoite</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-4">
            <label>Postinumero</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-4">
            <label>Postitoimipaikka</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-4">
            <label>Puhelinumero</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-1">
            <label className="form-check-label" for="suoramarkkinointi1">Lupa?</label>
            <input type="checkbox" className="form-check-input" id="suoramarkkinointi1" value="phone" />
          </div>
          <div className="col-sm-4">
            <label>Sähköposti</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-sm-1">
            <label className="form-check-label" for="suoramarkkinointi2">Lupa?</label>
            <input type="checkbox" className="form-check-input" id="suoramarkkinointi2" value="email" />
          </div>
          <div className="col-sm-12">
            <label>Ajoneuvot</label>
            <ul>
              <li>LOL-666</li>
              <li>LOL-666</li>
              <li>LOL-666</li>
            </ul>
          </div>
          <div className="col-sm-6">
            <button className="btn btn-primary" style={buttonStyle}>Lisää ajoneuvo</button>
          </div>
          <div className="col-sm-6">
            <button className="btn btn-primary">Tallenna</button>
          </div> }*/
          <CustomerInfo url={url} 
            customer_id={customer_id}
            customerCars={customerCars}
            setCustomerCars={setCustomerCars}
            customerTires={customerTires}
            setCustomerTires={setCustomerTires} />
            }
        </div>,
    },
    {
      title: "Ajoneuvo",
      content: 
      <div className="row col-sm-6">
        {/* <div className="col-sm-4">
          <label>Rekisterinumero</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-sm-4">
          <label>Merkki</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-sm-4">
          <label>Malli</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-sm-4">
          <label>Vuosimalli</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-sm-4">
          <label>Säilytyskausi</label>
          <div className="col-sm-6">
            <select className="form-select">
            <option value="1">Kesä</option>
            <option value="2">Talvi</option>
          </select>
          </div>       
        </div>
        <div className="col-sm-4">
          <label>Lisätietoja</label>
          <textarea rows="3"/>
        </div> */}
        <Car url={url} 
          customerCars={customerCars} 
          setCustomerCars={setCustomerCars} 
          customer_id={customer_id}/>
      </div>,
    },
    {
      title: "Renkaat",
      content: 
      <div className="row col-sm-6">
        {/* <div className="col-sm-4">
          <label>Rengaspaikka</label>
          <input type="text" class="form-control" />
        </div>
        <div className="col-sm-4">
          <label>Rengasmerkki</label>
          <input type="text" class="form-control" />
        </div>
        <div className="col-sm-4">
          <label>Vannetyyppi</label>
          <input type="text" class="form-control" />
        </div>
        <div className="col-sm-3">
          <label>Rengastyyppi</label>
          <div className="col-sm-6">
            <select class="form-select">
            <option value="1">Kesä</option>
            <option value="2">Talvi</option>
            <option value="3">Kitka</option>
          </select>
          </div>       
        </div>
        <div className="col-sm-3">
          <label>Pölykapselit</label>
          <div className="col-sm-6">
            <select class="form-select">
            <option value="1">Kyllä</option>
            <option value="2">Ei</option>
          </select>
          </div>       
        </div>
        <div className="col-sm-3">
          <label>Renkaan koko</label>
          <div className="col-sm-6">
            <select className="form-select">
            {_.range(10, MAX_TIRE_SIZE, 1).map(value => <option key={value} value={value}>{value}</option>)}
          </select>
          </div>       
        </div>
        <div className="col-sm-3">
          <label>Pultit</label>
          <div className="col-sm-6">
            <select className="form-select">
            {_.range(10, MAX_BOLT_SIZE, 1).map(value => <option key={value} value={value}>{value}</option>)}
          </select>
          </div>       
        </div>
        <div className="col-sm-12">
          <h5 className="text-center">Urasyvyydet</h5>
        </div>
        <div className="col-sm-3">
          <label>Oikea eturengas</label>
          <div className="col-sm-6">
            <select class="form-select">
            {_.range(1, MAX_GROOVE, 0.1).map(value => <option key={value} value={value}>{value.toFixed(1)}</option>)}
            </select>
          </div>       
        </div>
        <div className="col-sm-3">
          <label>Oikea takarengas</label>
          <div className="col-sm-6">
            <select className="form-select">
            {_.range(1, MAX_GROOVE, 0.1).map(value => <option key={value} value={value}>{value.toFixed(1)}</option>)}
            </select>
          </div>       
        </div>
        <div className="col-sm-3">
          <label>Vasen takarengas</label>
          <div className="col-sm-6">
            <select className="form-select">
            {_.range(1, MAX_GROOVE, 0.1).map(value => <option key={value} value={value}>{value.toFixed(1)}</option>)}
            </select>
          </div>       
        </div>
        <div className="col-sm-3">
          <label>Vasen eturengas</label>
          <div className="col-sm-6">
            <select class="form-select">
            {_.range(1, MAX_GROOVE, 0.1).map(value => <option key={value} value={value}>{value.toFixed(1)}</option>)}
            </select>
          </div>       
        </div>
        <div class="col-sm-12">
          <label>Havaittu poikkeama</label>
          <textarea type="text" class="form-control" rows="2"/>
        </div> */}
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
      <div className="col-sm-4">
        <label>Tilausnumero</label>
      </div>
      <div className="col-sm-4">
        <label>PVM</label>
      </div>
      <div className="col-sm-4">
        <label>Rekisteri</label>
      </div>
      <div className="col-sm-3">
        <label>Tähän tulee tilausnumero</label>
      </div>
      <div className="col-sm-3">
        <label>Tähän tulee päivämäärä</label>
      </div>
      <div className="col-sm-3">
        <label>Tähän tulee rekisteri</label>
      </div>
      <div className="col-sm-3">
        <button className="btn btn-primary">RAPORTTI</button>
      </div>
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