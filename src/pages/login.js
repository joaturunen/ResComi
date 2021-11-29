import React, {useState} from 'react';
import '../style/style.css';

//const URL = 'php-kansio'; // tämä haetaan app.js

// tämä pitää vaihtaa englanniksi!

export default function Login({setUser}) {
  const [ktunnus, setKtunnus] = useState('');
  const [salasana, setSalasana] = useState('');

  async function login(e) {
    e.preventDefaul();
    const formData = new FormData();

    formData.append('ktunnus', ktunnus);
    formData.append('salasana', salasana);

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
        <div>
          <div>
            <h1>Kirjaudu sisään</h1>
          </div>
          <div>
            <form onSubmit={login} class='login'>

              <div class='mb-3'>
                
                <input type='text' class="form-control" name='ktunnus'
                value= {ktunnus} placeholder='Käyttäjätunnus' 
                onChange={e => setKtunnus(e.target.value)}/>
              </div>

              <div class='mb-3'>
                
                <input type='password' class="form-control input" name='salasana' placeholder='Salasana' 
                value={salasana} onChange={e => setSalasana(e.target.value)}/>
              </div>
              
              <button class='btn btn-primary button'>Kirjaudu sisään</button>
            </form>
        </div>
      </div>
    </>
  );
}
