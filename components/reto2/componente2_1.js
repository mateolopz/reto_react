import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Componente2_1 = () => {
    
    const [progress, setProgress] = useState(0);
    const handleChange = (e) => {
        if (e.target.value > 100) {
            setProgress(100);
            return;
        }
        setProgress(e.target.value);
    }

    return (
        <Container fluid style={{alignItems:"center",justifyContent:"center"}}>
            <div style={{paddingTop:"25vh", paddingLeft:"43vh"}}>
            <text style={{fontSize:"45px"}}>
                <strong>Progress bar</strong>
            </text>
            </div>
            <div style={{backgroundColor:"grey"}}>
                <div style={{height:"75.25px", width: `${progress}%` ,backgroundColor:"green"}}></div>
            </div>
            <input style={{marginTop:"25px",marginLeft:"49vh"}}id="percentage" onChange={handleChange}></input>
        </Container>
    );}

export default Componente2_1;