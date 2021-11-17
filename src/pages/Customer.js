import React from 'react';
import { useEffect, useState } from 'react';


const URL = "http://localhost/rengasvarasto-back/API/customer/read_single.php";

export default function Customer() {
  const[etunimi, setEtunimi] = useState("");
  const[sukunimi, setSukunimi] = useState("");

  useEffect(() => {

    async function getCustomer() {
      let address = '';

      address = URL + "asnro";
    
      try {
        const response = await fetch(address);
        const json = await response.json();
        if (response.ok) {
          setEtunimi(json.etunimi);
          setSukunimi(json.sukunimi);
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
      <p>{etunimi}</p>
      <p>{sukunimi}</p>
    </div>
  );
}
