
import {Container, Row, Col} from 'react-bootstrap'
export default function Contact(){
    return (
        <div className="container">

<h1>Contact</h1>
<Container>
  <Row>
    <Col>
    {" "}
          <a
            href="tel:3035043536"
            onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
          >
            <p ><button className="call-button">303-504-3536</button></p>
           
          </a>
    </Col> 
  </Row>
  <Row>
    <Col sm>  <p>6300 E Hampden Ave Unit G, Denver, CO 80222</p></Col>

  </Row>
</Container>
          
         
        

        </div>
    )
}