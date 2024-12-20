import { useContext, useEffect, useRef, useState } from "react";
import { BlancoDeTiro } from "../SvgComponents/BlancoDeTiro";
import { PreloaderContext } from "../../context";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HighlightedText = () => {

  const { startAnimation } = useContext(PreloaderContext);

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [valuesSvg, setValuesSvg] = useState({ left: 0, top: 0, height: 0, width: 0 }); 

  const containerHoverRef = useRef(null);
  
  const svgParentRef = useRef(null);

  useEffect(() => {
    if(!startAnimation) return;

    gsap.set('.highlighted-text__line', { width: 0 });

    gsap.to('.highlighted-text__line', {
      width: "28%",
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.highlighted-text__wrapp',
        start: "top 85%",
        scroller: '#main-container'
      }
    });
    
  }, [startAnimation]);



  useEffect(() => {
    if(!startAnimation) return;
    
    const containerHover = containerHoverRef.current;

    if(!containerHover) return;

    containerHover.style.height = `${valuesSvg.height}px`;
    containerHover.style.width = `${valuesSvg.width}px`;

    const handleMouseMove = (e) => {

      const x =  e.clientX - valuesSvg.left;
      const y = e.clientY - valuesSvg.top; 

      const centerX  = valuesSvg.width / 2;
      const centerY = valuesSvg.height / 2;


      const tiltX = (y - centerY) / 10;
      const tiltY = (centerX - x) / 10;

      setTilt({ x: tiltX, y: tiltY });
    }

    containerHover.addEventListener('mousemove', handleMouseMove);

    return () => containerHover.removeEventListener('mousemove', handleMouseMove);

  }, [startAnimation, valuesSvg]);

  useEffect(() => {
    gsap.set(svgParentRef.current, { scale: 1 })


    gsap.to(svgParentRef.current, {
      scale: 0,
      xPercent: -50,
      yPercent: 50,
      duration: 1,
      scrollTrigger: {
        trigger: svgParentRef.current,
        start: "60% 20%",
        scrub: true,
        scroller: '#main-container'
      }
    })
  }, [startAnimation])
  
  
  
  return (
    <section className="highlighted-text">

      <div className="highlighted-text__wrapp">
        <div className="highlighted-text__line"></div>
        <div className="highlighted-text__bg-image" ref={ svgParentRef }>
          <BlancoDeTiro setValues ={ setValuesSvg } tilt= { tilt } />
        </div>
        <div className="highlighted-text__hover"  ref={ containerHoverRef  }
        /* onMouseLeave= {() => {
          setTilt({ x: 0, y:0 })
        }} */
        ></div>

        <p className="highlighted-text__text">Nuestros fusiles de precisión están diseñados para superar los estándares más exigentes, tanto en el deporte de Benchrest como en las operaciones tácticas de fuerzas de seguridad.</p>
      </div>
    </section>
  )
}
