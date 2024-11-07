import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export const aboutItemAnimation = (element) => {

  gsap.to(element, {
    x: 0,  // Rota alrededor del eje X
    //rotationY: 360,  // Rota alrededor del eje Y
    duration: 1,    
    ease: "power3.out", 
    scrollTrigger: {
      trigger: element, 
      start: "top center", 
      toggleActions: "play none none reverse", 
      scroller: "#main-container", 
      markers: true,
    },
  });
  /* gsap.fromTo(
    element, 
    { 
      opacity: 0, 
      color: "transparent" 
    },
    {
      opacity: 1,
      color: "#ff0055",
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: element, 
        start: "top 80%", 
        end: "bottom 20%",
        toggleActions: "play none none reverse", 
        scroller: "#main-container", 
        markers: true,
      },
    }
  ); */
};