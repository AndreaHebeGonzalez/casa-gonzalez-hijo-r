import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";


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

export const horizontalScroll = (categorys, categorysBox, titleWrapp, ) => {

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


export const categorysAnimationMobile = (category, info, img) => {
  gsap.matchMedia().add(
    "(max-width: 767px)",
    () => {

      const titleProducts =  new SplitType('.categorys__heading', {
        types: "chars",
        wordClass: "chars"
      });

      gsap.set(titleProducts.chars, {yPercent: 100, opacity: 0});
      gsap.set('.categorys__line', {yPercent: 100, scaleX: 0});

      /* Linea de tiempo para animacion del titulo */

      const tlTitleProducts = gsap.timeline({
        scrollTrigger: {
          trigger: '.categorys__title-wrapp',
          start: "top 80%",
          scroller: '#main-container',
        }
      });

      tlTitleProducts.to(titleProducts.chars, {
        yPercent: 0,
        opacity:1,
        stagger: 0.03,
      })
      .to('.categorys__line', {
        yPercent: 0,
        scaleX: 1,
      })

      /* Linea de tiempo para animacion de categorias */

      gsap.set(category, { yPercent: 50, opacity: 0 });
      gsap.set(info, { yPercent: 50, opacity: 0 });

      const tlCategoryMobile = gsap.timeline({
        scrollTrigger: {
          trigger: category,
          start: "top 80%",
          scroller: '#main-container',
        }
      });

      tlCategoryMobile.to(category, {
        yPercent: 0,
        duration: 0.5,
        ease: "power1"
      })
      .to(category, {
        opacity: 1,
        duration: 1,
        ease: "power1"
      }, 0)
      .to(info, {
        yPercent: 0,
        opacity: 1,
        ease: "power1"
      }, "<.2")
    }
  )
}

export const featuredProductAnimation = (featuredProduct, title, image, info) => {

  if(!title || !image || !info) return;

  gsap.set(title, { yPercent: 50, opacity: 0 });
  gsap.set(image, { yPercent: 50, opacity: 0, scale: 0 });
  
  
  console.log(title, image, info); 

  const tlFeaturedProduct = gsap.timeline({
    scrollTrigger: {
      trigger: featuredProduct,
      start: "top 50%", //Averiguar porque no funciona para valores porcentuales mayores al 50%
      scroller: '#main-container',
      
    }
  });

  tlFeaturedProduct.to(title, {
    yPercent: 0,
    duration: 0.5,
    ease: "power1"
  })
  .to(title, {
    opacity: 1,
    duration: 1,
    ease: "power1"
  }, 0)
  .to(image, {
    yPercent: 0,
    duration: 0.3,
    ease: "power1"
  }, "<0.1")
  .to(image, {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "power1"
  }, 0)
  

  gsap.utils.toArray('.featured-product__info > div').forEach((element) => {

    gsap.set(element, { yPercent: 50, opacity: 0 });

    console.log(element)

    const tlInfo = gsap.timeline({
      scrollTrigger: {
        trigger: info,
        start: "top 75%", //Averiguar porque no funciona para valores porcentuales mayores al 75%
        scroller: '#main-container',
      }
    });

    tlInfo.to(element, {
      yPercent: 0,
      duration: 0.5,
      ease: "power1"
    })
    .to(element, {
      opacity: 1,
      duration: 1,
      ease: "power1"
    }, 0)
  });
};

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

