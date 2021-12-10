import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import {boxShadowStyle, buttonStyle, boxColorLayot} from '../style/colors';

export default function SearchOrders() {
    const [showPrintSite, setShowPrintSite] = useState(false);

    // { url, setOrders_id, orders_id } value={orders_id} onChange={inputOrders(orders)} 
    /*function inputOrders(orders) {
        setOrders_id(orders.id);
    }*/

    function goToPrint() {  
        setShowPrintSite(true);
    }  
        
    if (showPrintSite === true) {
        return (
            <Navigate to="/printable/Print" />
        )
    }  
    
  return (
    <>
      <div className="padding" style={boxColorLayot}>
          <h4>Tulosta tilaus</h4>
          <form>
              <label className="form-label">Tulosta tilaus</label>
              <input type='text' className="form-control"
                  placeholder='Syötä tilausnumero...' maxLength="10"
              />
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn button" style={buttonStyle} onClick={() => {goToPrint()}}>Siirry tulostukseen</button>
              </div>
          </form>
      </div>
     
    </>
    
  );
}
