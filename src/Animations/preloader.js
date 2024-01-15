import gsap from "gsap";


const tl = gsap.timeline();

export const preLoaderAnim = () =>{
    tl.to(".texts-container", {
        duration: 0,
        opacity: 1,
        ease: "Power3.easeOut",
      })
      .from(".texts-container span", {
        duration: 1.5,
        delay: 2,
        y: 70,
        skewY: 10,
        stagger: 0.4,
        ease: "Power3.easeOut",
      })
      tl.to(".texts-container span", {
        duration: 1,
        y: 70,
        skewY: -20,
        stagger: 0.2,
        ease: "Power3.easeOut",
      })

      .to(".preloader", {
          duration: 1.5,
          delay: 1.2,
          height: "0vh",
          ease: "Power3.easeOut",
        },"-=2")
      .to(".preloader", {
        duration: 0,
        css: { display: "none" },
      })
}
