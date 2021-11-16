import React from 'react';
import { useEffect, useState, alert } from 'react';
import axios from 'axios';

const URL = "http://localhost/rengashotelli-back/API/customer/read_single.php";

export default function Asiakas() {
  const[etunimi, setEtunimi] = useState("");
  const[sukunimi, setSukunimi] = useState("");

  useEffect(()=>{
    axios.get(URL + "?id=1")
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
