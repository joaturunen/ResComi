import React, {useState} from 'react';
import NewCustomer from './newCustomer';
import NewCar from './newCar';
import SearchCustomer from './searchCustomer';

// kuinka tallennetaan myös auton tiedot samalla?

export default function Order({url, cart, empty, removeFromCart, setCustomer, customer}) {
    
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
                <div>
                    <h3>Tilaus</h3>
                    <table>
                        <tbody>
                            {cart.map((service, id) => {
                                sum+=parseFloat(service.price);
                                return (
                                    <tr key={id}>
                                        <td>{service.service}</td>
                                        <td>{service.price}</td>
                                        <td><a href="#" onClick={() => removeFromCart(service)}>Poista</a></td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td></td>
                                <td>{sum.toFixed(2)} €</td>
                                <td></td>
                                <td><a href="#" onClick={() => empty()}>Tyhjennä tilaus</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h4>Asiakastiedot</h4>
                    <div>
                        <SearchCustomer url={url} setCustomer={setCustomer}/>
                    </div>
                    <div>
                        <NewCustomer url={url}/>
                    </div>
                    <div>
                        <NewCar url={url} customer={customer}/>
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