import React from 'react';
import { useEffect, useState } from 'react';
//import axios from 'axios';

const URL = "http://localhost/rengasvarasto-back/API/customer/read_single.php";

export default function Asiakas() {
  const[etunimi, setEtunimi] = useState("");
  const[sukunimi, setSukunimi] = useState("");

<<<<<<< HEAD
  useEffect(()=>{
    axios.get(URL + "?id=2")
    .then((response) => {
      setEtunimi(response.data.etunimi);
      setSukunimi(response.data.sukunimi);
    }).catch(error => {
      alert(error);
    })
  },[])
=======
  // useEffect(()=>{
  //   axios.get(URL + "?id=1")
  //   .then((response) => {
  //     setEtunimi(response.data.etunimi);
  //     setSukunimi(response.data.sukunimi);
  //   }).catch(error => {
  //     alert(error);
  //   })
  // },[])
>>>>>>> eae3af996344038eedf1ff4592e7b6b5a264826d

  return (
    <div >
      <h1>Asiakkaan tiedot</h1>
      <p>{etunimi}</p>
      <p>{sukunimi}</p>
    </div>
  );
}
