import gsap from "gsap";
import { useEffect, useRef } from "react";
import GsapMagnetic from '../GsapMagnetic'


function Navigation() {
  const liRefs = useRef([]);

  useEffect(() => {

    const liElements = liRefs.current;
    const hoverTL = gsap.timeline({ paused: true });

    liElements.forEach((li, index) => {
      const liHoverTL = gsap.timeline({ paused: true });
      liHoverTL.to(li, { color: "#999999", duration: 0.1 });

      li.addEventListener("mouseenter", () => {
        hoverTL.play();
        liHoverTL.play();
      });

      li.addEventListener("mouseleave", () => {
        hoverTL.reverse();
        liHoverTL.reverse();
      });
    });

    return () => {
      liElements.forEach(li => {
        li.removeEventListener("mouseenter", () => {
          hoverTL.play();
        });
        li.removeEventListener("mouseleave", () => {
          hoverTL.reverse();
        });
      });
    };
  }, []);

  return (
    <div className="nav-row">
      <h5>NAVIGATION</h5>
      <div className="stripe"></div>
      <ul className="links">
        <a href="/"><li ref={el => (liRefs.current[0] = el)}> Home</li></a>
        <a href="/about"><li ref={el => (liRefs.current[1] = el)}>About</li></a>
        <a href="/project"><li ref={el => (liRefs.current[2] = el)}>Resume</li></a>
        <a href="/contact"><li ref={el => (liRefs.current[3] = el)}>Contact</li></a>
      </ul>
    </div>
  );
}

export default Navigation;
