import React, {useState} from 'react';
import Search from './search';

// kuinka tallennetaan myös auton tiedot samalla?

export default function Order({url, cart, empty, removeFromCart}) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [city, setCity] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [register, setRegister] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    
    const [finished, setFinished] = useState(false);

    function order(e) {
        e.preventDefault();
        fetch(url + 'order/add.php', { 
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                phone: phone,
                email: email,
                address: address,
                zipcode: zipcode,
                city: city,
                employee_id: employeeId,
                cart: cart,
            })
        })
        .then (res => {
            return res.json();
        })
        .then (
            (res) => {
                console.log(res);
                empty();
                setFinished(true);
            }, (error) => {
                alert(error);
            }
        );
    }

    let sum = 0;

    if (finished === false) {
        return (
            <div className="container-fluid">
                <h4>Tilaus</h4>
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

                {cart.length > 0 && 
                <>
                    <h4>Asiakastiedot</h4>

                    <Search />

                    <form onSubmit={order}>
                        <div>
                            <div>
                                <input placeholder="Etunimi"value={firstname} onChange={e => setFirstname(e.target.value)}/>
                            </div>
                            <div>
                                <input placeholder="Sukunimi"value={lastname} onChange={e => setLastname(e.target.value)}/>
                            </div>
                            <div>
                                <input placeholder="Puhelin"value={phone} onChange={e => setPhone(e.target.value)}/>
                            </div>
                            <div>
                                <input placeholder="Sähköposti"value={email} onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <div>
                                <input placeholder="Katuosoite"value={address} onChange={e => setAddress(e.target.value)}/>
                            </div>
                            <div>
                                <input placeholder="Postinumero"value={zipcode} onChange={e => setZipcode(e.target.value)}/>
                            </div>
                            <div>
                                <input placeholder="Postitoimipaikka"value={city} onChange={e => setCity(e.target.value)}/>
                            </div>
                        </div>

                    </form>
                </>}
            </div>
        )
    } else {
        return (
            <div>
                <h3>Tilaus onnistui.</h3>
            </div>
            
        );
    }
}