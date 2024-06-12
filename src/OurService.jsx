import './service.css'
import gsap from 'gsap';
import { useEffect } from 'react';


function OurService() {

useEffect(() => {
  gsap.fromTo('.ourservice-title', {
    opacity : 0,
    y : 20,
  },{
    opacity : 1,
    y : 0,
  })
},[])
useEffect(() => {
  gsap.fromTo('.ourservice-content', {
    opacity : 0,
    x : -20,
  },{
    opacity : 1,
    x : 0,
    duration : 1,
  })
},[])

    const ourService = "Our Services"
    const ourServiceContent = `At Dotworld, our suite services is designed to propel your business into the forefront of technological advancement.  With a commitment to excellence and a passion for innovation, we offer a diverse range of cutting-edge services that cater to the evolving needs of the digital landscape`;

  return (
    <div className='ourservice'>
        <div className='ourservice-title'>{ourService}</div>
        <div className='ourservice-content'>{ourServiceContent}</div>
    </div>
  )
}

export default OurService