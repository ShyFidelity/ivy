

export default function Contact(){
    return (
        <div>
            <h1>Contact</h1>
            {" "}
          <a
            href="tel:3035043536"
            onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
          >
            <p class="call-button">303-504-3536</p>
          </a>

        </div>
    )
}