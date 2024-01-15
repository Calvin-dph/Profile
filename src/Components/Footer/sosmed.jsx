import gsap from "gsap";
import { useEffect, useRef } from "react";

function Sosmed(){
  const socialMediaData = [
    { name: "Whatsapp", contact: "+62 8954 2346 8234", iconClass: "fi-brands-whatsapp", alink:"https://api.whatsapp.com/send?phone=62895423468234" },
    { name: "Gmail", contact: "Calvinsatria09@gmail.com", iconClass: "fi-rr-envelope", alink:"mailto:calvinsatria09@gmail.com" },
    { name: "Linkedin", contact: "Calvin Satria", iconClass: "fa-brands fa-linkedin", alink:"https://www.linkedin.com/in/calvin-satria-53bb94212/" },
    { name: "Instragram", contact: "@Calvin.dph", iconClass: "fi-brands-instagram", alink:"https://www.instagram.com/calvin.dph/" },
  ];

  const socialMediaRefs = useRef([]);
  const grayRefs = useRef([]);

  useEffect(() => {
    socialMediaRefs.current.forEach((socialMediaRef, index) => {
      let hoverTL = gsap.timeline();
      hoverTL.pause();
      hoverTL.to(grayRefs.current[index], { top: '100%', duration: 0.5, ease: "expo.inOut" });

      const handleMouseEnter = () => hoverTL.play();
      const handleMouseLeave = () => hoverTL.reverse();

      socialMediaRef.addEventListener("mouseenter", handleMouseEnter);
      socialMediaRef.addEventListener("mouseleave", handleMouseLeave);

      // Clean up event listeners when the component is unmounted
      return () => {
        socialMediaRef.removeEventListener("mouseenter", handleMouseEnter);
        socialMediaRef.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, [socialMediaRefs, grayRefs]);
  
    return(
        <div className="row-foot">
        {socialMediaData.map((data, index) => (
          <a key={index} target="_blank" href={data.alink}>
          <div key={index} ref={el => (socialMediaRefs.current[index] = el)} className='sosmed'>
            <div ref={el => (grayRefs.current[index] = el)} className="gray"></div>
            <div className="text-info">
              <h4>{data.name}</h4>
              <p>{data.contact}</p>
            </div>
            <div className="circle-foot">
              <i className={`fi ${data.iconClass}`}></i>
            </div>
          </div>
          </a>
        ))}
      </div>
    )
}

export default Sosmed