
import './service.css'
import Marquee from 'react-fast-marquee'
import data from './datas/MarqueeDatas.json'

const jsonData = data;

function WorkHightlights() {

return (
  <div className="footer-container">
    <Marquee pauseOnHover>
      {jsonData.map((data, index) => {
        return (
          <li className="marquee-heading" key={index}>
            {data.content}
          </li>
        );
      })}
    </Marquee>
    <br />
    <div style={{paddingBottom : '30px'}}></div>
  </div>
);
}
export default WorkHightlights