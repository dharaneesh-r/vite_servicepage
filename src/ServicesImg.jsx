import  { useEffect } from 'react'
import './service.css'
import ServiceClassifieds from './ServiceClassifieds'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function ServicesImg() {

  useEffect(() => {
    gsap.fromTo('.service-image', {
      opacity : 0,
    },{
      opacity : 1,
      duration : 1,
      scrollTrigger : {
        trigger : '.service-image',
        start : '10% bottom',
        toggleActions : 'restart none none none'
      },
    })
  })

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