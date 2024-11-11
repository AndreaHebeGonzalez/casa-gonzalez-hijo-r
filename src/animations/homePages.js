import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export const aboutItemAnimation = (element) => {
  gsap.to(element, {
    y: 0,  
    rotation: 0,  
    duration: 1,    
    ease: "power3.out", 
    scrollTrigger: {
      trigger: element, 
      start: "top 100%", 
      toggleActions: "play none none none", 
      scroller: "#main-container", 
      markers: true,
    },
  });
};

export const aboutImageAnimation = (element) => {

  gsap.to(
    element,
    {
      y: "12%", 
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom", 
        end: "bottom top", 
        scrub: true, 
        scroller: "#main-container",  
      },
    }
  );
};