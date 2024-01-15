import gsap from "gsap";
import GsapMagnetic from "../../Components/GsapMagnetic";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";

function AboutMini(){
  gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {

    gsap.to('.textleft span', {
      duration: 0.5,
        delay: 0.2,
        y: 0,
        skewY: 0,
        stagger: 0.4,
        ease: "Power3.easeOut",
        scrollTrigger: {
              trigger: ".leftme",
              start: 'top center+=100',
              toggleActions: 'play none none reverse'
        }
    })

    gsap.fromTo('.aboutmini .leftme p', {
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

    gsap.fromTo('.aboutmini .rightme', {
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

  })

  return(
    <div className="aboutmini">
      <div className="leftme">
        <div className="textleft">
          <span>Who</span>
          <span>am</span>
          <span>i?</span>
        </div>
        <p>Fresh graduate from Telkom University with a lot of experience in Web Development Technology, Web Development Techniques and User Interface Design. I have a high desire to work and study. Now, I am looking for a new journey for my career!</p>
      </div>
      <div className="rightme">
        <h2>Enjoys experimenting with web development, starting from front end developer.</h2>
      <GsapMagnetic>
        <div className="circleme">
        <GsapMagnetic>
          <a href="/about"><h4>About Me</h4></a>
        </GsapMagnetic>
        </div>
      </GsapMagnetic>
      </div>
    </div>    
  )
}

export default AboutMini