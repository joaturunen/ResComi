import React, { useState } from 'react';
import { MdEmojiObjects } from 'react-icons/md';
import Tab from '../components/tab/Tab';
<<<<<<< HEAD
=======
import CustomerInfo from './customerInfo';
import Car from './car';
>>>>>>> 99c44d0bd2b23df372762ab910736eb6bb8f7bde

// tämä avautuu hakutuloksesta, ei näy navissa

export default function Customer({ url, customer, car }) {

  const tabContent = [
    {
      title: "Perustiedot",
<<<<<<< HEAD
      content:
        <div class="row col-sm-6">
          <div class="col-sm-4">
            <label>Etunimi</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-sm-4">
            <label>Sukunimi</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-sm-4">
            <label>Asiakkuus luotu</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-sm-4">
            <label>Lähiosoite</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-sm-4">
            <label>Postinumero</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-sm-4">
            <label>Postitoimipaikka</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-sm-4">
            <label>Puhelinumero</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-sm-1">
            <label class="form-check-label" for="suoramarkkinointi1">Lupa?</label>
            <input type="checkbox" class="form-check-input" id="suoramarkkinointi1" value="phone" />
          </div>
          <div class="col-sm-4">
            <label>Sähköposti</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-sm-1">
            <label class="form-check-label" for="suoramarkkinointi2">Lupa?</label>
            <input type="checkbox" class="form-check-input" id="suoramarkkinointi2" value="email" />
          </div>
          <div class="col-sm-12">
            <label>Ajoneuvot</label>
            <ul>
              <li>LOL-666</li>
              <li>LOL-666</li>
              <li>LOL-666</li>
            </ul>
          </div>
          <div class="col-sm-6">
            <button class="btn btn-primary">Lisää ajoneuvo</button>
          </div>
          <div class="col-sm-6">
            <button class="btn btn-primary">Tallenna</button>
          </div>
        </div>,
=======
      content: <div class="col-sm-3">
        <label>Etunimi</label>
        <input type="text" class="form-control" />
        {/* <CustomerInfo customer={customer} /> */}
      </div>,
>>>>>>> 99c44d0bd2b23df372762ab910736eb6bb8f7bde
    },
    {
      title: "Ajoneuvo",
      content: 
      <div class="row col-sm-6">
      <div class="col-sm-4">
        <label>Rekisterinumero</label>
        <input type="text" class="form-control" />
<<<<<<< HEAD
      </div>
      <div class="col-sm-4">
        <label>Merkki</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col-sm-4">
        <label>Malli</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col-sm-4">
        <label>Vuosimalli</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col-sm-4">
        <label>Säilytyskausi</label>
        <div class="col-sm-6">
          <select class="form-select">
          <option value="1">Kesä</option>
          <option value="2">Talvi</option>
        </select>
        </div>       
      </div>
      <div class="col-sm-4">
        <label>Lisätietoja</label>
        <textarea rows="3"/>
      </div>
=======
        {/* <Car car={car}/> */}
>>>>>>> 99c44d0bd2b23df372762ab910736eb6bb8f7bde
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