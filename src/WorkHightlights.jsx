
import './service.css'
import Marquee from 'react-fast-marquee'
import data from './datas/MarqueeDatas.json'

const jsonData = data;

function WorkHightlights() {
  return (
    <div className='work-highlights-marquee'>
        {jsonData.map((data,index) => (
            <Marquee className='work-highlights-marquee-data' key={index}>
              <li style={{paddingLeft : '30px',fontSize : '30px'}}>{data.content}</li>
            </Marquee>
        ))}
    </div>
  )
}

export default WorkHightlights