import React, { Component } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

import "./Services.css";

export default function Services() {
  return (
    <div className="container">
      <h1>Services</h1>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Manicures</Accordion.Header>
          <Accordion.Body>
            <Container fluid>
              <Row>
                <Col lg>
                  <p>Classic Manicure</p>
                </Col>
                <Col lg>
                  <p>$</p>
                </Col>
              </Row>
              <Row>
                <Col lg>Gel Full set</Col>
                <Col lg>$</Col>
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
            <Container fluid>
              <Row>
                <Col sm>
                  {" "}
                  <p>Classic Pedicure</p>
                </Col>
                <Col sm>
                  {" "}
                  <p>$</p>
                </Col>
              </Row>
              <Row>
                <Col sm>Gel Pedicure</Col>
                <Col sm>$</Col>
              </Row>
              <Row>
                <Col sm>Callus Removal</Col>
                <Col sm>$</Col>
              </Row>
              <Row></Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Waxing</Accordion.Header>
          <Accordion.Body>
            <Container fluid>
              <Row>
                <Col sm>
                  {" "}
                  <p>Chin Waxing</p>
                </Col>
                <Col sm>
                  {" "}
                  <p>$</p>
                </Col>
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
                <Col sm>Nose Hair Waxing</Col>
                <Col sm>$</Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Eyelashes</Accordion.Header>
          <Accordion.Body>
            <Container fluid>
              <Row>
                <Col sm>Eyelash Extensions</Col>
                <Col sm>$</Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
