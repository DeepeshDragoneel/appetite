import React, { useState, useEffect } from 'react';
import './AcceptopPage.scss';

function AcceptopPage() {
    const [acceptorRegion, setacceptorRegion] = useState("Hyderabad");
    const [search, setsearch] = useState("");
    const [filteredFoodItems, setfilteredFoodItems] = useState([]);
    const onChangeHandler = (e) => {
        console.log(e.target.value);
        setacceptorRegion(e.target.value);
    }
    const [fooditems, setfooditems] = useState([
        {
            name: "Damon Salvatore",
            email: "damon@gmail.com",
            description: "I have Biriyani",
            contact: "1234567890",
            address: "heasreaasd",
            region: "Hyderabad"
        },
        {
            name: "Stefan Salvatore",
            email: "stefan@gmail.com",
            description: "I have Bread",
            contact: "1234567890",
            address: "heasreaasd",
            region: "Hyderabad"
        },
        {
            name: "Damon Salvatore",
            email: "damon@gmail.com",
            description: "I have Biriyani",
            contact: "1234567890",
            address: "heasreaasd",
            region: "Hyderabad"
        },
        {
            name: "Stefan Salvatore",
            email: "stefan@gmail.com",
            description: "I have Bread",
            contact: "1234567890",
            address: "heasreaasd",
            region: "Hyderabad"
        },
        {
            name: "Damon Salvatore",
            email: "damon@gmail.com",
            description: "I have Biriyani",
            contact: "1234567890",
            address: "heasreaasd",
            region: "Hyderabad"
        },
        {
            name: "Stefan Salvatore",
            email: "stefan@gmail.com",
            description: "I have Bread",
            contact: "1234567890",
            address: "heasreaasd",
            region: "Hyderabad"
        },
        {
            name: "Damon Salvatore",
            email: "damon@gmail.com",
            description: "I have Biriyani",
            contact: "1234567890",
            address: "heasreaasd",
            region: "Hyderabad"
        },
        {
            name: "Stefan Salvatore",
            email: "stefan@gmail.com",
            description: "I have Bread",
            contact: "1234567890",
            address: "heasreaasd",
            region: "Hyderabad"
        },
        {
            name: "Damon Salvatore",
            email: "damon@gmail.com",
            description: "I have Biriyani",
            contact: "1234567890",
            address: "heasreaasd",
            region: "Hyderabad"
        },
        {
            name: "Stefan Salvatore",
            email: "stefan@gmail.com",
            description: "I have Bread",
            contact: "1234567890",
            address: "heasreaasd",
            region: "Hyderabad"
        },
        {
            name: "Klaus",
            email: "damon@gmail.com",
            description: "I have Biriyani",
            contact: "1234567890",
            address: "heasreaasd",
            region: "Adilabad"
        },
        {
            name: "Elijah",
            email: "damon@gmail.com",
            description: "I have Biriyani",
            contact: "1234567890",
            address: "heasreaasd",
            region: "Adilabad"
        },
    ]);

    /* useEffect(
        setfilteredFoodItems(fooditems.filter(function(item) {
            for (var key in fooditems) {
                if (item.name.toLowerCase().includes(search.toLocaleLowerCase()) || item.address.toLowerCase().includes(search.toLocaleLowerCase()) || item.description.toLowerCase().includes(search.toLocaleLowerCase()))
                    return true;
                }
                return false;
        })) , [search, fooditems]); */

    useEffect(()=>{
        setfilteredFoodItems(
            fooditems.filter(card=>{
                return card.name.toLowerCase().includes(search.toLowerCase()) || card.address.toLowerCase().includes(search.toLocaleLowerCase()) || card.description.toLowerCase().includes(search.toLocaleLowerCase())
            })
        )
    }, [search, fooditems])

    return (
        <div style={{
            textAlign: "center"
        }}>
            <label for="selectCity" style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                margin: "auto",
                marginTop: "1rem"
            }}>Select the District:</label>
            <select class="form-control" value={acceptorRegion} id="exampleFormControlSelect1" name="selectCity" style={{
                maxWidth: "50rem",
                margin: "auto",
                marginTop: "2rem",
                marginBottom: "4rem"
            }} onChange={(e)=>{onChangeHandler(e)}}>
                <option value="Adilabad">Adilabad</option>
                <option value="Bhadradri Kothagudem">Bhadradri Kothagudem</option>
                <option value="Hyderabad" selected>Hyderabad</option>
                <option value="Jagitial">Jagitial</option>
                <option value="Jangaon">Jangaon</option>
                <option value="Jayashankar Bhupalpally">Jayashankar Bhupalpally</option>
                <option value="Jogulamba Gadwal">Jogulamba Gadwal</option>
                <option value="Kamareddy">Kamareddy</option>
                <option value="Karimnagar">Karimnagar</option>
                <option value="Khammam">Khammam</option>
                <option value="Komaram Bheem">Komaram Bheem</option>
                <option value="Mahabubabad">Mahabubabad</option>
                <option value="Mahabubnagar">Mahabubnagar</option>
                <option value="Mancherial">Mancherial</option>
                <option value="Medak">Medak</option>
                <option value="Medchal–Malkajgiri">Medchal–Malkajgiri</option>
                <option value="Mulugu">Mulugu</option>
                <option value="Nagarkurnool">Nagarkurnool</option>
                <option value="Narayanpet">Narayanpet</option>
                <option value="Nalgonda">Nalgonda</option>
                <option value="Nirmal">Nirmal</option>
                <option value="Nizamabad">Nizamabad</option>
                <option value="Peddapalli">Peddapalli</option>
                <option value="Rajanna Sircilla">Rajanna Sircilla</option>
                <option value="Ranga Reddy">Ranga Reddy</option>
                <option value="Sangareddy">Sangareddy</option>
                <option value="Siddipet">Siddipet</option>
                <option value="Suryapet">Suryapet</option>
                <option value="Vikarabad">Vikarabad</option>
                <option value="Wanaparthy">Wanaparthy</option>
                <option value="Warangal Rural">Warangal Rural</option>
                <option value="Warangal Urban">Warangal Urban</option>
                <option value="Yadadri Bhuvanagiri">Yadadri Bhuvanagiri</option>
            </select>
            <input className=" mb-4" placeholder="Search 🔍" onChange={(e)=>{setsearch(e.target.value)}} style={{
                padding: "8px",
                outline: "none",
                width: "50vw",
                textAlign: "center",
                fontSize: "1.2rem",
            }}></input>
            <div class="card-columns p-2">
                {filteredFoodItems.map((value)=>{
                    if(value.region===acceptorRegion){
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
                                <p><span style={{fontWeight: "900"}}>Food:</span> {value.description}</p>
                                <p><span style={{fontWeight: "900"}}>Address: </span>{value.address}</p>
                                <p><span style={{fontWeight: "900"}}>Contact:</span> {value.contact}</p>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    )
}

export default AcceptopPage;
