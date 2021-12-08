import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaWarehouse, FaSearch, FaList } from 'react-icons/fa'; 
import {MdPersonAdd } from 'react-icons/md';
import {GiTireIron} from 'react-icons/gi';
import Print from '../printable/Print';
import {LinkStyle} from '../style/colors';
import NewCar from './newCar';
import ModalNewCustomer from './modalNewCustomer';


export default function Home({url}) {

  const [rooli, setRooli] = useState('');
  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function Modal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function Close() {
  modal.style.display = "none";
}

/* // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}  */

function tallennaRooli(e) {

  console.log("Tallennettava data: " +  rooli)
  e.preventDefault();
  let status = 0;
  fetch('http://localhost/post-testi/back.php', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          role: rooli,
      })
  })
  .then(res => {
      return res.json();
  })
  .then(
      (res) => {

        console.log("Vastaamista : " + res);

      }, (error) => {
          alert(error);
      }
  );

}

  return (
    <>
      <div className='mt-5'>

        <div className='row justify-content-md-center'>

        
        <Link to="./searchPage" className='col-4 button link shadow' style={LinkStyle}>
            <FaSearch size={35} className= 'mt-4'/>
            <p class='hometext pt-2'>HAE</p>
          </Link>

          <Link to="./warehouse" className='col-3 link shadow button' style={LinkStyle}>
          <FaWarehouse size={40} className='mt-4'/>
          <p class='hometext pt-2'>VARASTO</p>
          </Link>
        </div>

        <div className='row justify-content-md-center'> 

          <Link to="./order" className='col-3 link button shadow' style={LinkStyle}>
            <GiTireIron size={40}  className='mt-4'/>
            <p class='hometext pt-2'>UUSI TILAUS</p>
          </Link>

          <Link to="./completedOrders" className='col-4 mb-3 button shadow link' style={LinkStyle}>
          <FaList size={35}  className='mt-4'/>
            <p class='hometext pt-2'>VALMIIT TILAUKSET</p>
          </Link>
        </div>



        <div className='row'>
          <Link to="../printable/Print" className='col-3 button'>
            <GiTireIron size={40} />
            <p>Printtisivutesti</p>
          </Link>

          <Link to="./onecustomer" className='col-3 button'>
          <MdPersonAdd size={40} /> 
            <p>oneCustomer</p>
          </Link>    
        </div>
      </div>
      <ModalNewCustomer url="url" />
    </>
  );
}
