import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../style/style.css';
import logo3 from '../images/logo3.svg';
import { buttonStyle } from '../style/colors';
import '../style/modal.css';
import {URL} from '../back/Config';

// order printable report form

export default function Print() {

  let params = useParams();

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
  const [tireBrand, setTireBrand] = useState('');
  const [tireModel, setTireModel] = useState('');
  const [tireSize, setTireSize] = useState('');
  const [tireType, setTireType] = useState('');
  const [hubcups, setHubcups] = useState('');
  const [rims, setRims] = useState('');
  const [tirebolt, setTirebolt] = useState('');
  const [groovefl, setGrooveFl] = useState('');
  const [groovefr, setGrooveFr] = useState('');
  const [groovebl, setGrooveBl] = useState('');
  const [groovebr, setGrooveBr] = useState('');
  const [tireInfo, setTireInfo] = useState('');

  // Order info
  const [orderdate, setOrderdate] = useState('');
  const [service_name, setService_name] = useState('');

  // Tirehotel info
  const [companyName, setCompanyName] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [companyZip, setCompanyZip] = useState('');
  const [companyCity, setCompanyCity] = useState('');


  useEffect(() => {

    // retrieves single order data

    async function getOrderData() {
      let address = URL + 'order/order_print.php/' + params.order_id;
      try {
        const response = await fetch(address);
        const json = await response.json();
        if (response.ok) {
          console.log(json);
          setCompanyName(json.office[0].name);
          setCompanyPhone(json.office[0].phone);
          setCompanyEmail(json.office[0].email);
          setCompanyAddress(json.office[0].address);
          setCompanyZip(json.office[0].zipcode);
          setCompanyCity(json.office[0].city);
          setFirstName(json.orderdata[0].customer_firstname);
          setLastName(json.orderdata[0].customer_lastname);
          setPhone(json.orderdata[0].customer_phone);
          setEmail(json.orderdata[0].customer_email);
          setAddress(json.orderdata[0].customer_address);
          setZip(json.orderdata[0].customer_zipcode);
          setCity(json.orderdata[0].customer_city);
          setCarRegister(json.orderdata[0].car_register);
          setCarBrand(json.orderdata[0].car_brand);
          setCarModel(json.orderdata[0].car_model);
          setTireBrand(json.orderdata[0].tire_brand);
          setTireModel(json.orderdata[0].tire_model);
          setTireSize(json.orderdata[0].tire_size);
          setTireType(json.orderdata[0].tire_type);
          setHubcups(json.orderdata[0].tire_hubcups);
          setRims(json.orderdata[0].tire_rims);
          setTirebolt(json.orderdata[0].tire_tirebolt);
          setGrooveFl(json.orderdata[0].tire_groovefl);
          setGrooveFr(json.orderdata[0].tire_groovefr);
          setGrooveBl(json.orderdata[0].tire_groovebl);
          setGrooveBr(json.orderdata[0].tire_groovebr);
          setTireInfo(json.orderdata[0].tire_info);
          setOrderdate(json.orderdata[0].order_date);
          setService_name(json.orderdata[0].service_title);
        } else {
          alert(json.error);
        }

      } catch (error) {
        alert(error);
      }
    }
    getOrderData();

  }, [params.order_id]);


  return (
    <>
          <form className="ml-5">
              <div className='header' >
                <div className='row'>
                  <img className='img logo' src={logo3} alt="Printtilogo" />
                </div>
              </div>
              <div className="col-sm-6">
                <button className="btn" id="printButton" style={buttonStyle} onClick={() => window.print()}>Tulosta</button>
              </div>

              {/** office and customer info */}
              <div className='container-fluid row'>
                <div className="col-sm-6">
                  <h5 className='m-2'>Asiakastiedot</h5>
                  <ul className="list-group">
                    <li className="list-group-item">Nimi: {firstName} {lastName}</li>
                    <li className="list-group-item">Puhelinnumero: {phone}</li>
                    <li className="list-group-item">Sähköposti: {email}</li>
                    <li className="list-group-item">Katuosoite: {address}</li>
                    <li className="list-group-item">Postinumero: {zip}</li>
                    <li className="list-group-item">Postitoimipaikka: {city}</li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <h5 className='m-2'>Rengashotelli Horros</h5>
                  <ul className="list-group">
                    <li className="list-group-item">Konttori: {companyName}</li>
                    <li className="list-group-item">Puhelinnumero: {companyPhone}</li>
                    <li className="list-group-item">Sähköposti: {companyEmail}</li>
                    <li className="list-group-item">Katuosoite: {companyAddress}</li>
                    <li className="list-group-item">Postinumero: {companyZip}</li>
                    <li className="list-group-item">Postitoimipaikka: {companyCity}</li>
                  </ul>
                </div>
              </div>

              {/** car info */}
              <div className='row container-fluid'>
                <div className="col-sm-6">
                  <h5 className='m-2'>Auton tiedot</h5>
                  <ul className="list-group" >
                    <li className="list-group-item">Rekisterinumero: {carRegister}</li>
                    <li className="list-group-item">Merkki: {carBrand}</li>
                    <li className="list-group-item">Malli: {carModel}</li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  
                </div>
              </div>

              {/** tires info */}
              <div className='row container-fluid'>
                <h5 className='m-2'>Renkaiden tiedot</h5>
                <div className="col-sm-6">
                  <ul className="list-group" >
                    <li className="list-group-item">Renkaat: {tireBrand} {tireModel}</li>
                    <li className="list-group-item">Rengastyyppi: {tireType}</li>
                    <li className="list-group-item">Renkaiden koko: {tireSize}</li>
                    <li className="list-group-item">Vanteet: {rims}</li>
                    <li className="list-group-item">Pölykapselit: {hubcups}</li>
                    <li className="list-group-item">Pultit: {tirebolt}</li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="list-group" >
                    <li className="list-group-item">  Urasyvyydet:
                      <ul>
                        <li>Etu-vasen: {groovefl}</li>
                        <li>Taka-vasen: {groovebl}</li>
                        <li>Taka-oikea: {groovebr}</li>
                        <li>Etu-oikea: {groovefr}</li>
                      </ul>
                    </li>
                    <li className="list-group-item">Kuntoarvio: {tireInfo}</li>
                  </ul>
                </div>
              </div>

              {/** order info */}
              <div className='row container-fluid'>
                <h5 className='m-2'>Tilauksen tiedot</h5>
                <div className="col-sm-6">
                  <ul className="list-group" > 
                    <li>Ostetut palvelut:</li>
                    <li className="list-group-item" >{service_name}</li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="list-group" >
                    <li>Tilauspäivä: {orderdate} </li>
                    <li>Yhteensä: XX €</li>
                  </ul>
                </div>
              </div>

              {/** signatures */}
              <div className='row container-fluid'>
                <div className="col-sm-6">
                  <textarea className="col-sm-12" rows="3" placeholder="Asiakkaan allekirjoitus ja päiväys:" />
                </div>
                <div className="col-sm-6">
                  <textarea className="col-sm-12" rows="3" placeholder="Työntekijän allekirjoitus:" />
                </div>
              </div>
          </form>
    </>
  );
}
