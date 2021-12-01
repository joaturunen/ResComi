import React, { useState } from 'react';
import { MdEmojiObjects } from 'react-icons/md';
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
      title: "Ajoneuvo",
      content: 
      <div class="row col-sm-6">
      <div class="col-sm-4">
        <label>Rekisterinumero</label>
        <input type="text" class="form-control" />
        {/* <Car car={car}/> */}
      </div>,
    },
    {
      title: "Renkaat",
      content: 
      <div class="row col-sm-6">
      <div class="col-sm-4">
        <label>Rengaspaikka</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col-sm-4">
        <label>Rengasmerkki</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col-sm-4">
        <label>Vannetyyppi</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col-sm-3">
        <label>Rengastyyppi</label>
        <div class="col-sm-6">
          <select class="form-select">
          <option value="1">Kesä</option>
          <option value="2">Talvi</option>
          <option value="3">Kitka</option>
        </select>
        </div>       
      </div>
      <div class="col-sm-3">
        <label>Pölykapselit</label>
        <div class="col-sm-6">
          <select class="form-select">
          <option value="1">Kyllä</option>
          <option value="2">Ei</option>
        </select>
        </div>       
      </div>
      <div class="col-sm-3">
        <label>Renkaan koko</label>
        <div class="col-sm-6">
          <select class="form-select">
          <option value="1">14</option>
          <option value="2">15</option>
          <option value="3">16</option>
          <option value="4">17</option>
          <option value="5">18</option>
          <option value="6">19</option>
          <option value="7">20</option>
          <option value="8">21</option>
          <option value="9">22</option>
        </select>
        </div>       
      </div>
      <div class="col-sm-3">
        <label>Pultit</label>
        <div class="col-sm-6">
          <select class="form-select">
          <option value="1">14</option>
          <option value="2">15</option>
          <option value="3">16</option>
          <option value="4">17</option>
          <option value="5">18</option>
          <option value="6">19</option>
          <option value="7">20</option>
          <option value="8">21</option>
          <option value="9">22</option>
        </select>
        </div>       
      </div>
      <div class="col-sm-12">
        <h5 class="text-center">Urasyvyydet</h5>
      </div>
      <div class="col-sm-3">
        <label>Oikea eturengas</label>
        <div class="col-sm-6">
          <select class="form-select">
                {objects.map(function(object, i) {
                  return <ObjectRow obj={object} key={1} />
                })}
              
        </select>
        </div>       
      </div>
      <div class="col-sm-3">
        <label>Oikea takarengas</label>
        <div class="col-sm-6">
          <select class="form-select">
          <option value="1">1</option>
          <option value="2">1,1</option>
          <option value="3">1,2</option>
          <option value="4">1,3</option>
          <option value="5">1,4</option>
          <option value="6">1,5</option>
          <option value="7">20</option>
          <option value="8">21</option>
          <option value="9">22</option>
        </select>
        </div>       
      </div>
      <div class="col-sm-3">
        <label>Vasen takarengas</label>
        <div class="col-sm-6">
          <select class="form-select">
          <option value="1">1</option>
          <option value="2">1,1</option>
          <option value="3">1,2</option>
          <option value="4">1,3</option>
          <option value="5">1,4</option>
          <option value="6">1,5</option>
          <option value="7">20</option>
          <option value="8">21</option>
          <option value="9">22</option>
        </select>
        </div>       
      </div>
      <div class="col-sm-3">
        <label>Vasen eturengas</label>
        <div class="col-sm-6">
          <select class="form-select">
          <option value="1">1</option>
          <option value="2">1,1</option>
          <option value="3">1,2</option>
          <option value="4">1,3</option>
          <option value="5">1,4</option>
          <option value="6">1,5</option>
          <option value="7">20</option>
          <option value="8">21</option>
          <option value="9">22</option>
        </select>
        </div>       
      </div>
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