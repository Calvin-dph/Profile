import { useState } from 'react';
import './parallax.css'
// import me from '../img/me.png'
// import c1 from '../img/Cloud1.png'
// import c2 from '../img/Cloud2.png'
// import c3 from '../img/Cloud3.png'
// import c4 from '../img/Cloud4.png'
import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import { useEffect } from 'react';

function Parallax(){
    const[background, setBackground] = useState(20)

    const parallaxRef = useRef(null)
    const cloud1 = useRef(null)
    const cloud2 = useRef(null)
    const cloud3 = useRef(null)
    const cloud4 = useRef(null)
    const mee = useRef(null)
    const copy = useRef(null)
    const btn = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            var tl = gsap.timeline({
                defaults:{ duration: 1 },
                scrollTrigger:{
                    trigger: parallaxRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                        setBackground(Math.ceil(self.progress * 100 + 20))
                        console.log(Math.ceil(self.progress * 100 + 20));
                    },
                },
            })
            tl.to( cloud4.current,{ y:"-=80"},0);
            tl.to(
                cloud3.current,{
                    y:"-=30"
                },
                0
            );
            tl.to(
                cloud2.current,{
                    y:"-=50"
                },
                0
            );
        })
        return() => {

        }
    })


    return(
        <div className="parallax-outer">
            <div ref={parallaxRef} style={{ background: `linear-gradient(#F2F2F2, #D4D4D4 ${background}%, #B7B7B7, #999999 )` }} className="parallax">
                <img ref={cloud1} className='cloud4' src={c1}/>
                <img ref={cloud2} className='cloud3' src={c2}/>
                <img ref={cloud3} className='cloud2' src={c3}/>
                <img ref={cloud4} className='cloud1' src={c4}/>
                <img ref={mee} className='me' src={me}/>
                <div ref={copy} className="copy">
                    <h1>Calvin Satria</h1>
                    <span ref={btn}>Discover more</span>
                </div>
            </div>
        </div>
    )
}

export default Parallax; 