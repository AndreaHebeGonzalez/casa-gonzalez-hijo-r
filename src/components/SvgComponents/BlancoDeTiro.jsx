import { useContext, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PreloaderContext } from "../../context";

gsap.registerPlugin(ScrollTrigger);

export const BlancoDeTiro = () => {

  const { startAnimation } = useContext(PreloaderContext);

  useEffect(() => {
    if(!startAnimation) return;

    gsap.set("circle", { strokeDasharray: "3000", strokeDashoffset: "3000" })
    gsap.to(
      "circle",
      {
        strokeDashoffset: "0", // Los círculos se dibujan
        duration: 8, // Duración de 2 segundos
        stagger: 0.3, // Retraso entre cada círculo
        ease: "power2.out", // Efecto de suavizado
        scrollTrigger: {
          trigger: ".svg-wrapper", // Elemento que disparará la animación cuando entre en el viewport
          start: "center 65%", // Empieza cuando el top del SVG esté al 80% del viewport
          //end: "bottom 20%", // Finaliza cuando el bottom del SVG esté al 20% del viewport
          //scrub: true, // El scroll será el encargado de la animación (hace que se sincronice con el scroll)
          scroller: '#main-container',
        }
      }
    );

    
    /* gsap.set("circle", { scale: 2 } );

    gsap.to(
      "circle", // Selección del círculo de impacto
      { 
        scale: 0, // Expansión hasta 3 veces el tamaño
        duration: 10, 
        repeat: -1, // Se repite infinitamente
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".svg-wrapper", // Elemento que dispara la animación
          start: "center center", // Empieza cuando el top del SVG esté al 80% del viewport
          scroller: '#main-container',
        }
      }
    ); */

    
  
  }, [startAnimation])
  
  return (
    <div className="svg-wrapper">
      <svg width="984" height="1002" viewBox="0 0 984 1002" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1381_64)">
          <mask id="mask0_1381_64" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="15" y="15" width="972" height="972">
            <path d="M986.245 15.7548H15.7547V986.245H986.245V15.7548Z" fill="white"/>
          </mask>
          <g mask="url(#mask0_1381_64)">
            <circle cx="501" cy="501" r="404.5" stroke="white" stroke-opacity="0.3" stroke-width="1.06667"/>
            <circle cx="501" cy="501" r="323.5" stroke="white" stroke-opacity="0.3" stroke-width="1.06667"/>
            <circle className="impact-circle" cx="501" cy="501" r="242.5" stroke="white" stroke-opacity="0.3" stroke-width="1.06667"/>
            <circle cx="501" cy="501" r="161.5" stroke="white" stroke-opacity="0.3" stroke-width="1.06667"/>
            <circle cx="501" cy="501" r="80.5" stroke="white" stroke-opacity="0.3" stroke-width="1.06667"/>
            <rect x="488.869" y="488.869" width="24.262" height="24.262" fill="white" fill-opacity="0.1" stroke="white" stroke-opacity="0.1" stroke-width="1.33333"/>
            <line x1="56.1918" y1="501" x2="945.808" y2="501" stroke="white" stroke-opacity="0.3" stroke-width="0.666667" stroke-linecap="square"/>
            <line x1="501" y1="945.808" x2="501" y2="56.1919" stroke="white" stroke-opacity="0.3" stroke-width="0.666667" stroke-linecap="square"/>
          
            <text x="55" y="495" font-size="16" text-anchor="middle" fill="white" fill-opacity="0.6">1</text> 
            <text x="65" y="495" font-size="16" text-anchor="middle" fill="white" fill-opacity="0.6">0</text> 
            <text x="935" y="495" font-size="16" text-anchor="middle" fill="white" fill-opacity="0.6">1</text> 
            <text x="945" y="495" font-size="16" text-anchor="middle" fill="white" fill-opacity="0.6">0</text> 
            <text x="495" y="56.1919" font-size="16" text-anchor="middle" fill="white" fill-opacity="0.6">1</text> 
            <text x="505" y="56.1919" font-size="16" text-anchor="middle" fill="white" fill-opacity="0.6">0</text>
            <text x="495" y="945.808" font-size="16" text-anchor="middle" fill="white" fill-opacity="0.6">1</text> 
            <text x="505" y="945.808" font-size="16" text-anchor="middle" fill="white" fill-opacity="0.6">0</text> 
          </g>
        </g>
      </svg>
    </div>
  );
}
