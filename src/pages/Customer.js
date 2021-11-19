import React from 'react';
import { useEffect, useState} from 'react';
import {URL, CUSTOMER_READ_SINGLE} from '../back/Config';

export default function Customer() {
  const[firstname, setFirstname] = useState("");
  const[lastname, setLastname] = useState("");

  useEffect(() => {

    async function getCustomer() {
      let address = URL + CUSTOMER_READ_SINGLE + "?id=3";
    
      try {
        const response = await fetch(address); 
        const json = await response.json();
        if (response.ok) {
          setFirstname(json.firstname);
          setLastname(json.lastname);
        } else {
          alert(json.error);
        }
      } catch (error) {
        alert(error);
      }
    }
    
    getCustomer();

  }, []);

  return (
    <div >
      <h1>Asiakkaan tiedot</h1>
      <p>{firstname}</p>
      <p>{lastname}</p>
    </div>
  );
}
