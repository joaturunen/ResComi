import React from 'react';
import SearchCar from './searchCar';
import SearchCustomer from './searchCustomer';

export default function SearchPage({url, setCustomer_id, customer_id}) {

    return (
        <div>
            <div>
                <SearchCustomer url={url} setCustomer_id={setCustomer_id} customer_id={customer_id} />
            </div>
            <div>
                <SearchCar url={url} setCustomer_id={setCustomer_id}/>
            </div>
        </div>
    )
}