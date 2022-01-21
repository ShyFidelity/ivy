import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'


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
    "url(https://deploy-preview-5--reinventsoftwareio.netlify.com/static/cover.841dad16.jpg) no-repeat",
  backgroundSize: "cover",
  backgroundAttachment: "fixed"
};



export default function Services(){
    return (
        <div className="container">

<div style={{ height: 1000 }}>
    <div style={wrapperStyles}>
      <Plx parallaxData={exampleParallaxData} style={plxStyles}>
        <h1>We build modern, reliable software to help you work better.</h1>
        <button>Get in touch now</button>
      </Plx>
    </div>
  </div>

<h1>Services</h1>
<Container>
  <Row>
  <Col sm>  <p>Manicures</p></Col>
  </Row>
  <Row>
    <Col sm>  <p>Pedicures</p></Col>

  </Row>
  <Row>
    <Col sm>  <p>Waxing</p></Col>

  </Row>
  <Row>
    <Col sm>  <p>Eyelashes</p></Col>

  </Row>
  <Row>
    <Col sm>  <p>Pedicures</p></Col>

  </Row>
</Container>
          
         
        

        </div>
    )
}