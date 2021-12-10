import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import {boxShadowStyle, buttonStyle, boxColorLayot} from '../style/colors';

export default function SearchOrders() {
    const [showPrintSite, setShowPrintSite] = useState(false);

    // { url, setOrders_id, orders_id } value={orders_id} onChange={inputOrders(orders)} 
    /*function inputOrders(orders) {
        setOrders_id(orders.id);
    }*/
    
  return (
    <>
      <div className="padding" style={boxColorLayot}>
          <h4>Tulosta tilaus</h4>
          <form>
              <label className="form-label">Tulosta tilaus tilausnumerolla</label>
              <input type='text' className="form-control"
                  placeholder='Syötä tilausnumero...' maxLength="10"
              />
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Link to="/printable/Print" target="_blank" className="btn button" style={buttonStyle}>Siirry tulostukseen</Link>
              </div>
          </form>
      </div>
     
    </>
    
  );
}
