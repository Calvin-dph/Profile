import './style.css';
import GsapMagnetic from '../../../Components/GsapMagnetic'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";



export default function index(){
  const timeline = useRef(null);

  const formsContainer = useRef(null);
  const {scrollYProgress} = useScroll({
    target : formsContainer,
    offset: ["start end", 'end end']
  })
  const x = useTransform(scrollYProgress, [0, 1], [-300, -100])

  useEffect(() => {
    timeline.current = gsap.timeline({paused:true})
    timeline.current
    .to('.white', {top: '100%', duration:0.5, ease: "circ.inOut"}, 'enter')
    .to('.white', {top: '200%', duration:0.5, ease: "circ.inOut"}, 'exit')

  const more = document.querySelector('.btnsend');

  more.addEventListener("mouseenter", () => {
    timeline.current.tweenFromTo("enter", "exit");
  })
  more.addEventListener("mouseleave", () => timeline.current.play())
  })

  return(
  <div ref={formsContainer} className='forms'>
    <div className='form'>
      <h5>01</h5>
      <label htmlFor="name">What's Your Name?</label>
      <input className='field' type="text" name="name" id="formname" placeholder="Alif Vio" />
    </div>
    <div className='form'>
      <h5>02</h5>
      <label htmlFor="email">What's Your Email?</label>
      <input className='field' type="text" name="email" id="formemail" placeholder="Alif@gmail.com" />
    </div>
    <div className='form'>
      <h5>03</h5>
      <label htmlFor="name">Your Message</label>
      <textarea className='field' type="text" name="message" id="formmessage" placeholder="Hi Calvin, can you help with..." />
    </div>
    <GsapMagnetic>
    <motion.div style={{x}} className='btnsend'>
      <div className='white'></div>
      <GsapMagnetic><h2>Send</h2></GsapMagnetic>
    </motion.div>
    </GsapMagnetic>
  </div>
  )
}