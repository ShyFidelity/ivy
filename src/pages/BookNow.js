

export default function BookNow(){
    return (
        <div className="container">
            <h1>Book Now</h1>
            {" "}
          <a
            href="tel:3035043536"
            onclick="ga('send', 'event', { eventCategory: 'BookNow', eventAction: 'Call', eventLabel: 'Mobile Button'});"
          >
            <p class="call-button">303-504-3536</p>
          </a>

        </div>
    )
}