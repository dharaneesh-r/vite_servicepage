import React from 'react'
import './service.css'
import ServiceClassifieds from './ServiceClassifieds'

function ServicesImg() {
  return (
    <div className='service-container'>
        <div className='service-image'>
            <img src="https://framerusercontent.com/images/eySk8pJlPyuhtdhXTU7FZFdCs0.jpg?scale-down-to=2048" className='service-image'/>
        </div>
        <div style ={{padding: "20px"}}>
            <ServiceClassifieds />
        </div>
    </div>
  )
}

export default ServicesImg