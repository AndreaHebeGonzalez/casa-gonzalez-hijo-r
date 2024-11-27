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


export const horizontalScroll = (categorys, categorysBox, titleWrapp) => {

  gsap.matchMedia().add(
    "(min-width: 768px)",

    () => {

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

      gsap.to(titleWrapp, {
        opacity: 0,
        ease: "power3.out",
        duration: 0.2,
        scrollTrigger: {
          trigger: titleWrapp,
          scroller: '#main-container', 
          pin: true,
          scrub: 0.5,
        }
      })

      ScrollTrigger.refresh();
    }
  );

  
};


export const openHotspost = (lineOne, lineTwo, tooltip) => {
  const tlHostpost = gsap.timeline()

  tlHostpost.to(lineOne, {
    width: "5rem",
    duration: 0.1,
    ease: "power1.inOut"
  })
  .to(lineTwo, {
    width: "5rem",
    duration: 0.1,
    ease: "power1.inOut"
  })
  .to(tooltip, {
    height: "auto",
    ease: "power1.inOut",
    duration: 0.5,
  })

  ScrollTrigger.refresh();
  
}

export const closeHotspost = (lineOne, lineTwo, tooltip) => {
  const tlHostpost = gsap.timeline()

}