import { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PreloaderContext } from "../../context";


gsap.registerPlugin(ScrollTrigger);

export const BlancoDeTiro = ({ setValues, tilt }) => {
  const svgRef = useRef(null);
  const { startAnimation } = useContext(PreloaderContext);

  useEffect(() => {
    if(!startAnimation) return;

    gsap.set('.svg-wrapper', { scale: 0 });
    gsap.set("circle", { strokeDasharray: "3000", strokeDashoffset: "3000" });

    const tlSvg = gsap.timeline({
      scrollTrigger: {
        trigger: '.svg-wrapper',
        start: "top 70%",
        //scrub: true,
        scroller: '#main-container',
      }
    });

    tlSvg.to("circle", {
        strokeDashoffset: "0", 
        duration: 5, 
        stagger: 0.01, 
        ease: "power2.out", 
      }
    )
    .to('.svg-wrapper', {
      scale: 1,
      duration: 1.5,
      onComplete: () => {
        const svg = svgRef.current;
        if(!svg) return;

        const { left, top, height, width } = svg.getBoundingClientRect();
        setValues({ left, top, height, width });
      }
    }, '<.1')

  }, [startAnimation]);
  
  
  return (
    <div className="svg-wrapper">
      <svg ref={ svgRef }  width="984" height="1002" viewBox="0 0 984 1002" fill="none" xmlns="http://www.w3.org/2000/svg" 
      style={{
        transform: `perspective(1500px) rotateX(${tilt.x * - 1 }deg) rotateY(${tilt.y * -1}deg)`,
      }}
      >

      <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="5"       
              dy="5"       
              stdDeviation="8" 
              floodColor="rgb(118, 118, 118)" 
            />
          </filter>
        </defs>
        <g clipPath="url(#clip0_1381_64)">
          <mask id="mask0_1381_64" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="15" y="15" width="972" height="972">
            <path d="M986.245 15.7548H15.7547V986.245H986.245V15.7548Z" fill="white"/>
          </mask>
          <g mask="url(#mask0_1381_64)">
            <circle cx="501" cy="501" r="404.5" stroke="white" strokeOpacity="0.8" strokeWidth="1.2" filter="url(#shadow)"/>
            <circle cx="501" cy="501" r="323.5" stroke="white" strokeOpacity="0.8" strokeWidth="1.2" filter="url(#shadow)"/>
            <circle className="impact-circle" cx="501" cy="501" r="242.5" stroke="white" strokeOpacity="0.8" strokeWidth="1.2" filter="url(#shadow)"/>
            <circle cx="501" cy="501" r="161.5" stroke="white" strokeOpacity="0.8" strokeWidth="1.2" filter="url(#shadow)"/>
            <circle cx="501" cy="501" r="80.5" stroke="white" strokeOpacity="0.8" strokeWidth="1.2" filter="url(#shadow)"/>
            <rect x="488.869" y="488.869" width="24.262" height="24.262" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.1" strokeWidth="1.33333" filter="url(#shadow)"/>
            <line x1="56.1918" y1="501" x2="945.808" y2="501" stroke="white" strokeOpacity="0.3" strokeWidth="0.666667" strokeLinecap="square" />
            <line x1="501" y1="945.808" x2="501" y2="56.1919" stroke="white" strokeOpacity="0.3" strokeWidth="0.666667" strokeLinecap="square"/>
          
            <text x="55" y="495" fontSize="16" textAnchor="middle" fill="white" fillOpacity="0.6">1</text> 
            <text x="65" y="495" fontSize="16" textAnchor="middle" fill="white" fillOpacity="0.6">0</text> 
            <text x="935" y="495" fontSize="16" textAnchor="middle" fill="white" fillOpacity="0.6">1</text> 
            <text x="945" y="495" fontSize="16" textAnchor="middle" fill="white" fillOpacity="0.6">0</text> 
            <text x="495" y="56.1919" fontSize="16" textAnchor="middle" fill="white" fillOpacity="0.6">1</text> 
            <text x="505" y="56.1919" fontSize="16" textAnchor="middle" fill="white" fillOpacity="0.6">0</text>
            <text x="495" y="945.808" fontSize="16" textAnchor="middle" fill="white" fillOpacity="0.6">1</text> 
            <text x="505" y="945.808" fontSize="16" textAnchor="middle" fill="white" fillOpacity="0.6">0</text> 
          </g>
        </g>
      </svg>
    </div>
  );
}