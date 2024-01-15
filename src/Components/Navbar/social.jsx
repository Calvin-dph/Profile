import gsap from "gsap";
import { useEffect, useRef } from "react";
import './burgerbar.css'


function Social() {
  const liRefs = useRef([]);

  useEffect(() => {
    const liElements = liRefs.current;
    const hoverTL = gsap.timeline({ paused: true });

    liElements.forEach((li, index) => {
      const liHoverTL = gsap.timeline({ paused: true });
      liHoverTL.to(li, { borderBottom: '1px solid white', duration: 0.1 });

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
    <div className="row-social">
      <h5>Social</h5>
      <ul className='social'>
        <a target="_blank" href="https://www.instagram.com/calvin.dph/"><li ref={el => (liRefs.current[0] = el)}>Instagram</li></a>
        <a target="_blank" href="https://www.linkedin.com/in/calvin-satria-53bb94212/"><li ref={el => (liRefs.current[1] = el)}>Linkedin</li></a>
        <a target="_blank" href=""><li ref={el => (liRefs.current[2] = el)}>Twitter</li></a>
        <a target="_blank" href="https://github.com/Calvin-dph"><li ref={el => (liRefs.current[3] = el)}>Github</li></a>
      </ul>
    </div>
  );
}

export default Social;
