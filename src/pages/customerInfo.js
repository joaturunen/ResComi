import React , {useEffect, useState } from 'react';

// EI SAA KOSKEA

// tämä avautuu hakutuloksesta, ei näy navissa

export default function CustomerInfo({url, customer_id}) {
    const [customerData, setCustomerData] = useState([]);
    const [cus_id, setCus_id] = useState(customer_id);


    useEffect(() => {
        console.log(cus_id);
        //let address = url + 'customer/customer_read_cus_cars_tires.php';
        let status = 0;
        fetch(url + 'customer/customer_read_cus_cars_tires.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cus_id: cus_id
            })
        })
        .then(res => {
            status = parseInt(res.status);
            return res.json();
        })
        .then(
            (res) => {
                if (status === 200) {
                setCustomerData(customerData => [...customerData, res]);
                } else {
                alert(res.error);
                }
            }, (error) => {
                alert(error);
            }
        );

    }, []);

    return (
        <>
          <div>
            <h5>Asiakkaan tiedot</h5>
            <p>{customerData.firstname}</p>
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