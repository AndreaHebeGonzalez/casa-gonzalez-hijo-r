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
      y: "15%", 
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


export const horizontalScroll = (categorys, categorysBox) => {

  const categoryList = gsap.utils.toArray('.category');


  gsap.to(categoryList, {
    xPercent: -100 * (categoryList.length-1),
    ease: 'none',
    scrollTrigger: {
      start: 'top top',
      trigger: categorys,
      scroller: '#main-container', 
      pin: true,
      scrub: 0.5,
      span: 1 / (categoryList.length-1), 
      end: () => `+=${categorysBox.offsetWidth}`
    }
  });

  ScrollTrigger.refresh();
};