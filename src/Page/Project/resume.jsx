import telkom from '../../img/telkom.png'
import sma from '../../img/sma.jpeg'
import quadra from '../../img/quadra.png'
import moolife from '../../img/Moolife.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react'

function Resume(){
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo('.leftgsap',{
      autoAlpha: 0,
      x: '-10%'
    }, {
      delay: 2,
      autoAlpha: 1,
      duration: 1,
      x: '0%',
      ease: 'power1.inOut',
      trigger:'.section',

    })

    gsap.fromTo('.rightgsap', {
      autoAlpha: 0,
      x: '10%'
    }, {
      delay: 2,
      duration: 1,
      autoAlpha: 1,
      x:'0$',
      ease: 'power1.inOut',
      trigger:'.section'
    })
  })

    return(
    <>
    <h1 className='title-container'>RESUME</h1>
          
          <div className="section">

            <div className="col-section leftgsap">
              <h3>Education</h3>
              <div className="edu">
                <img src={telkom} alt="" />
                <div className="edu-desc">
                  <h4>Diploma Of Education</h4>
                  <h6>2020 - 2023</h6>
                  <h5>Computer Technology</h5>
                  <strong>Telkom University</strong>
                  <p>Bandung, West Java, Indonesia</p>
                </div>
              </div>

              <div className="edu">
                <img src={sma} alt="" />
                <div className="edu-desc">
                  <h4>Highschool Of Education</h4>
                  <h6>2017 - 2020</h6>
                  <h5>Science</h5>
                  <strong>SMAN 12 Semarang</strong>
                  <p>Semarang, Central Java, Indonesia</p>
                </div>
              </div>
            </div>


            <div className="col-section rightgsap">
              <h3>Project Experience</h3>
              <div className="edu">
                <img src={quadra} alt="" />
                <div className="edu-desc">
                  <h4>Web Developer</h4>
                  <h6>March 2023 - August 2023</h6>
                  <h5>Quadra Karya Santosa</h5>
                  <ul>
                    <li><i className="fi fi-rr-angle-right"></i>Create a company profile website for Quadra Karya Santosa</li>
                    <li><i className="fi fi-rr-angle-right"></i>Carry out development on the company website profile</li>
                  </ul>
                </div>
              </div>

              <div className="edu">
                <img src={moolife} alt="" />
                <div className="edu-desc">
                  <h4>IOT Final Project</h4>
                  <h6>2017 - 2020</h6>
                  <h5>Telkom University</h5>
                  <ul>
                    <li><i className="fi fi-rr-angle-right"></i>Prototype hardwear to monitoring animals motions and healthy lungs</li>
                    <li><i className="fi fi-rr-angle-right"></i>Create website to show the data health from animal</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
    </>
    )
}

export default Resume