import React , {useEffect, useState } from 'react';

// EI SAA KOSKEA

// tämä avautuu hakutuloksesta, ei näy navissa

export default function CustomerInfo({url, customer_id}) {
    const [customerData, setCustomerData] = useState({});
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [city, setCity] = useState("");
    const [customersaved, setCustomersaved] = useState("");
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
                cus_id: 1
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
            {/* <p>{customer.lastname}</p>
            <p>{customer.phone}</p>
            <p>{customer.email}</p>
            <p>{customer.address}</p>
            <p>{customer.zipcode}</p>
            <p>{customer.city}</p>
            <p>{customer.saved}</p>
            <p>{customer.employeeId}</p> */}
          </div>
          <div>
            <h5>Auton tiedot</h5>
          </div>
        </>
    );
}