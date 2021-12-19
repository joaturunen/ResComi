import React,{useState, useEffect} from 'react';
import { buttonStyle, Customerdata } from '../style/colors';
import '../style/modal.css';
import {URL} from '../back/Config';

export default function ComponentCustomer({customerData}) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');


  useEffect(() => {
    if(customerData[0]){
      setFirstname(customerData[0].firstname);
      setLastname(customerData[0].lastname);
      setAddress(customerData[0].address);
      setZipcode(customerData[0].zipcode);
      setCity(customerData[0].city);
      setPhone(customerData[0].phone);
      setEmail(customerData[0].email);
    }
  }, [customerData]);

  const content =
  <>
  <div style={Customerdata} className='d-flex flex-row'>
    <div className='p-2'>
      <p><strong>{firstname} {lastname}</strong></p>
      <p>{address}</p>
      <p>{zipcode} {city}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
    <div className='p-2 ml-auto align-self-end'>
      <button class='btn' style={buttonStyle}>Muokkaa</button>
    </div>

  </div>
  </>;

  return (
      <>
      <div>
        { (customerData[0] == null) ? (
        <div class="alert alert-warning" role="alert">
          Asiakasta ei ole valittuna
        </div>) : (<p>{content}</p>)}
      </div>
      </>
    
  );
}
