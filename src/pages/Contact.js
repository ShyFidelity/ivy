import Phone from "../images/callivy.png";
import Location from "../images/location1.png";
import "./Contact.css";

const buttonStyle = {
  fontFamily: "Josefin Sans",
  backgroundColor: "pink",
  marginLeft: ".5rem",
  padding: "5px",
};

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <div className="contact-content">
        <div>
          <img className="contact-img" src={Phone} alt="" />
            {" "}
            <a
              href="tel:3035043536"
              onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
            >
              <button style={buttonStyle}>303-504-3536</button>
            </a>
            </div>
            <div>
          <img className="contact-img" style={{ marginLeft: "40px" }} src={Location} alt="" />
            {" "}
            <p style={{ marginTop: "85px", textAlign: "center" }}>
              6300 E Hampden Ave Unit G, Denver, CO 80222
            </p>
            </div>
      </div>
    </div>
  );
}
