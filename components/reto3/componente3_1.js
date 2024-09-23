import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Componente3_1 = () => {
    const [nameInput, setNameInput] = useState("")
    const [fullNameInput, setFullNameInput] = useState("")
    const [ageInput, setAgeInput] = useState("")

    const send_alert = () => {
        let age = Number(ageInput);
        if (nameInput === "" || fullNameInput === "" || ageInput === "") {
            alert("Please fill all the fields");
        } else {
            if (isNaN(age)) {
                alert("Invalid input data");
            } else {
                if (typeof(nameInput) != "string" || typeof(fullNameInput) != "string" || typeof(Number(ageInput)) != "number") {
                    alert("Invalid input data");
                } else {
                    alert("Request Sent to DB with below request data: \nUsername: "+nameInput+"\nFullname: "+fullNameInput+"\nAge: "+ageInput);
                }
            }
        }

    }

    return (
        <Container fluid>
            <Col>
            <h1>Username:</h1>
            <input type="text" id="username" onChange= {(event)=> setNameInput(event.target.value)}></input>
            <h1>FullName:</h1>
            <input type="text" id="fullname" onChange= {(event)=> setFullNameInput(event.target.value)}></input>
            <h1>Age:</h1>
            <input type="text" id="age" onChange= {(event)=> setAgeInput(event.target.value)}></input>
            <input type="submit" value="Submit" onClick={()=>send_alert()}></input>
            </Col>
        </Container>
    );
};

export default Componente3_1;