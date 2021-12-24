import NailsCarousel from '../components/Carousel'
import CarouselData from '../components/CarouselData'


function Gallery() {
    return (

<div className="container">
    <h1>Gallery</h1>
    <NailsCarousel slides={CarouselData}/>

</div>

    )
    
}

export default Gallery