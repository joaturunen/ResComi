import React, {useState} from 'react';
import '../style/style.css';

const URL = 'php-kansio'; // tämä pitää lisätä

export default function Kirjaudu({setUser}) {
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
      alert("Kirjautuminen epäonnistui")
    }

  }

  return (
    <div class='container-fluid kirjaudu'>
        <div>
          <div>
            <h2>Kirjaudu sisään</h2>
          </div>
          <div>
            <form onSubmit={login}>

              <div class='mb-3'>
                <label class="form-label">Käyttäjätunnus</label>
                <input type='text' class="form-control" name='ktunnus'
                value= {ktunnus} placeholder='Käyttäjätunnus' 
                onChange={e => setKtunnus(e.target.value)}/>
              </div>

              <div class='mb-3'>
                <label class="form-label">Salasana</label>
                <input type='password' class="form-control input" name='salasana' placeholder='Salasana' 
                value={salasana} onChange={e => setSalasana(e.target.value)}/>
              </div>
              
              <button class='btn btn-primary button'>Kirjaudu sisään</button>
            </form>
        </div>
      </div>
    </div>
  );
}
