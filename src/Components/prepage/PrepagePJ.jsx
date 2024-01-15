import React from 'react';
import './prepage.css'
import { useEffect } from 'react';
import gsap from 'gsap';


function PrepagePJ() {
  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(".backpre", {
      y: "150%",
      duration: 1.5,
      opacity: 1,
      ease: "power3.inOut"
    })
    .to(".backpre", {
      y: "300%",
      delay:1,
      duration: 1.5,
      opacity: 1,
      ease: "power3.inOut"
    },"-=1")
    .to(".backpre", {
      duration:0,
      css: { display: "none" },
    })
  }, [])

  return (
    <div className='backpre'>
      <div className="prepage">
        <div className="topsquere"></div>
        <div className="texts-page">
          <span>Project</span>
        </div>
        <div className="botsquere"></div>
      </div>
    </div>
  );
}

export default PrepagePJ;
