import React, {useState} from 'react';
import '../style/style.css';


export default function Kirjaudu() {
  const [ktunnus, setKtunnus] = useState('');
  const [salasana, setSalasana] = useState('');

  function onPress(){

  }

  return (
    <div class='container kirjaudu'>
        <div>
          <div>
            <h2>Kirjaudu sisään</h2>
          </div>
          <div>
            <form onSubmit={onPress()}>

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
