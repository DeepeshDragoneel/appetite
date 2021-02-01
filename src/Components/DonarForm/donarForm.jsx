import React, {useState} from 'react';
import './donarForm.scss';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import DonarDonations from '../DonarDonations/DonarDonations.jsx';

const useStyles = makeStyles({
    donarToggleButtons: {
        margin: "2rem 1rem",
        padding: "11px",
        backgroundColor: "#000000",
        color: "#fff",
        outline: "none",
        border: "none",
        background: "linear-gradient(142deg, rgba(198,230,107,1) 0%, rgba(80,192,246,1) 100%)",
    },
    donarToggleButtonsSelect:{
        background: "#fff !important",
        color: "black",
        outline: "none",
        border: "4px red solid"
    }
})

function DonarForm(props) {
    const [alignment, setAlignment] = useState('left');
    const [selectedButton, setselectedButton] = useState({
        one: true,
        two: false,
    });
    const handleToogleButton= () => {
        setselectedButton({
            one: !selectedButton.one,
            two: !selectedButton.two,
        })
    }
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const classes = useStyles(props);
    return (
        <Router>
            <div style={{
                textAlign: "center",

            }}>
            <h1 style={{
                    fontFamily: "'Abril Fatface', cursive",
                    letterSpacing: "0px !important",
                    fontSize: "4rem",
                    wordSpacing: "4px",
                    background: "linear-gradient(142deg, rgba(198,230,107,1) 0%, rgba(80,192,246,1) 100%)",
                    padding: "2rem",
                    color: "#000000"
                }}>Make a Donation and help us Fight Hunger</h1>
                <ToggleButtonGroup size="small" value={alignment} exclusive onChange={handleChange}>
                    <Link></Link>
                    <ToggleButton onClick={()=>{
                        if(!selectedButton.one)    
                            handleToogleButton();
                    }} selected={selectedButton.one} value="center" className={`${classes.donarToggleButtons} ${selectedButton.one? "donarToggleButtonsSelect": ""}`}>
                        Give a Donations
                    </ToggleButton>
                    <ToggleButton onClick={()=>{
                        if(!selectedButton.two)    
                            handleToogleButton();
                    }} selected={selectedButton.two} value="right" className={classes.donarToggleButtons}>
                        Your Donations
                    </ToggleButton>
                </ToggleButtonGroup>
                <div style={{
                    display: selectedButton.one?"block":"none",
                }}>
                    <p style={{
                        fontFamily: "'Ubuntu', sans-serif",
                        fontWeight: "900",
                        fontSize: "2rem",
                        marginBottom: "3px"
                    }}>Fill the Following Form to make a Donation!</p>
                    <p>(You to be in Telangana To do the donation)</p>
                    <form style={{
                        width: "80vw",
                        margin: "auto",
                        border: "2px solid black",
                        padding: "1rem",
                        borderRadius: "10px",
                        marginTop: "4rem",
                        marginBottom: "3rem"
                    }}>
                        <div class="form-row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="First name of the Donar" required></input>
                            </div>
                            <div class="col">
                            <input type="text" class="form-control" placeholder="Last name of the Donar" required></input>
                            </div>
                        </div>
                        <div class="form-group m-4">
                            <label for="exampleInputEmail1" style={{
                                fontWeight: "900"
                            }}>Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                            <div class="invalid-tooltip">
                                Please Enter you Email to for the Acceptor to Contact
                                </div>
                        </div>
                        <div class="form-group m-4">
                            <label for="phone" style={{
                                fontWeight: "900"
                            }}>Phone Number</label>
                            <input type="tel" class="form-control" id="phone" name="phone"
                                pattern="[0-9]{10}"
                            required></input>
                            <div class="invalid-tooltip">
                                Please Enter your Proper Mobile Number to contact you!
                            </div>
                        </div>
                        <div class="form-group m-4">
                            <label for="food" style={{
                                fontWeight: "900"
                            }}>What Food Do you have?</label>
                            <input type="text" class="form-control" id="food"></input>
                        </div>
                        <div class="form-group m-4">
                            <label for="address" style={{
                                fontWeight: "900"
                            }}>Enter Your Address</label>
                            <input type="text" class="form-control" id="address" required></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1" style={{
                                fontWeight: "900"
                            }}>Select Your Region</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                            <option>Adilabad</option>
                                <option>Bhadradri Kothagudem</option>
                                <option selected>Hyderabad</option>
                                <option>Jagitial</option>
                                <option>Jangaon</option>
                                <option>Jayashankar Bhupalpally</option>
                                <option>Jogulamba Gadwal</option>
                                <option>Kamareddy</option>
                                <option>Karimnagar</option>
                                <option>Khammam</option>
                                <option>Komaram Bheem</option>
                                <option>Mahabubabad</option>
                                <option>Mahabubnagar</option>
                                <option>Mancherial</option>
                                <option>Medak</option>
                                <option>Medchal–Malkajgiri</option>
                                <option>Mulugu</option>
                                <option>Nagarkurnool</option>
                                <option>Narayanpet</option>
                                <option>Nalgonda</option>
                                <option>Nirmal</option>
                                <option>Nizamabad</option>
                                <option>Peddapalli</option>
                                <option>Rajanna Sircilla</option>
                                <option>Ranga Reddy</option>
                                <option>Sangareddy</option>
                                <option>Siddipet</option>
                                <option>Suryapet</option>
                                <option>Vikarabad</option>
                                <option>Wanaparthy</option>
                                <option>Warangal Rural</option>
                                <option>Warangal Urban</option>
                                <option>Yadadri Bhuvanagiri</option>
                            </select>
                        </div>
                        <div class="form-check mt-3 mb-3">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" required></input>
                            <label class="form-check-label" for="exampleCheck1">I'll be availiable when people contact me!</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div style={{
                    display: selectedButton.two?"block":"none",
                }}>
                    <DonarDonations></DonarDonations>
                </div>
            </div>
        </Router>
    )
}

export default DonarForm;
