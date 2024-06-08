// import React from 'react'
import Title from './Title'
import OurService from './OurService'
import ServicesImg from './ServicesImg'
import WorkHightlights from './WorkHightlights';
import Footer from './Footer';
import Footergrid from './Footergrid';
import Curosel from './curosel';

function App() {
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <Title />
        <OurService />
      </div>
      <ServicesImg />
      <div style={{ backgroundColor: "black" }}>
        <WorkHightlights />
        <div style={{padding: '20px'}}></div>
        <Curosel />
      </div>
      <div className='footerfooter'>
        <Footer />
        <Footergrid />
        <div style={{padding : '20px',backgroundColor : 'black',color : 'white',fontSize : '12px'}}>
          <div>&copy;2023 All Rights reserved  <span style={{float: 'right'}}>Privacy Policy</span></div>
        </div>
      </div>
    </div>
  );
}

export default App
