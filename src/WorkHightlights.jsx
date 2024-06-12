
import './service.css'
import Marquee from 'react-fast-marquee'
import data from './datas/MarqueeDatas.json'

const jsonData = data;

function WorkHightlights() {
//   return (
//     <div className='work-highlights-marquee'>
//         {jsonData.map((data,index) => (
//             <Marquee className='work-highlights-marquee-data' key={index}>
//               <li style={{fontSize : '2rem'}}>{data.content}</li>
//             </Marquee>
//         ))}
//     </div>
//   )
// }
return (
  <div className="footer-container">
    <Marquee pauseOnHover>
      {jsonData.map((data, index) => {
        return (
          <li className="footer-heading" style={{paddingLeft : '20px',fontSize : '3.5rem'}}key={index}>
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