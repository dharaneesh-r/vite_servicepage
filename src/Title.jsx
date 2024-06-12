import { useEffect } from 'react'
import gsap from 'gsap'
import './service.css'


function App() {

useEffect(() => {
  gsap.fromTo('.title-heading',{
    opacity : 0,
    x : 20,
  },{
    opacity : 1,
    x : 0,
    duration : 1,
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
    })
},[])

  const title = `We create clean-cut solution for online destinations`

  return (
    <div className='title-container'>
      <h1 className='title-heading'>{title}</h1>
      <div className='title-line'></div>
    </div>
  )
}

export default App