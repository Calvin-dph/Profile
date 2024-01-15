import { useRef, forwardRef } from "react"

const BurgerOut = forwardRef((props, ref) =>{

    const Homebox = useRef(null);

    return(
        <>
        <div ref={ref} className="outbox"></div>
        </>
    )
})

export default BurgerOut