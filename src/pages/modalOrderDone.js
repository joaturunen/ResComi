import React,{useState, useEffect} from 'react';
import {buttonStyle} from '../style/colors';
import '../style/modal.css';


export default function ModalOrderDone({showModal, closeModal, info}) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailed, setShowFailed] = useState(false);
  
const alertSuccees =
  <div className="p-2">
  <div class="alert alert-success" role="alert">
    Lisäys onnistui. Voit poistua näkymästä
  </div>
</div>;


const alertFailed =
  <div className="p-2">
  <div class="alert alert-danger" role="alert">
    Lisäys epäonnistui. :D
  </div>
</div>;


  const content = <>
  <div className="modalBackground">
    <div className="modalContainer3">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={()=>{closeModal(false);}}>
        <span aria-hidden="true">&times;</span>
      </button>
      <div class="d-flex flex-row">
        <div className="p-2">
          <h3>Tilauksen tallentaminen</h3>
      </div>
      </div>
      <hr/>
      <div>
      { showSuccess && (alertSuccees)}
      { showFailed && (alertFailed)}
      </div>
        <div>
          <div className='row'>
            {info.status}
            {info.orderNRO}
            <div className='col-12 d-flex justify-content-end '>
              <button className='btn' style={buttonStyle} onClick={()=>{closeModal(false);}}>OK</button>
            </div>
          </div>
      </div>
  </div>
  </div>
  </>;

  return (
      <>
      <div>
        { showModal && (content)}
      </div>
      </>
    
  );
}