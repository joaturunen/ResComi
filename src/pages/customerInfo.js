import React , {useEffect, useState } from 'react';

// EI SAA KOSKEA

// tämä avautuu hakutuloksesta, ei näy navissa

export default function CustomerInfo({url, customer_id}) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [city, setCity] = useState('');
    const [customersaved, setCustomersaved] = useState('');
    const [cus_id, setCus_id] = useState(customer_id);
    

    useEffect(() => {
        console.log(cus_id);
        console.log("Asiakkaan numero : " + cus_id + " 1");
        //let address = url + 'customer/customer_read_cus_cars_tires.php';
        let status = 0;
        fetch('http://localhost/rengasvarasto-back/API/customer/customer_read_cus_cars_tires.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cus_id: cus_id
            })
        })
        .then(res => {
            console.log("Välitiedot ");
            status = parseInt(res.status);
            console.log("status " + status);
            return res.json();
        })
        .then(
            (res) => {
              console.log("Nyt tarkistetaan status " + status);
                if (status === 200) {

                setFirstname(res.customer.firstname);
                setLastname(res.customer.lastname);
                setPhone(res.customer.phone);
                setEmail(res.customer.email);
                setAddress(res.customer.address);
                setZipcode(res.customer.zipcode);
                setCity(res.customer.city);
                setCustomersaved(res.customer.customersaved);

                } else {
                alert(res.error);
                }
            }, (error) => {
                console.log("Täällä virheissä");
                alert(error);
            }
        );

    }, [customer_id]);

    return (
        <>
          <div>
            <h5>Asiakkaan tiedot</h5>
            <p>{firstname}</p>
            <p>{lastname}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{address}</p>
            <p>{zipcode}</p>
            <p>{city}</p>
            <p>{customersaved}</p>
            {/* <p>{employeeId}</p> */}
          </div>
          <div>
            <h5>Auton tiedot</h5>
          </div>
        </>
    );
}