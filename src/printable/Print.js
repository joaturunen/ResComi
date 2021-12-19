import React, { useEffect, useState } from 'react';
import '../style/style.css';
import logo3 from '../images/logo3.svg';
import { buttonStyle } from '../style/colors';
<<<<<<< HEAD
import '../style/modal.css';
=======
>>>>>>> d71d09607138e3181268e23a5ec15f175f9a4c7e
import {URL} from '../back/Config';

export default function Print({ order_id}) {

  
  const [openReport, setOpenReport] = useState(false);

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
  const [additionalInfo, setAdditionalInfo] = useState('');

  // Order info
  const [orderNumber, setOrderNumber] = useState('');
  const [orderdate, setOrderdate] = useState('');
  const [services, setServices] = useState([]);
  const [warehouse, setWarehouse] = useState('');
  const [shelf, setShelf] = useState('');
  const [slot, setSlot] = useState('');

  // Tirehotel info
  const [companyName, setCompanyName] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [companyZip, setCompanyZip] = useState('');
  const [companyCity, setCompanyCity] = useState('');


  // useEffect(() => {
  //   let status = 0;
  //   fetch(URL + 'order/order_print.php', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       order_id: order_id
  //     })
  //   })
  //   .then(res => {
  //     status = parseInt(res.status);
  //     return res.json();
  //   })
  //   .then(
  //     (res) => {
  //       if (status === 200) {
  //         setCompanyName(res.office.name);
  //         setCompanyPhone(res.office.phone);
  //         setCompanyEmail(res.office.email);
  //         setCompanyAddress(res.office.address);
  //         setCompanyZip(res.office.zip);
  //         setCompanyCity(res.office.city);
  //         setFirstName(res.customer.firstname);
  //         setLastName(res.customer.lastname);
  //         setPhone(res.customer.phone);
  //         setEmail(res.customer.email);
  //         setAddress(res.customer.address);
  //         setZip(res.customer.zipcode);
  //         setCity(res.customer.city);
  //         setCarRegister(res.car.register);
  //         setCarBrand(res.car.brand);
  //         setCarModel(res.car.model);
  //         setTireBrand(res.tire_brand);
  //         setTireModel(res.tires.model);
  //         setTireSize(res.tires.size);
  //         setTireType(res.tires.type);
  //         setHubcups(res.tires.hubcups);
  //         setRims(res.tires.rims);
  //         setTirebolt(res.tires.tirebolt);
  //         setGrooveFl(res.tires.groovefl);
  //         setGrooveFr(res.tires.groovefr);
  //         setGrooveBl(res.tires.groovebl);
  //         setGrooveBr(res.tires.groovebr);
  //         setTireInfo(res.tires.tireInfo);
  //         setAdditionalInfo(res.tires.additionalInfo);
  //         setOrderdate(res.order.orderdate);
  //         setServices(res.services.services);
  //         setWarehouse(res.warehouse.name);
  //         setShelf(res.shelf.id);
  //         setSlot(res.slot.id);
  //       } else {
  //         alert(res.error);
  //       }
  //     }, (error) => {
  //       alert(error);
  //     }
  //   );

  // }, [order_id]);


  const content =
    <>
    {/* <div className="modalBackground">
      <div className="modalContainer">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={()=>{setOpenReport(false);}}>
            <span aria-hidden="true">&times;</span>
        </button> */}
          <form className="ml-5">
              <div className='header' >
                <div className='row'>
                  <img className='img logo' src={logo3} alt="Printtilogo" />
                </div>
              </div>
              <div className="col-sm-6">
                <button className="btn" id="printButton" style={buttonStyle} onClick={() => window.print()}>Tulosta</button>
              </div> 

              {/** yrityksen ja asiakkaan tiedot */}
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

              {/** auto ja säilytyspaikka */}
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
                  <h5 className='m-2'>Säilytyspaikka</h5>
                  <ul className="list-group">
                    <li className="list-group-item">Varasto: {warehouse}</li>
                    <li className="list-group-item">Hylly: {shelf}</li>
                    <li className="list-group-item">Paikka: {slot}</li>
                  </ul>
                </div>
              </div>

              {/** renkaat */}
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
              <div className='row container-fluid'>
                <h5 className='m-2'>Tilauksen tiedot</h5>
                <div className="col-sm-6">
                  <ul className="list-group" > 
                    <li>Ostetut palvelut:</li>
                    {services.map(service => (
                      <li className="list-group-item" key={service.id} >{service.service}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="list-group" >
                    <li>Tilauspäivä: {orderdate} </li>
                    <li>Yhteensä: XX €</li>
                  </ul>
                </div>
              </div>
              <div className='row container-fluid'>
                <div className="col-sm-6">
                  <textarea className="col-sm-12" rows="3" placeholder="Asiakkaan allekirjoitus ja päiväys:" />
                </div>
                <div className="col-sm-6">
                  <textarea className="col-sm-12" rows="3" placeholder="Työntekijän allekirjoitus:" />
                </div>
              </div>
          </form>
        {/* </div>
      </div> */}
    </>

  return (
    <>
        <div>
            <button className="btn"  style={buttonStyle} onClick={()=>{
                setOpenReport(true);
                }}>Raportti</button>
            { openReport && (content)}
        </div>
    </>
    
);
}
