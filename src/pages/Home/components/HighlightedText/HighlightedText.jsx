import { useContext, useEffect, useRef, useState } from "react";
import { LocoScrollContext, ScreenContext } from "../../../../context";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BlancoDeTiro } from "./BlancoDeTiro";
import { hTImageAnimation, hTLineAnimation, hTTextAnimation, svgParentAnimation } from "../../../../animations";

gsap.registerPlugin(ScrollTrigger);

export const HighlightedText = () => {

  const { startAfterHScroll, startAnimation } = useContext(LocoScrollContext);
  
  const { screenPx } = useContext(ScreenContext);

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [valuesSvg, setValuesSvg] = useState({ left: 0, top: 0, height: 0, width: 0 }); 


  const containerHoverRef = useRef(null);
  const svgParentRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if(!startAnimation) return;
    setTimeout(() => {
      hTLineAnimation();
      hTImageAnimation();
      hTTextAnimation(textRef.current);
    }, 500);
  }, [startAnimation]);


  /* useEffect(() => {
    if(!start) return;

    
    if(screenPx < 768) return;
    
    
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

  }, [start, valuesSvg]); */

  return (
    <section className="highlighted-text">
      <div className="highlighted-text__wrapp">
        <div className="highlighted-text__line"></div>
        <div className="highlighted-text__content container">

          <p ref={ textRef } className="highlighted-text__text">Nuestros fusiles de precisión están diseñados para superar los estándares más exigentes, tanto en el deporte de Benchrest como en las operaciones tácticas de fuerzas de seguridad.</p>

          <div className="highlighted-text__imgs">
            <picture className="highlighted-text__img">
              <img src="/img/home/rifle-HT-01.jpg" alt="imagen de fusiles" />
            </picture>
            <picture className="highlighted-text__img">
              <img src="/img/home/rifle-HT-02.jpg" alt="imagen de fusiles" />
            </picture>
            
          </div>

        </div>
        <div className="highlighted-text__line highlighted-text__line--bottom"></div>
      </div>
    </section>
  )
}
