import React, {useState} from 'react';
import '../style/style.css';
import {boxShadowStyle, buttonStyle} from '../style/colors';
import {URL} from '../back/Config';

// login page, unfinished !

export default function Login({/*setUser*/}) {
  const [employee, setEmployee] = useState('Toimari');
  const [password, setPassword] = useState('salasana');

  async function login(e) {
    e.preventDefaul();
    const formData = new FormData();

    formData.append('login', employee);
    formData.append('password', password);

    const config = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept' : 'application/json',
      },
      body: formData
    };
    const url = URL + 'login/login.php';
    const response = await fetch(url, config); 
    const json = await response.json();

    if (response.ok) {
      alert('Kirjatuminen onnistui');
      // setUser(json);
    } else { 
      if (response.status === 401) {
        alert("Kirjautuminen epäonnistui");
      }
    }

  }

  return (
    <>
        <div className='row justify-content-md-center mt-5'>
          
         
          <div className='col-md-6 searchCar' style={boxShadowStyle}>
          <h1>KIRJAUDU SISÄÄN</h1>
          <hr></hr>
            <form onSubmit={login}>

              <div className='mb-3'>
                <input type='text' 
                className="form-control" maxLength={25} name='employee'
                value= {employee} placeholder='Käyttäjätunnus' 
                onChange={e => setEmployee(e.target.value)}/>
              </div>

              <div class='mb-3'>
                <input type='password' className="form-control input" maxLength={25} name='password' 
                placeholder='Salasana' value={password} onChange={e => setPassword(e.target.value)}/>
              </div>
              
              <button class='btn button' style={buttonStyle}>Kirjaudu sisään</button>
            </form>
        </div>
      </div>
    </>
  );
}
