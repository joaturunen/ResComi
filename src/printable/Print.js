import React, { useState } from 'react';
import '../style/style.css';
import logo3 from '../images/logo3.svg';

export default function Print() {

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
  const [CompanyAddress, setCompanyAddress] = useState('');
  const [CompanyZip, setCompanyZip] = useState('');
  const [CompanyCity, setCompanyCity] = useState('');

  return (
      <>
      <div className="printable">
        <div className='header' >
          <div className='row'>
            <img className='logo' src={logo3} />
          </div>
        </div>
        <div className='row'>
          <h2 class="text-center">orderNumber</h2>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div class="col-sm-6">
              <ul class="list-group">
                <li class="list-group-item">Yritys:</li>
                <li class="list-group-item">companyName</li>
                <li class="list-group-item">companyPhone</li>
                <li class="list-group-item">companyEmail</li>
                <li class="list-group-item">companyAddress</li>
                <li class="list-group-item">companyZip</li>
                <li class="list-group-item">companyCity</li>
              </ul>
            </div>
            <div class="col-sm-6">
              <ul class="list-group">
                <li class="list-group-item">Asiakas:</li>
                <li class="list-group-item">firstname, lastname</li>
                <li class="list-group-item">phone</li>
                <li class="list-group-item">email</li>
                <li class="list-group-item">address</li>
                <li class="list-group-item">zip</li>
                <li class="list-group-item">city</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row'>
          <h2 class="text-center">Säilytyspaikka</h2>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div class="col-sm-4">
              <ul class="list-group">
                <li class="list-group-item">warehouse</li>
              </ul>
              </div>
              <div class="col-sm-4">
                <ul class="list-group">
                  <li class="list-group-item">self</li>
                </ul>
                </div>
                <div class="col-sm-4">
                  <ul class="list-group">
                    <li class="list-group-item">slot</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='row'>
              <h2 class="text-center">Auton Info</h2>
            </div>
            <div className='container-fluid'>
              <div className='row'>
                <div class="col-sm-4">
                  <ul class="list-group" >
                  <li class="list-group-item">carRegister</li>
                  </ul>
                </div>
                <div class="col-sm-4">
                  <ul class="list-group" >
                  <li class="list-group-item">carModel</li>
                  </ul>
                </div>
                <div class="col-sm-4">
                  <ul class="list-group" >
                  <li class="list-group-item">tireModel</li>
                  </ul>
                </div>
                <div class="col-sm-3">
                  <ul class="list-group" >
                  <li class="list-group-item">tireSize</li>
                  </ul>
                </div>
                <div class="col-sm-3">
                  <ul class="list-group" >
                  <li class="list-group-item">tireType</li>
                  </ul>
                </div>
                <div class="col-sm-3">
                  <ul class="list-group" >
                  <li class="list-group-item">hubcups</li>
                  </ul>
                </div>
                <div class="col-sm-3">
                  <ul class="list-group" >
                  <li class="list-group-item">tirebolt</li>
                  </ul>
                </div>
                <div class="col-sm-3">
                  <ul class="list-group" >
                  <li class="list-group-item">groovefl</li>
                  </ul>
                </div>
                <div class="col-sm-3">
                  <ul class="list-group" >
                  <li class="list-group-item">groovebl</li>
                  </ul>
                </div>
                <div class="col-sm-3">
                  <ul class="list-group" >
                  <li class="list-group-item">groovebr</li>
                  </ul>
                </div>
                <div class="col-sm-3">
                  <ul class="list-group" >
                  <li class="list-group-item">groovefr</li>
                  </ul>
                </div>
                <div class="col-sm-6">
                  <ul class="list-group" >
                  <li class="list-group-item">services</li>
                  </ul>
                </div>
                <div class="col-sm-6">
                  <ul class="list-group" >
                  <li class="list-group-item">tireinfo</li>
                  </ul>
                </div>
                <div>
                  <textarea class="col-sm-12" placeholder="additionalInfo" />
                </div>
              </div>
            </div>
          </div>
        </>
        )
}
