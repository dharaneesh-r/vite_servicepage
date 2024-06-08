import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './assets/hot-air-ballon.webp';
import ExampleCarouselImage1 from './assets/insight.png'
import ExampleCarouselImage2 from './assets/motion-simulator.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={ExampleCarouselImage} className='carousel-css'/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ExampleCarouselImage1} className='carousel-css'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ExampleCarouselImage2} className='carousel-css'/>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;