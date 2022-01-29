import "../pages/Main.css";
import Star from '../images/star.svg'
import { Container, Row, Col } from "react-bootstrap";

const pStyle = {
  fontSize: "13px",
  textAlign: "center",
  marginTop: "10rem",
  maxWidth: "300px",
};

const buttonStyle = {
  fontFamily: "Josefin Sans",
  backgroundColor: "pink",
};
const MainInfo = () => {
  return (
    <div className="main-bg">
      <Container>
        <Row>
          <Col style={pStyle} sm>
            <p>
              Established in 2008. Ivy Nails first opened in the summer of 2007
              and has been the best neighborhood nail salon in Denver. The
              interior was thoughtfully designed for style, comfort, and
              exceptional hygiene.
            </p>
          </Col>
          <Col style={pStyle} sm>
            <p>
              We offer much more than just a manicure. Try our new gel extensions a healthier alternative to acrylics and much long lasting! 
            </p>
          </Col>

          <Col style={pStyle} sm>
           " <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />"
            <p>
              See our services page and yelp reviews for more! 
            </p>
          </Col>
        </Row>

        <Row>
          <a
            href="tel:3035043536"
            onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
          >
            <p>
              <button style={buttonStyle}>Get in touch now!</button>
            </p>
          </a>
        </Row>
      </Container>
    </div>
  );
};

export default MainInfo;
