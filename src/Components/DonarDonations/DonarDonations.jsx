import React, { useState } from 'react';
import './DonarDonations.scss';

function DonarDonations() {
    const [donationsList, setstatedonationsList] = useState([
        {
            name: "Damon Salvator",
            email: "damon@gmail.com",
            phone: "1234567890",
            food: "I have Human Blood!",
            address: "I live here and there!",
            region: "Hyderabad",
        },
        {
            name: "Damon Salvator",
            email: "damon@gmail.com",
            phone: "1234567890",
            food: "I have Human Blood!",
            address: "I live here and there!",
            region: "Hyderabad",
        },
        {
            name: "Damon Salvator",
            email: "damon@gmail.com",
            phone: "1234567890",
            food: "I have Human Blood!",
            address: "I live here and there!",
            region: "Hyderabad",
        },
    ]);
    return (
        <div>
            <div class="card-columns p-2">
                {donationsList.map((value)=>{
                    return(
                        <div className="card p-2" style={{
                            cursor: "pointer",
                            backgroundColor: "#4d5249",
                            color: "#fff"
                        }}>
                            <h4 className="mr-auto" style={{
                                textAlign: "left",
                            }}>
                                Donar Details:
                            </h4>
                            <h3><span style={{fontWeight: "900"}}>Name: </span>{value.name}</h3>
                            <p><span style={{fontWeight: "900"}}>Email: </span>{value.email}</p>
                            <p><span style={{fontWeight: "900"}}>Food:</span> {value.food}</p>
                            <p><span style={{fontWeight: "900"}}>Address: </span>{value.address}</p>
                            <p><span style={{fontWeight: "900"}}>Contact:</span> {value.phone}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default DonarDonations;
