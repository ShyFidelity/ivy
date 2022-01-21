import '../pages/Main.css'
import { Container, Row, Col } from "react-bootstrap";
import HandRose from '../images/handrose.png';


const MainInfo  = () => {

    return (
        <div className='main-bg'>
    <Container>
    <Row>
      <Col className="p" sm>
      <p>Established in 2008.

Ivy Nails first opened in the summer of 2007 and has been the best neighborhood nail salon in Denver.
</p>
      </Col>
    </Row>

 
    <Row>
      {" "}
      <button className='mainBtn'>Get in touch now</button>
    </Row>
  </Container>   
  </div>
    )
}

export default MainInfo