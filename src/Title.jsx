import { useEffect } from 'react'
import gsap from 'gsap'
import './service.css'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {

useEffect(() => {
  gsap.fromTo('.title',{
    opacity : 0,
    x : 20,
  },{
    opacity : 1,
    x : 0,
    duration : 1,
    scrollTrigger : {
      trigger : '.title',
      start : 'center center',
      toggleActions : 'restart none none none'
    },
    })
},[])
useEffect(() => {
  gsap.fromTo('.title-line',{
    opacity : 0,
    x : 20,
  },{
    opacity : 1,
    x : 0,
    duration : 1,
    scrollTrigger : {
      trigger : '.title-line',
      start : 'center center',
      toggleActions : 'restart none none none'
    },
    })
},[])

  const title = `We create clean-cut solution for online destinations`

  return (
    <div className='title-container'>
      <h1 className='title'>{title}</h1>
      <div className='title-line'></div>
    </div>
  )
}

export default App