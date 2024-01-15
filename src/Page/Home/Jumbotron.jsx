import { useState, useEffect, useRef, forwardRef } from 'react';
import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';

import me from '../../img/me.png'
import c1 from '../../img/Cloud1.png'
import c3 from '../../img/Cloud3.png'
import c4 from '../../img/Cloud4.png'

const Jumbotron = forwardRef((props, ref) =>{
    const parallaxRef = useRef(null);
    const cloud1 = useRef(null)
    const cloud2 = useRef(null)
    const cloud3 = useRef(null)
    const cloud4 = useRef(null)
    const mee = useRef(null)
    const text = useRef(null)
    
    const[background, setBackground] = useState(20)
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            var tl = gsap.timeline({
                defaults:{ duration: 1 },
                trigger: parallaxRef.current,
                scrollTrigger:{
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                        setBackground(Math.ceil(self.progress * 100))
                    },
                },
            })
            tl.to(cloud1.current,{y:"-=12"},0);
            tl.to(cloud3.current,{y:"+=20"},0);
            tl.to(cloud4.current,{y:"+=30"},0);
            tl.to(mee.current,{scale: 1.3},0);
            tl.to(text.current,{scale: 0.9},0);

        });
        return() => {}
    })

    return(
        <div className="jumbotron-outer">
            <div ref={parallaxRef} style={{ background: `linear-gradient(#999999, #B7B7B7 ${background}%, #D4D4D4, #F2F2F2 )` }} className="jumbotron">

                <img ref={cloud1} className='cloud1' src={c1}/>
                <img ref={cloud3} className='cloud3' src={c3}/>
                <img ref={cloud4} className='cloud4' src={c4}/>
                <img ref={mee} className='me' src={me}/>
                <div ref={text} className="backtext">
                    <h1>Calvin</h1>
                    <h1>Satria</h1>
                </div>
                <div ref={ref} className="appearburger"></div>
            </div>
        </div>
    )
})

export default Jumbotron;