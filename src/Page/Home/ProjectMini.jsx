import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GsapMagnetic from "../../Components/GsapMagnetic";


import p1 from '../../assets/project1.png';
import p2 from '../../assets/project2.png';


function ProjectMini() {
  const timeline = useRef(null);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    timeline.current = gsap.timeline({pause:true})
    timeline.current
      .to('.pink', {top: '100%', duration:0.5, ease: "circ.inOut"}, 'enter')
      .to('.pink', {top: '200%', duration:0.5, ease: "circ.inOut"}, 'exit')

    const more = document.querySelector('.more');

    more.addEventListener("mouseenter", () => {
      timeline.current.tweenFromTo("enter", "exit");
    })
    more.addEventListener("mouseleave", () => timeline.current.play())





    // Cards
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards",
        pin: true,
        pinSpacing: true,
        start: "top +=100px",
        end: "+=2800",
        scrub: 1,
      },
    });

    tl.fromTo('.split', {
      autoAlpha: 0,
      y:'10%',
    }, {
      duration: 0.5,
      autoAlpha: 1,
      y:'0%',
      ease: 'circ.inOut',
      scrollTrigger: {
        trigger: ".leftme",
        start: 'top center+=100',
        toggleActions: 'play none none reverse',
      }
    })

    tl.addLabel('card1');
    tl.to(".card-1", {
      xPercent: 0,
      opacity: 1,
    });

    tl.from('.card-2', {
      xPercent: 75,
      opacity: 0
    });

    tl.addLabel('card2');
    tl.to(".card-1", {
      scale: 0.95,
      xPercent: -0.3,
      opacity: 0.5
    }, '-=0.3');

    tl.to(".card-2", {
      xPercent: 0,
      opacity: 1
    });

    tl.from('.card-3', {
      xPercent: 75,
      opacity: 0
    });

    tl.addLabel('card3');
    tl.to(".card-2", {
      scale: 0.95,
      xPercent: -0.2,
      opacity: 0.6
    }, '-=0.3');

    tl.to('.card-3', {
      scale: 0.95,
      xPercent: -0.1,
      opacity: 1
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="container">
      <div className="cards">
        <div className="split-container">
          <h1 className="split">My Project</h1>
        </div>
        
        <div className="card card-1">
          <img src={p1} alt="" />
          <h2 className="image-text">Profile Company</h2>
          </div>
        <div className="card card-2">
          <img src={p2} alt="" />
          <h2 className="image-text">Monitoring Cow</h2>
        </div>
        <div className="card card-3"><h2 className="image-text">Future Project</h2></div>
      </div>
      <GsapMagnetic>
      <div className="more">
      
        <div className="pink"></div>
        <GsapMagnetic>
        <a href="/project"><h2>Learn More</h2></a>
        </GsapMagnetic>
      </div>
      </GsapMagnetic>
    </div>
    
  );
}

export default ProjectMini;
