import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Componente1_1 = () => {
    return (
        <Container>
        <Container fluid>
            <Row style={{height:"5vh",backgroundColor:"darkgrey", marginTop:"1vh"}}>             
                <Col>
                <text style={{marginTop:"2vh",marginLeft:"1vh",fontSize:"20px"}}>
                    <strong>Navbar</strong>
                </text>
                <text style={{marginTop:"2vh",marginLeft:"1vh",fontSize:"15px"}}>
                    <strong>Home</strong>
                </text>
                <text style={{marginTop:"2vh",marginLeft:"1vh",fontSize:"15px"}}>
                    <strong>Features</strong>
                </text>
                <text style={{marginTop:"2vh",marginLeft:"1vh",fontSize:"15px"}}>
                    <strong>Pricing</strong>
                </text>
                <text style={{marginTop:"2vh",marginLeft:"1vh",fontSize:"15px"}}>
                    <strong>About</strong>
                </text>
                </Col>
                <Col>
                <Row style={{backgroundColor:"white", height:"2vh", width:"35vh", marginTop:"1vh"}}>
                    Search
                </Row>
                </Col>
                <button style={{marginLeft:"1vh",fontSize:"15px", width:"5vh",marginRight:"5vh"}}>Search</button>
            </Row>
        </Container>
        <Container fluid  className="rotated">
        <Row style={{height:"5vh",backgroundColor:"darkgrey", marginTop:"1vh"}}>             
            <Col>
            <text style={{marginTop:"2vh",marginLeft:"1vh",fontSize:"20px"}}>
                <strong>Navbar</strong>
            </text>
            <text style={{marginTop:"2vh",marginLeft:"1vh",fontSize:"15px"}}>
                <strong>Home</strong>
            </text>
            <text style={{marginTop:"2vh",marginLeft:"1vh",fontSize:"15px"}}>
                <strong>Features</strong>
            </text>
            <text style={{marginTop:"2vh",marginLeft:"1vh",fontSize:"15px"}}>
                <strong>Pricing</strong>
            </text>
            <text style={{marginTop:"2vh",marginLeft:"1vh",fontSize:"15px"}}>
                <strong>About</strong>
            </text>
            </Col>
            <Col>
            <Row style={{backgroundColor:"white", height:"2vh", width:"35vh", marginTop:"1vh"}}>
                Search
            </Row>
            </Col>
            <button style={{marginLeft:"1vh",fontSize:"15px", width:"5vh",marginRight:"5vh"}}>Search</button>
        </Row>
    </Container>
    </Container>
    );}

export default Componente1_1;