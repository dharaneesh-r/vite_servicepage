import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className='carousel-div'><img src='https://framerusercontent.com/images/E5ME83UIBgkDokq64RiGXCMNmE.jpg?scale-down-to=2048' className='carousel-css' /></div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='carousel-div'><img src='https://framerusercontent.com/images/93GikgVNfWr2nB61Tqs6JSMUOI.jpg?scale-down-to=2048' className='carousel-css'/></div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='carousel-div'><img src='https://framerusercontent.com/images/iF4yjAsAp1GeBsNEz3x9Q6uSQ.jpg?scale-down-to=2048' className='carousel-css'/></div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='carousel-div'><img src='https://framerusercontent.com/images/pg8PMLSLcnJQo0pvQ0wePSI9PI8.jpg?scale-down-to=2048' className='carousel-css'/></div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='carousel-div'><img src='./web_app.png' className='carousel-css'/></div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='carousel-div'><img src='./ai_ml.png' className='carousel-css'/></div>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;