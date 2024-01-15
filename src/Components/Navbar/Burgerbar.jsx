import { gsap } from 'gsap';
import './burgerbar.css'
import { useState, useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/all';
import GsapMagnetic from '../GsapMagnetic'
import Navigation from './Navigation';
import Social from './social';


function Burgerbar({homeBox}) {
  const [isOpen, setIsOpen] = useState(true);
  
  // Munculkan Burger
  gsap.registerPlugin(ScrollTrigger);
  const burgerRef = useRef(null)
  useEffect(() => {
    const el = burgerRef.current;
    const le = homeBox.current;

    if(window.innerWidth <= 768){
      gsap.to(el, {
      duration: 0.5,
      autoAlpha: 1,
      scale: 1.5,
      ease: 'circ.inOut',
      })
    }else{
      gsap.fromTo(el, {
        autoAlpha: 0,
      }, {
        duration: 0.5,
        autoAlpha: 1,
        scale: 1.5,
        ease: 'circ.inOut',
        scrollTrigger: {
          id: 'test',
          trigger: le,
          start: 'top center+=0',
          toggleActions: 'play none none reverse',
        }
      })
    }
  }, []);
  // END


  // NoSCROLL
  const noScrollBoxRef = useRef(null);

  const preventScroll = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    const box = noScrollBoxRef.current;
    if (box) {
      box.addEventListener('wheel', preventScroll);
    }

    return () => {
      if (box) {
        box.removeEventListener('wheel', preventScroll);
      }
    };
  }, []);
  // END

  // OPEN Toggle
  const handleToggle = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      gsap.to(".line1", { rotate: 45, y: 3, backgroundColor: 'white'});
      gsap.to(".line2", { rotate: -45, y: -2, backgroundColor: 'white'});
    } else {
      gsap.to(".line1", { rotate: 0, y: 0, backgroundColor: 'white'});
      gsap.to(".line2", { rotate: 0, y: 0, backgroundColor: 'white'});
      
    }
  };

  return (
    <div ref={noScrollBoxRef} className={`navblock  ${!isOpen ? 'nav-active' : ''}`}>

      <GsapMagnetic>
      <div className="magnet">
        <div ref={burgerRef} className="burgerbox" onClick={handleToggle}>
        <GsapMagnetic>
          <div className='magnetline'>
            <div className="line1" style={{ backgroundColor: 'White'}}></div>
            <div className="line2" style={{ backgroundColor: 'White' }}></div>  
          </div>
          </GsapMagnetic>
        </div>
      </div>
      </GsapMagnetic>
    
      <div ref={noScrollBoxRef} className="overlay navall">
        <div className="navv">
          <div className="navside">
            <Navigation/>
            <Social/>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default Burgerbar;
