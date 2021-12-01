import React, { useState } from 'react';
import Tab from '../components/tab/Tab';


// tämä avautuu hakutuloksesta, ei näy navissa

export default function Customer({ url, customer }) {


  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [saved, setSaved] = useState('');
  const [employeeId, setEmployeeId] = useState('');

  const tabContent = [
    {
      title: "Perustiedot",
      content: <div class="col-sm-3">
        <label>Etunimi</label>
        <input type="text" class="form-control" />
      </div>,
    },
    {
      title: "Auto",
      content: <div class="col-sm-3">
        <label>Rekisterinumero</label>
        <input type="text" class="form-control" />
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
              <Tab active={1}>
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
