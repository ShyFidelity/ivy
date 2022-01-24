import React, { Component } from 'react';
import {Container, Row, Col, Accordion} from 'react-bootstrap'


import { render } from "react-dom";
import Plx from "react-plx";

const exampleParallaxData = [
  {
    start: 0,
    end: 1000,
    properties: [
      {
        startValue: 0,
        endValue: -500,
        property: "translateY"
      }
    ]
  }
];

const plxStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: 40,
  color: "#fff",
  position: "fixed",
  width: "100%",
  height: 600,
  flexDirection: "column"
};

const wrapperStyles = {
  position: "relative",
  height: 600,
  overflow: "hidden",
  background:
    "url(../images/ivybg.png) no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed"
};



export default function Services(){
    return (
        <div >

<div style={{ height: 1000 }}>
    <div style={wrapperStyles}>
      <Plx parallaxData={exampleParallaxData} style={plxStyles}>
      <h1>Services</h1>



  <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Manicures</Accordion.Header>
    <Accordion.Body>
    <Container>
  <Row>
  <Col sm>  <p>Classic Manicure</p></Col>
  <Col sm>  <p>$</p></Col>
  </Row>
  <Row>
    <Col sm>Gel Full set</Col>
    <Col sm>$</Col>
  </Row>
  <Row>
  <Col sm>Gel Extensions</Col>
    <Col sm>$</Col>
  </Row>
  <Row>
  <Col sm>Gel Removal</Col>
    <Col sm>$</Col>

  </Row>
  <Row>
  <Col sm>French Tip Full Set</Col>
    <Col sm>$</Col>

  </Row>
</Container>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Pedicures</Accordion.Header>
    <Accordion.Body>
    <Container>
  <Row>
  <Col sm>  <p>Classic Pedicure</p></Col>
  <Col sm>  <p>$</p></Col>
  </Row>
  <Row>
    <Col sm>Gel Pedicure</Col>
    <Col sm>$</Col>
  </Row>
  <Row>
  <Col sm>Callus Removal</Col>
    <Col sm>$</Col>
  </Row>
  <Row>

  </Row>
</Container>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Waxing</Accordion.Header>
    <Accordion.Body>
    <Container>
  <Row>
  <Col sm>  <p>Chin Waxing</p></Col>
  <Col sm>  <p>$</p></Col>
  </Row>
  <Row>
    <Col sm>Full Face Waxing</Col>
    <Col sm>$</Col>
  </Row>
  <Row>
  <Col sm>Eyebrow Waxing</Col>
    <Col sm>$</Col>
  </Row>
  <Row>
  <Col sm>Lip Waxing</Col>
    <Col sm>$</Col>
  </Row>
  <Row>
  <Col sm>Norse Hair Waxing</Col>
    <Col sm>$</Col>
  </Row>
 
</Container>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Eyelashes</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

      </Plx>
    </div>
  </div>


          
         
        

        </div>
    )
}