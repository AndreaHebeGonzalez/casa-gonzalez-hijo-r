import { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PreloaderContext } from "../../../../context";
import { svgAnimation } from "../../../../animations";


gsap.registerPlugin(ScrollTrigger);

export const BlancoDeTiro = ({ setValues, tilt }) => {
  const svgRef = useRef(null);
  const { startAnimation } = useContext(PreloaderContext);

  useEffect(() => {
    if(!startAnimation) return;
    svgAnimation(svgRef.current, setValues);
  }, [startAnimation]);
  
  
  return (
    <div className="svg-wrapper">
      <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="400" height="400">
        <rect width="200" height="200" fill="none" />
        <circle cx="100" cy="100" r="95" stroke="white" strokeOpacity="0.5" stroke-width="0.5" fill="none" />
        <circle cx="100" cy="100" r="85" stroke="white" strokeOpacity="0.5" stroke-width="0.5" fill="none" />
        <circle cx="100" cy="100" r="75" stroke="white" strokeOpacity="0.5" stroke-width="0.5" fill="none" />
        <circle cx="100" cy="100" r="65" stroke="white" strokeOpacity="0.5" stroke-width="0.5" fill="none" />
        <circle cx="100" cy="100" r="55" stroke="white" strokeOpacity="0.5" stroke-width="0.5" fill="none" />
        <circle cx="100" cy="100" r="45" stroke="white" strokeOpacity="0.5" stroke-width="0.5" fill="none" />
        <circle cx="100" cy="100" r="35" stroke="white" strokeOpacity="0.5" stroke-width="0.5" fill="none" />
        <circle cx="100" cy="100" r="25" stroke="white" strokeOpacity="0.5" stroke-width="0.5" fill="none" />
        <circle cx="100" cy="100" r="15" stroke="black" strokeOpacity="0.5" stroke-width="0.5" fill="black" />
        
        <text x="100" y="12" font-size="8" text-anchor="middle" fill="black">1</text>
        <text x="100" y="27" font-size="8" text-anchor="middle" fill="black">2</text>
        <text x="100" y="42" font-size="8" text-anchor="middle" fill="black">3</text>
        <text x="100" y="57" font-size="8" text-anchor="middle" fill="black">4</text>
        <text x="100" y="72" font-size="8" text-anchor="middle" fill="black">5</text>
        <text x="100" y="87" font-size="8" text-anchor="middle" fill="black">6</text>
        <text x="100" y="102" font-size="8" text-anchor="middle" fill="black">7</text>
        <text x="100" y="117" font-size="8" text-anchor="middle" fill="black">8</text>
        <text x="100" y="132" font-size="8" text-anchor="middle" fill="black">9</text>
        <text x="100" y="147" font-size="8" text-anchor="middle" fill="white">10</text>
      </svg>
      {/* <svg
        ref={svgRef}
        width="984"
        height="1002"
        viewBox="0 0 984 1002"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: `perspective(1500px) rotateX(${tilt.x * -1}deg) rotateY(${tilt.y * -1}deg)`,
        }}
      >
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="5" dy="5" stdDeviation="8" floodColor="rgb(0, 0, 0)" />
          </filter>
        </defs>
        <g clipPath="url(#clip0_1381_64)">
          <mask
            id="mask0_1381_64"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="15"
            y="15"
            width="972"
            height="972"
          >
            <path d="M986.245 15.7548H15.7547V986.245H986.245V15.7548Z" fill="white" />
          </mask>
          <g mask="url(#mask0_1381_64)">
            
            <circle cx="501" cy="501" r="404.5" stroke="white" strokeOpacity="0.3" strokeWidth="0.8" filter="url(#shadow)" />
            <circle cx="501" cy="501" r="323.5" stroke="white" strokeOpacity="0.3" strokeWidth="0.8" filter="url(#shadow)" />
            <circle cx="501" cy="501" r="242.5" stroke="white" strokeOpacity="0.3" strokeWidth="0.8" filter="url(#shadow)" />
            <circle cx="501" cy="501" r="161.5" stroke="white" strokeOpacity="0.3" strokeWidth="0.8" filter="url(#shadow)" />
            <circle cx="501" cy="501" r="80.5" stroke="white" strokeOpacity="0.3" strokeWidth="0.8" filter="url(#shadow)" />

            <circle cx="501" cy="501" r="40" fill="black" />

            <line x1="56" y1="501" x2="945" y2="501" stroke="white" strokeOpacity="0.5" strokeWidth="1" />
            <line x1="501" y1="56" x2="501" y2="945" stroke="white" strokeOpacity="0.5" strokeWidth="1" />
            
            
            <rect
              x="491"
              y="491"
              width="20"
              height="20"
              fill="white"
              fillOpacity="1"
              stroke="white"
              strokeOpacity="0.1"
              strokeWidth="0.8"
              filter="url(#shadow)"
            />
            
            <text x="55" y="495" fontSize="18" textAnchor="middle" fill="white" fillOpacity="0.6">
              1
            </text>
            <text x="65" y="495" fontSize="18" textAnchor="middle" fill="white" fillOpacity="0.6">
              0
            </text>
            <text x="935" y="495" fontSize="18" textAnchor="middle" fill="white" fillOpacity="0.6">
              1
            </text>
            <text x="945" y="495" fontSize="18" textAnchor="middle" fill="white" fillOpacity="0.6">
              0
            </text>
            <text x="495" y="56" fontSize="18" textAnchor="middle" fill="white" fillOpacity="0.6">
              1
            </text>
            <text x="505" y="56" fontSize="18" textAnchor="middle" fill="white" fillOpacity="0.6">
              0
            </text>
            <text x="495" y="945" fontSize="18" textAnchor="middle" fill="white" fillOpacity="0.6">
              1
            </text>
            <text x="505" y="945" fontSize="18" textAnchor="middle" fill="white" fillOpacity="0.6">
              0
            </text>
          </g>
        </g>
      </svg> */}
    </div>
  );
}

