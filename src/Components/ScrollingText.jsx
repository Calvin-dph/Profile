import gsap from "gsap";
import { useEffect, useRef } from "react";

function ScrollingText() {
  const marqueeRef = useRef(null);
  let isScrolling = true;

  useEffect(() => {
    const marquee = marqueeRef.current;
    const elements = marquee.querySelector(".marquee-part");
    let tl = gsap.to(elements, {
      xPercent: -50,
      duration: 10,
      ease: "linear",
      repeat: -1,
      onRepeat: () => {
        gsap.set(elements, { xPercent: 0 }); // Reset posisi teks
      },
    });

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      let lastScroll = 0;
      if (scrollY - lastScroll > 90) {
        isScrolling = false;
      } else {
        isScrolling = true;
      }

      gsap.to(tl, {
        timeScale: isScrolling ? 1 : -1,
      })

    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="marquee" ref={marqueeRef}>
      <div className="marquee-inner">
        <div className="marquee-part stroke">
        &nbsp;Calvin&nbsp;Satria&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;–&nbsp;Calvin&nbsp;Satria&nbsp;–&nbsp;Calvin&nbsp;Satria&nbsp;–&nbsp;Calvin&nbsp;Satria&nbsp;–&nbsp;Calvin&nbsp;Satria&nbsp;–&nbsp;Calvin&nbsp;Satria
        </div>
      </div>
    </div>
  );
}

export default ScrollingText;
