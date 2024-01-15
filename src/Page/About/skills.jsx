import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  useEffect(() => {

    gsap.fromTo('.progress-bar', {
      width: 5, 
    },{
      duration: 0.5,
      width: "100%",
      ease: "Power3.easeOut",
      scrollTrigger: {
        trigger: ".title-container",
        start: 'top',
        toggleActions: 'play none none reverse'
      }
    });

    gsap.fromTo('.progress-bar2', {
      width: 5, 
    },{
      duration: 0.5,
      width: "90%",
      ease: "Power3.easeOut",
      scrollTrigger: {
        trigger: ".title-container",
        start: 'top',
        toggleActions: 'play none none reverse'
      }
    });

    gsap.fromTo('.progress-bar3', {
      width: 5, 
    },{
      duration: 0.5,
      width: "80%",
      ease: "Power3.easeOut",
      scrollTrigger: {
        trigger: ".title-container",
        start: 'top',
        toggleActions: 'play none none reverse'
      }
    });

    gsap.fromTo('.progress-bar4', {
      width: 5, 
    },{
      duration: 0.5,
      width: "75%",
      ease: "Power3.easeOut",
      scrollTrigger: {
        trigger: ".title-container",
        start: 'top',
        toggleActions: 'play none none reverse'
      }
    });
  }, []);


  return(
    <div className="skills-container">
      <h1 className="title-container">SKILLS</h1>
      <h4>I've learned the following abilities as a result of my studies:</h4>
      <div className="row skills-content">

        <div className="skills">
          <div className="progress">
            <span className="skill">HTML <i className="val">100%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">CSS <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar2"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">JAVASCRIPT <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar2"></div>
            </div>
          </div>
        </div>

        <div className="skills">
          <div className="progress">
            <span className="skill">PHP <i className="val">80%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar3" role="progressbar"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">GIT <i className="val">75%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar4" role="progressbar"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">FIGMA <i className="val">75%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar4" role="progressbar"></div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Skills