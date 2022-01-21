import '../pages/Main.css'
import { Container, Row, Col } from "react-bootstrap";
import HandRose from '../images/handrose.png';


const MainInfo  = () => {

    return (
        <div className='main-bg'>
    <Container>
    <Row>
      <Col sm>
      Established in 2008.

Ivy Nails first opened in the summer of 2007 and has been the best neighborhood nail salon in Denver.
      </Col>
    </Row>

    <Row>   <img src= {HandRose} alt="" /></Row>
    <Row>
      {" "}
      <button>Get in touch now</button>
    </Row>
  </Container>   
  </div>
    )
}

export default MainInfo