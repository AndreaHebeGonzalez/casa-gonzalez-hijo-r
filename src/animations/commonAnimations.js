import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const marqueeAnimation = (text, textClone, marqueeWrapp) => {

  let xPercent = 0;
  let direction = 1;
  
  const animation = () => {
    if(xPercent <= -100) {
      xPercent = 0;
    };

    if(xPercent > 0) {
      xPercent = -100;
    };

    gsap.set(text, {xPercent: xPercent});
    gsap.set(textClone, {xPercent: xPercent});

    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);

  gsap.to(marqueeWrapp, {
    scrollTrigger: {
      trigger: document.documentElement, 
      start: "top top", 
      end: "bottom top", 
      scrub: 0.25,
      scroller: '#main-container', 
      onUpdate: e => direction = e.direction * -1 
    },
    x: "-=300px",
  });
  //ScrollTrigger.refresh();
};
