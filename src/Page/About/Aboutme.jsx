import { useRef } from 'react';
import aMe from '../../img/aboutme.jpg'
import { useScroll, useTransform, motion } from "framer-motion";

function Aboutme(){
  const container = useRef(null)
  const {scrollYProgress} = useScroll({
    target : container,
    offset : ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const imgY = useTransform(scrollYProgress, [0, 1], [300, 0]);

  return(
    <div ref={container} className="aboutme">
      <motion.div style={{y}} className="desc">
        <h1>Hi iam Calvin Satria</h1>
        <h2>Nice to meet you. I'm Calvin, an Indonesian front-end developer. The website you are currently seeing is primarily meant to serve as a testing ground for side projects. Have fun, enjoy yourself, and don't hesitate to get in touch with us.</h2>
      </motion.div>
      <div className="imgwrap">
        <motion.img style={{y: imgY}} src={aMe} alt="" />
      </div>
    </div>
  )
}
export default Aboutme