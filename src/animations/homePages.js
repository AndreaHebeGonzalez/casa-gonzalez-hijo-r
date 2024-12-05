import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


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

export const aboutItemAnimation = (element, index) => {
  console.log(index);

  const position = index === 0 ? "left":"right";

  if (position === "left") {
    console.log(index, position);
    gsap.set(element, {xPercent: -50, yPercent:50, opacity: 1, transformOrigin: "top left"})
  } else if (position ==="right") {
    gsap.set(element, {xPercent: 50, yPercent:50, opacity: 1, transformOrigin: "top right"})
  }

  gsap.to(element, {
    xPercent: 0,
    yPercent:0,  
    opacity: 1,
    rotation: 0,  
    duration: 0.8,    
    ease: "circ", 
    scrollTrigger: {
      trigger: element, 
      start: "top 100%", 
      scroller: "#main-container", 
      toggleActions: "play none none none",
    },
  });
};

export const horizontalScroll = (categorys, categorysBox, titleWrapp) => {

  gsap.matchMedia().add(
    "(max-width: 767px)",
    () => {
      
    }
  )

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
        x: 0,
        ease: "power3",
        scrollTrigger: {
          start: "top 50%", 
          trigger: titleWrapp,
          scroller: "#main-container", 
          scrub: 0.5,
        }
      });

      gsap.to(titleWrapp, {
        opacity: 0,
        ease: "power3",
        scrollTrigger: {
          start: "top top",
          trigger: titleWrapp,
          scroller: '#main-container', 
          pin: true,
          scrub: 0.5,
        }
      })

        categoryList.forEach((category) => {
          const imgWrapp = category.querySelector('.category__img');
          const img = category.querySelector('.category__img img');
          const info = category.querySelector('.category__information');
          
          gsap.to(imgWrapp, {
            y: "5%",
            ease: "none",
            scrollTrigger: {
              trigger: imgWrapp,
              scroller: "#main-container", 
              start: "left center",
              end: () => `+=${categorysBox.offsetWidth}`,
              scrub:  0.5,
            },
          });
      
          gsap.to(img, {
            scale: "1", 
            ease: "none",
            scrollTrigger: {
              trigger: img,
              scroller: "#main-container", 
              start: "left center",
              end: () => `+=${categorysBox.offsetWidth}`,
              scrub:  0.5,
            },
          });
  
          gsap.to(info, {
            scale: 1.1,
            x: "10%",
            y: "50%",
            ease: "none",
            scrollTrigger: {
              trigger: info,
              scroller: "#main-container",
              start: "left center",
              end: () => `+=${categorysBox.offsetWidth}`, 
              scrub: 0.5,
            },
          });
        });

      ScrollTrigger.refresh();
    }
  );
};

export const categoryAnimation = () => {

}

export const openHotspot = (btnHotspot, tooltip, prevHotspot) => {
  let delay = prevHotspot ?  0.3:0;
  console.log(delay)
  const tlOpen = gsap.timeline();
  
  tlOpen.to(btnHotspot, {
    zIndex: 12,
    delay: delay,
    ease: "none",
  })
  .to(tooltip, {
    height: "auto",
    ease: "power3.inOut",
    duration: 0.5,
  })

};

export const closeHotspot = (btnHotspot, tooltip) => {

  const tlClose = gsap.timeline();

  tlClose.to(tooltip, {
    height: "0",
    ease: "power3.inOut",
    duration: 0.5,
  })
  .to(btnHotspot, {
    zIndex: 5,
    ease: "none",
  });
};