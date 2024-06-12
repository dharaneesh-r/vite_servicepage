// import React from 'react'
import { useEffect } from 'react';
import data from './datas/ServiceClassifieds.json'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const jsonData = data;
gsap.registerPlugin(ScrollTrigger)

function ServiceClassifieds() {
  useEffect(() => {
    gsap.fromTo(
      ".service-classified-title",
      {
        opacity: 0,
        x: 20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: ".service-classified-title",
          start: "10% bottom",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      ".service-classified-content",
      {
        opacity: 0,
        x: 20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: ".service-classified-content",
          start: "10% bottom",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo('.service-classified-image',{
      opacity : 0,
      x : -40
    },{
      opacity : 1,
      x : 0,
      duration : 1,
      stagger : 1,
      scrollTrigger : {
        trigger : '.service-classified-image',
        start : '10% bottom',
        toggleActions : 'restart none none reverse'
      },
    })
  },[])
  return (
    <div>
        {jsonData.map((data, index) => (
            <div className='service-classified-container' key={index}>
                <div className='data-service-image'><img src={data.image} className='service-classified-image'/></div>
                <div className='service-types'>
                  <div className='service-classified-title'>{data.title}</div>
                  <div className='service-classified-content'>{data.content}</div>
                  <div className='service-buttons'>
                      <div className='service-classified-button'>{data.features_1}</div>
                      <div className='service-classified-button'>{data.features_2}</div>
                      <div className='service-classified-button'>{data.features_3}</div>
                      <div className='service-classified-button'>{data.features_4}</div>
                      <div className='service-classified-button'>{data.features_5}</div>
                  </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ServiceClassifieds