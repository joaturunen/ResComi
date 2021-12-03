import React, {useState} from 'react';
import NewCustomer from './newCustomer';
import NewCar from './newCar';
import SearchCustomer from './searchCustomer';
import { boxColorLayot } from '../style/colors';
import {FaTrash, FaTimes } from 'react-icons/fa'; 
import {buttonStyle } from '../style/colors';


// kuinka tallennetaan myös auton tiedot samalla?

export default function Order({url, cart, empty, removeFromCart, setCustomer_id, customer}) {
    
    const [finished, setFinished] = useState(false);

    // tämä ei vielä toimi, ei ole backissa!!
    // function order(e) {
    //     e.preventDefault();
    //     fetch(url + 'order/add.php', { 
    //         method: 'POST',
    //         header: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             customer: customer,
    //             cart: cart,
    //         })
    //     })
    //     .then (res => {
    //         return res.json();
    //     })
    //     .then (
    //         (res) => {
    //             console.log(res);
    //             empty();
    //             setFinished(true);
    //         }, (error) => {
    //             alert(error);
    //         }
    //     );
    // }

    let sum = 0;

    if (finished === false) {
        return (
            <>
            <div className='row'>
                <div className='row' style={boxColorLayot}>
                    <div className='col-7'>
                    <h3>Tilaus</h3>
                    <table className="table px-3 table-striped">
                        <tbody>
                            {cart.map((service, id) => {
                                sum+=parseFloat(service.price);
                                return (
                                    <tr key={id}>
                                        <td>{service.service}</td>
                                        <td>{service.price}</td>
                                        <td><FaTimes onClick={() => removeFromCart(service)}/></td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td></td>
                                <td>{sum.toFixed(2)} €</td>
                                <td><FaTrash onClick={() => empty()}/></td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className='col-1'></div>
                    <div className='col-4'>
                    <div>
                        <SearchCustomer url={url} setCustomer_id={setCustomer_id}/>
                    </div>
                    <div className='text-center'>
                        <button class='btn btn-primary' style={buttonStyle}>Uusi asiakas</button></div>
                    </div>
                </div>

                <div>
                    
                    <div>
                        <NewCustomer url={url}/>
                    </div>
                    <div>
                        <NewCar url={url} customer={customer}/>
                    </div>
                </div>
                </div>   
                
            </>
        )
    } else {
        return (
            <>
                <h3>Tilaus onnistui.</h3>
            </>
            
        );
    }
}