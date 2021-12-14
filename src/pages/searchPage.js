import React from 'react';
import SearchCar from './searchCar';
import SearchCustomer from './searchCustomer';
import { boxColorLayot, boxShadowStyle, buttonStyle } from '../style/colors';

export default function SearchPage({url, setCustomer_id, customer_id, setOrders_id, orders_id}) {
    return (
        <div>
          <h3>Haku</h3>
          <div class="row">
            <div class="col" style={boxColorLayot}><SearchCar url={url} setCustomer_id={setCustomer_id} /></div>
            <div class="col" style={boxColorLayot}><SearchCustomer url={url} setCustomer_id={setCustomer_id} customer_id={customer_id} /></div>
          </div>
      </div>
    )
}