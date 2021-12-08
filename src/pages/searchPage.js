import React from 'react';
import SearchCar from './searchCar';
import SearchCustomer from './searchCustomer';
import { boxColorLayot, boxShadowStyle, buttonStyle } from '../style/colors';

export default function SearchPage({url, setCustomer_id, customer_id}) {

    return (
        <div className='row'>
            <div className='row' style={boxColorLayot}>
                <div className='row mt-3 mb-3'>
                    <h3>Haku</h3>
                </div>
                <div className='col'>
                    <SearchCar url={url} setCustomer_id={setCustomer_id} />
                </div>
                <div className='col'>
                    <SearchCustomer url={url} setCustomer_id={setCustomer_id} customer_id={customer_id} />
                </div>
            </div>
            
        </div>
        
    )
}