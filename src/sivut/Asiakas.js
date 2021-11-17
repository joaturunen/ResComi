import React from 'react';
import { useEffect, useState, alert } from 'react';
import axios from 'axios';
import {URL,CUSTOMER} from '../back/Config';

export default function Asiakas() {
  const[etunimi, setEtunimi] = useState("");
  const[sukunimi, setSukunimi] = useState("");

  useEffect(()=>{
    axios.get(URL + CUSTOMER + "read_single.php?id=1")
    .then((response) => {
      setEtunimi(response.data.etunimi);
      setSukunimi(response.data.sukunimi);
    }).catch(error => {
      alert(error);
    })
  },[])

  return (
    <div >
      <h1>Asiakkaan tiedot</h1>
      <p>{etunimi}</p>
      <p>{sukunimi}</p>
    </div>
  );
}
