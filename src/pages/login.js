import React, {useState} from 'react';
import '../style/style.css';
import {boxShadowStyle, buttonStyle} from '../style/colors';

//const URL = 'php-kansio'; // tämä haetaan app.js

// tämä pitää vaihtaa englanniksi!

export default function Login({setUser}) {
  const [employee, setEmployee] = useState('');
  const [password, setPassword] = useState('');

  async function login(e) {
    e.preventDefaul();
    const formData = new FormData();

    formData.append('employee', employee);
    formData.append('password', password);

    const config = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept' : 'application/json',
      },
      body: formData
    }

    const response = await fetch(URL, config); // URL kuntoon
    const json = await response.json();

    if (response.ok) {

      setUser(json);
      // avaa koti-sivun
    } else { // tänne voi laittaa if-rakenteen erilaisille erroreille
      alert("Kirjautuminen epäonnistui");
    }

  }

  return (
    <>
        <div className='row justify-content-md-center mt-5 button'>
          
         
          <div className='col-md-6 searchCar' style={boxShadowStyle}>
          <h1>KIRJAUDU SISÄÄN</h1>
          <hr></hr>
            <form onSubmit={login}>

              <div className='mb-3'>
                <input type='text' 
                className="form-control" name='employee'
                value= {employee} placeholder='Käyttäjätunnus' 
                onChange={e => setEmployee(e.target.value)}/>
              </div>

              <div class='mb-3'>
                <input type='password' class="form-control input" name='password' placeholder='Salasana' 
                value={password} onChange={e => setPassword(e.target.value)}/>
              </div>
              
              <button class='btn btn-primary button' style={buttonStyle}>Kirjaudu sisään</button>
            </form>
        </div>
      </div>
    </>
  );
}
