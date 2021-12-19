import React from 'react';
import SearchCar from './searchCar';
import SearchCustomer from './searchCustomer';
import { boxColorLayot } from '../style/colors';
import {URL} from '../back/Config';

export default function SearchPage({setCustomer_id, customer_id, setOrders_id, orders_id}) {
    return (
        <div>
          <h3>Haku</h3>
          <div class="row">
            <div class="col" style={boxColorLayot}><SearchCar setCustomer_id={setCustomer_id} /></div>
            <div class="col" style={boxColorLayot}><SearchCustomer setCustomer_id={setCustomer_id} customer_id={customer_id} /></div>
          </div>
      </div>
    )
}