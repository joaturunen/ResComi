import React, { useEffect, useState } from 'react';
import Tab from '../components/tab/Tab';


// tämä avautuu hakutuloksesta, ei näy navissa

export default function Customer({ url, customerId }) {


  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [saved, setSaved] = useState('');
  const [employeeId, setEmployeeId] = useState('');


  // haetaan tietokannasta yhden asiakkaan tiedot
  useEffect(() => {

    async function getSingleCustomer() {
      let address = '';

      address = url + 'customer/customer_read_single.php?id=' + 1;

      try {
        const response = await fetch(address);
        const json = await response.json();
        if (response.ok) {
          setFirstname(json.firstname);
          setLastname(json.lastname);
          setPhone(json.phone);
          setEmail(json.email);
          setAddress(json.address);
          setZipcode(json.zipcode);
          setCity(json.city);
          setSaved(json.customersaved);
          setEmployeeId(json.employee_id);
        } else {
          alert(json.error);
        }
      } catch (error) {
        alert(error);
      }
    }

    getSingleCustomer();

  }, [url, customerId]);

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
      <div class="container-fluid">
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
      </div>
    </>
  );
};
/* <div class="col-sm-3">,
      <label>Lähiosoite</label>,
      <input type="text" class="form-control" />,
    </div>,
    <div class="col-sm-3">,
      <label>Asiakkuus luotu</label>,
      <input type="text" class="form-control" />,
    </div>,
    <div class="col-sm-4">,
      <label>Etunimi</label>,
      <input type="text" class="form-control" />,
    </div>,
    <div class="col-sm-4">,
      <label>Postinumero</label>,
      <input type="text" class="form-control" />,
    </div>,
    <div class="col-sm-4">,
      <label>Sukunimi</label>,
      <input type="text" class="form-control" />,
    </div>,
    <div class="col-sm-4">,
      <label>Postitoimipaikka</label>,
      <input type="text" class="form-control" />,
    </div>,
    <div class="col-sm-4">,
      <label>Puhelinumero</label>,
      <input type="text" class="form-control" />,
    </div>,
    <div class="col-sm-4">,
      <label>Sähköposti</label>,
      <input type="text" class="form-control" />,
    </div>,

     <p>{firstname}</p>
        <p>{lastname}</p>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{address}</p>
        <p>{zipcode}</p>
        <p>{city}</p>
        <p>{saved}</p>
        <p>{employeeId}</p>
        */
