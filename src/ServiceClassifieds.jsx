// import React from 'react'
import data from './datas/ServiceClassifieds.json'

const jsonData = data;

function ServiceClassifieds() {
  return (
    <div className='service-classified-container'>
        {jsonData.map((data, index) => (
            <div className='service-classified-container' key={index}>
                <div className='service-classified-title'>{data.title}</div>
                <div className='service-classified-content'>{data.content}</div>
                <div className='service-buttons'>
                    <div className='service-classified-button'>{data.features_1}</div>
                    <div className='service-classified-button'>{data.features_2}</div>
                    <div className='service-classified-button'>{data.features_3}</div>
                    <div className='service-classified-button'>{data.features_4}</div>
                    <div className='service-classified-button'>{data.features_5}</div>
                </div>
                <div className='service-classified-line'></div>
            </div>
        ))}
    </div>
  )
}

export default ServiceClassifieds