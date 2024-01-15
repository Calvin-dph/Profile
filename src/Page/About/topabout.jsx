import gsap from "gsap"
import { useEffect } from "react"

function TopAbout() {
  useEffect(() => {
    gsap.to('.text-move span', {
      duration: 0.1,
        delay: 2,
        y: 0,
        skewY: 0,
        stagger: 0.2,
        ease: "Power3.easeOut",
    })

    gsap.fromTo('.top-about p', {
      autoAlpha: 0
    }, {
      delay: 2.8,
      duration: 1,
      autoAlpha: 1
    })
    
  })
  
    return(
        <div className="top-about">
          <div className="text-move">
          <span>A</span> <span>FEW</span> <span>WORD</span> <span>ABOUT</span> <span>ME</span>
          </div>
          <p>Fresh graduate from Telkom University with a lot of experience in Web Development Technology, Web Development Techniques and User Interface Design. I have a high desire to work and study. Now, I am looking for a new journey for my career!</p>
        </div>
    )
}

export default TopAbout