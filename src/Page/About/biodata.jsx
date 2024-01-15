import gsap from 'gsap'
import bio from '../../img/bio.jpg'
import { ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react';

function Biodata(){
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo('.desc-bio img', {
      autoAlpha: 0,
      x:'-10%'
    },{
      duration: 1,
      autoAlpha: 1,
      x:'0%',
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: '.bio-container',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.fromTo('.bio-rght', {
      autoAlpha: 0,
      y: '10%'
    }, {
      duration: 1,
      autoAlpha: 1,
      y: '0%',
      ease:'power1.inOut',
      scrollTrigger:{
        trigger : '.bio-container',
        start : 'top center+=100',
        toggleActions: 'play none none reverse'
    }
    })

  })

  return(
    <div className="bio-container">
      <h1 className='title-container'>BIODATA</h1>
      <div className="desc-bio">
        <img src={bio} alt="" />
        <div className="bio-rght">
          <h2>Calvin Satria D. P. H.</h2>
          
          <div className="text-bio">
            <div className="col-3">
              <ul>
                <li>
                  <i className="fi fi-rr-angle-right"></i>
                  <strong>Birtday : </strong>
                  <span>8 November 2021</span>
                </li>
                <li>
                  <i className="fi fi-rr-angle-right"></i>
                  <strong>Phone : </strong>
                  <span>+62 8954 2346 8234</span>
                </li>
                <li>
                  <i className="fi fi-rr-angle-right"></i>
                  <strong>City : </strong>
                  <span>Bandung, Indonesia</span>
                </li>
              </ul>
            </div>
            <div className="col-3">
            <ul>
                <li>
                  <i className="fi fi-rr-angle-right"></i>
                  <strong>Age : </strong>
                  <span>22</span>
                </li>
                <li>
                  <i className="fi fi-rr-angle-right"></i>
                  <strong>Degree : </strong>
                  <span>Diploma</span>
                </li>
                <li>
                  <i className="fi fi-rr-angle-right"></i>
                  <strong>Email : </strong>
                  <span>Calvinsatria09@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <h3>My life was spent in Semarang, where I was born and raised until I completed high school. I'll be a student at Telkom University till 2023 to finish my studies. Computer technology is my major. Through internships and seminars, I have acquired a variety of experiences. expertise in the form of hard and soft skills</h3>
        </div>
      </div>
    </div>
  )
}

export default Biodata