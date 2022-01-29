
import {Container, Row, Col} from 'react-bootstrap'
import Phone from '../images/callivy.png'
import Location from '../images/location1.png'
import './Main.css'

const buttonStyle = {
  fontFamily: 'Josefin Sans', 
  backgroundColor: 'pink',
  marginLeft: '.5rem',
  padding: '5px'

}


export default function Contact(){
    return (
        <div className="container">

<h1>Contact</h1>
<Container>
  <Row>
    <Col sm>
      <img src={Phone} alt="" />
      
      <Row>
      {" "}
      <a
        href="tel:3035043536"
        onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
      >
       <button style={buttonStyle}>303-504-3536</button>
       
      </a>
      </Row>
    </Col> 

    <Col sm>  
    <img style={{marginLeft:"40px"}}src={Location} alt="" />
   <Row> <p style={{marginTop: "85px", textAlign:"center"}}>6300 E Hampden Ave Unit G, Denver, CO 80222</p></Row>
    </Col>

  </Row>

</Container>
          
         
              </div>
    )
}