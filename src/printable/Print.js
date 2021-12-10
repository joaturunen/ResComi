import React, { useEffect, useState } from 'react';
import '../style/style.css';
import logo3 from '../images/logo3.svg';
import { buttonStyle } from '../style/colors';
import { MdAddToDrive } from 'react-icons/md';

export default function Print({ url, orders_id, customerCars, setCustomerCars, customerTires, setCustomerTires}) {

  // Customer info
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');

  // Car & tire info
  const [carRegister, setCarRegister] = useState('');
  const [carBrand, setCarBrand] = useState('');
  const [carModel, setCarModel] = useState('');
  const [tireModel, setTireModel] = useState('');
  const [tireSize, setTireSize] = useState(0);
  const [tireType, setTireType] = useState('');
  const [hubcups, setHubcups] = useState('');
  const [tirebolt, setTirebolt] = useState('');
  const [groovefl, setGrooveFl] = useState(0);
  const [groovefr, setGrooveFr] = useState(0);
  const [groovebl, setGrooveBl] = useState(0);
  const [groovebr, setGrooveBr] = useState(0);
  const [tireInfo, setTireInfo] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  // Order info
  const [orderNumber, setOrderNumber] = useState(0);
  const [services, setServices] = useState('');
  const [warehouse, setWarehouse] = useState('');
  const [shelf, setShelf] = useState(0);
  const [slot, setSlot] = useState(0);

  // Tirehotel info
  const [companyName, setCompanyName] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [companyZip, setCompanyZip] = useState('');
  const [companyCity, setCompanyCity] = useState('');

  useEffect(() => {
    let status = 0;
    fetch('http://localhost/rengasvarasto-back/API/orders/orders_print.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        orders_id: orders_id
      })
    })
    .then(res => {
      status = parseInt(res.status);
      return res.json();
    })
    .then(
      (res) => {
        if (status === 200) {
          setCompanyName(res.office.name);
          setCompanyPhone(res.office.phone);
          setCompanyEmail(res.office.email);
          setCompanyAddress(res.office.address);
          setCompanyZip(res.office.zip);
          setCompanyCity(res.office.city);
          setFirstName(res.customer.firstname);
          setLastName(res.customer.lastname);
          setPhone(res.customer.phone);
          setEmail(res.customer.email);
          setAddress(res.customer.address);
          setZip(res.customer.zipcode);
          setCity(res.customer.city);
          setCarRegister(res.car.register);
          setCarBrand(res.car.brand);
          setCarModel(res.car.model);
          setTireModel(res.tires.model);
          setTireSize(res.tires.size);
          setTireType(res.tires.type);
          setHubcups(res.tires.hubcups);
          setTirebolt(res.tires.tirebolt);
          setGrooveFl(res.tires.groovefl);
          setGrooveFr(res.tires.groovefr);
          setGrooveBl(res.tires.groovebl);
          setGrooveBr(res.tires.groovebr);
          setTireInfo(res.tires.tireInfo);
          setAdditionalInfo(res.tires.additionalInfo);
          setServices(res.services.services);
          setWarehouse(res.warehouse.name);
          setShelf(res.shelf.id);
          setSlot(res.slot.id);
        } else {
          alert(res.error);
        }
      }, (error) => {
        alert(error);
      }
    );

  }, [orders_id]);


  return (
    <>
      <form>
        <div className="printable">
          <div className='header' >
            <div className='row'>
              <img className='logo' src={logo3} />
            </div>
          </div>

          <div className="input-group container-fluid">
            <div className="input-group-prepend">
              <span className="input-group-text">Tilausnumero:</span>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <input type="text" className="form-control" />
              </div>
              <div className="col-sm-6">
                <button className="btn btn-primary" style={buttonStyle}>Hae</button>
              </div>
            </div>

          </div>
          <div className='container-fluid'>
            <div className='row'>
              <div className="col-sm-6">
                <ul className="list-group">
                  <li className="list-group-item">Yritys:</li>
                  <li className="list-group-item">Konttori: {companyName}</li>
                  <li className="list-group-item">Puhelinnumero: {companyPhone}</li>
                  <li className="list-group-item">Sähköposti: {companyEmail}</li>
                  <li className="list-group-item">Katuosoite: {companyAddress}</li>
                  <li className="list-group-item">Postinumero: {companyZip}</li>
                  <li className="list-group-item">Postitoimipaikka: {companyCity}</li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="list-group">
                  <li className="list-group-item">Asiakas:</li>
                  <li className="list-group-item">Nimi: {firstName}, {lastName}</li>
                  <li className="list-group-item">Puhelinnumero: {phone}</li>
                  <li className="list-group-item">Sähköposti: {email}</li>
                  <li className="list-group-item">Katuosoite: {address}</li>
                  <li className="list-group-item">Postinumero: {zip}</li>
                  <li className="list-group-item">Postitoimipaikka: {city}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='row'>
            <h2 className="text-center">Säilytyspaikka</h2>
          </div>
          <div className='container-fluid'>
            <div className='row'>
              <div className="col-sm-4">
                <ul className="list-group">
                  <li className="list-group-item">Varasto: {warehouse}</li>
                </ul>
              </div>
              <div className="col-sm-4">
                <ul className="list-group">
                  <li className="list-group-item">Hylly: {shelf}</li>
                </ul>
              </div>
              <div className="col-sm-4">
                <ul className="list-group">
                  <li className="list-group-item">Paikka: {slot}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='row'>
            <h2 className="text-center">Auton Info</h2>
          </div>
          <div className='container-fluid'>
            <div className='row'>
              <div className="col-sm-4">
                <ul className="list-group" >
                  <li className="list-group-item">Rekisterinumero: {carRegister}</li>
                </ul>
              </div>
              <div className="col-sm-4">
                <ul className="list-group" >
                  <li className="list-group-item">Merkki: {carBrand}</li>
                </ul>
              </div>
              <div className="col-sm-4">
                <ul className="list-group" >
                  <li className="list-group-item">Malli: {carModel}</li>
                </ul>
              </div>
              <div className='row'>
            <h2 className="text-center">Renkaiden Info</h2>
          </div>
              <div className="col-sm-6">
                <ul className="list-group" >
                  <li className="list-group-item">Renkaat: {tireModel}</li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="list-group" >
                  <li className="list-group-item">Rengastyyppi: {tireType}</li>
                </ul>
              </div>
              <div className="col-sm-4">
                <ul className="list-group" >
                  <li className="list-group-item">Renkaiden koko: {tireSize}</li>
                </ul>
              </div>
              
              <div className="col-sm-4">
                <ul className="list-group" >
                  <li className="list-group-item">Vanteet: {hubcups}</li>
                </ul>
              </div>
              <div className="col-sm-4">
                <ul className="list-group" >
                  <li className="list-group-item">Rengaspultti: {tirebolt}</li>
                </ul>
              </div>
              <div className="col-sm-3">
                <ul className="list-group" >
                  <li className="list-group-item">Etu-vasen: {groovefl}</li>
                </ul>
              </div>
              <div className="col-sm-3">
                <ul className="list-group" >
                  <li className="list-group-item">Taka-vasen: {groovebl}</li>
                </ul>
              </div>
              <div className="col-sm-3">
                <ul className="list-group" >
                  <li className="list-group-item">Taka-oikea: {groovebr}</li>
                </ul>
              </div>
              <div className="col-sm-3">
                <ul className="list-group" >
                  <li className="list-group-item">Etu-oikea: {groovefr}</li>
                </ul>
              </div>
              <div className="col-sm-12">
                <ul className="list-group" >
                  <li className="list-group-item">Ostetut palvelut: {services}</li>
                </ul>
              </div>
              <div className="col-sm-12">
                <ul className="list-group" >
                  <li className="list-group-item">Rengasinfo: {tireInfo}</li>
                </ul>
              </div>
              <div>
                <textarea className="col-sm-12" rows="3" placeholder="Lisätietoa:">{additionalInfo}</textarea>
              </div>
              <div className="col-sm-6">
                <textarea className="col-sm-12" rows="3" placeholder="Noutajan allekirjoitus ja päiväys:" />
              </div>
              <div className="col-sm-6">
                <textarea className="col-sm-12" rows="3" placeholder="Työntekijän allekirjoitus:" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
