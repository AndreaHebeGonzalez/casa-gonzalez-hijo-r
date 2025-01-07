import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";


gsap.registerPlugin(ScrollTrigger);



/* About Image */
export const aboutImageAnimation = (element) => {

  gsap.matchMedia().add(
    "(max-width: 767px)", 
    () => {
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
    }
  )

  gsap.matchMedia().add(
    "(min-width: 768px)", 
    () => {
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
    }
  )
  
};

/* About Items */
export const aboutItemAnimation = (item, id) => {
  
  gsap.matchMedia().add(
    "(max-width: 767px)",

    () => {
      gsap.set(item, { opacity: 0, y: "100px" });

      gsap.to(item, {
        y: 0,
        opacity: 1,
        ease: 'none',
        duration: 0.5, 
        scrollTrigger: {
          trigger: item,
          start: "top-=100 bottom",
          scroller: "#main-container",  
        }
      });
  });

  gsap.matchMedia().add(
    "(min-width: 768px)",

    () => {
      gsap.set(item, { opacity: 0, y: "300px" });

        const ltItems = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top-=300 80%",
            scroller: '#main-container',
          }
        });
    
        if(id % 2 !== 0) {
          ltItems.to(item, {
            y: "3rem",
            opacity: 1,
            ease: 'none',
            duration: 0.5, 
            delay: id * 0.1, 
          });
        } else {
          ltItems.to(item, {
            y: 0,
            opacity: 1,
            ease: 'none',
            duration: 0.5, 
            delay: id * 0.1, 
          })
        }
    }
  );
};

/* About HighlightedText */
export const hTLineAnimation = () => {
  console.log('ejecuto la animacion de la linea');
  gsap.utils.toArray('.highlighted-text__line').forEach((element) => {

    gsap.set(element, { width: 0 });

    gsap.matchMedia().add(
      "(max-width: 767px)",
  
      () => {
        gsap.to(element, {
          width: "35%",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            scroller: "#main-container",  
          }
        });
      }
    );

    gsap.matchMedia().add(
      "(min-width: 768px)",
  
      () => {
        gsap.to(element, {
          width: "35%",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            scroller: '#main-container'
          }
        });
      }
    );
  });
};

export const hTTextAnimation = (text) => {

  const textChars = new SplitType(text, { 
    types: 'words, char', 
    wordClass: 'highlighted-text__word',
    charClass: 'highlighted-text__char' 
  });

  gsap.set(textChars.chars, { color: "#dadada82" });

  gsap.matchMedia().add(
    "(max-width: 767px)",

    () => {
      gsap.to(textChars.chars, {
        color: "#fff",
        duration: 0.5,
        ease: "none",
        stagger: 0.01,
        scrollTrigger: {
          trigger: text,
          start: "top bottom",
          scrub: 1,
          scroller: "#main-container",  
        }
      })
    }
  );

  gsap.matchMedia().add(
    "(min-width: 768px)",

    () => {
      gsap.to(textChars.chars, {
        color: "#fff",
        duration: 0.5,
        ease: "none",
        stagger: 0.01,
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          scroller: "#main-container",
          scrub: 1,
        }
      })
    }
  );
};

export const hTImageAnimation = () => {

  const imgs = gsap.utils.toArray('.highlighted-text__imgs > *');

  imgs.forEach((img) => {
    gsap.set(img, {
      clipPath: "inset(100% 0% 100% 0%)",
    });

    gsap.matchMedia().add(
      "(max-width: 767px)",
      () => {
        gsap.to(img, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            scroller: "#main-container",  
          }
        });
      }
    )

    gsap.matchMedia().add(
      "(min-width: 768px)",
      () => {
        gsap.to(img, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            scroller: "#main-container",
            
          }
        });
      }
    )
    
  });
};

export const svgParentAnimation = (svgParent) => {
  gsap.set(svgParent, { rotate: "0", scale: 1 });

  gsap.to(svgParent, {
    rotate: "90deg",
    scale: 1.5,
    duration: 1,
    scrollTrigger: {
      trigger: svgParent,
      start: "60% 20%",
      scrub: true,
      scroller: '#main-container'
    }
  });
};

export const svgAnimation = (svg, setValues) => {
  gsap.set('.svg-wrapper', { scale: 0 });
  gsap.set("circle", { strokeDasharray: "3000", strokeDashoffset: "3000" });

  const tlSvg = gsap.timeline({
    scrollTrigger: {
      trigger: '.svg-wrapper',
      start: "top 70%",
      scroller: '#main-container',
    }
  });

  tlSvg.to("circle", {
      strokeDashoffset: "0", 
      duration: 4, 
      ease: "power2.out", 
    }
  )
  .to('.svg-wrapper', {
    scale: 1,
    duration: 1.5,
    onComplete: () => {
      if(!svg) return;

      const { left, top, height, width } = svg.getBoundingClientRect();
      setValues({ left, top, height, width });
    }
  }, '<.1');
};

/* Products Categorys */
export const horizontalScrollTitle = (categorysBox, titleWrapp) => {

  gsap.set(titleWrapp, { xPercent: 0 }); 

  gsap.matchMedia().add(
    "(max-width: 767px)",

    () => {
      gsap.to(titleWrapp, {
        xPercent: -100,
        ease: 'none',
        scrollTrigger: {
          start: 'top top',
          trigger: categorysBox,
          pin: true,
          scrub: 0.5,
          end: () => `+=${titleWrapp.offsetWidth}`,
          scroller: "#main-container",  
        }
      });
    }
  )

  gsap.matchMedia().add(
    "(min-width: 768px)",

    () => {
      gsap.to(titleWrapp, {
        xPercent: -100,
        ease: 'none',
        scrollTrigger: {
          start: 'top top',
          trigger: categorysBox,
          scroller: '#main-container', 
          pin: true,
          scrub: 0.5,
          end: () => `+=${titleWrapp.offsetWidth}`,
        }
      });
    }
  )
};

export const categorysAnimation = (titleWrapp, categoryHeader, categoryHeadingBox, categoryLine, imgBox) => {
  
  /* Animation heading */

  const title = categoryHeadingBox.querySelector('.product-category__title');
  const link = categoryHeadingBox.querySelector('.product-category__link');
  const imgCategory = imgBox.querySelector('.product-category__img img');

  const isReverse = imgBox.classList.contains('product-category__img-box-grid--reverse');
  
  const titleChars = new SplitType(title, { 
    types: 'char', 
    wordClass: 'category__titleChar' 
  });

  /* initializations  */
  gsap.set(titleChars.chars, { yPercent: 50, opacity: 0 });
  gsap.set(link, { scale: 0, opacity: 0 });
  gsap.set(categoryLine, { flexGrow: 0 });

  gsap.set(imgCategory, { clipPath: isReverse ? "inset(0% 0% 0% 100%)": "inset(0% 100% 0% 0%)"});
  
  

  /* Animations category */

  gsap.matchMedia().add(
    "(max-width: 767px)",

    () => {
      const tlHeadingCategory = gsap.timeline({
        scrollTrigger: {
          trigger: categoryHeader,
          start: () => `+=${titleWrapp.offsetWidth} 80%`,
          end: "bottom top",
          scroller: "#main-container",  
        }
      });
    
      tlHeadingCategory.to(titleChars.chars, {
        yPercent: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 0.4,
        ease: 'expo'
      })
      .to(link, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: 'power1.out',
      },'<0.2')
      .to(categoryLine, {
        flexGrow: 1,
        duration: 1,
        ease: 'power1.out',
      }, '<0.2')
      .to(imgCategory, {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power3",
        duration: 1,
      }, '<0.2') 
    }
  )

  gsap.matchMedia().add(
    "(min-width: 768px)",

    () => {
      const tlHeadingCategory = gsap.timeline({
        scrollTrigger: {
          trigger: categoryHeader,
          scroller: '#main-container',
          start: () => `+=${titleWrapp.offsetWidth} 80%`,
          end: "bottom top",
        }
      });
    
      tlHeadingCategory.to(titleChars.chars, {
        yPercent: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 0.4,
        ease: 'expo'
      })
      .to(link, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: 'power1.out',
      },'<0.2')
      .to(categoryLine, {
        flexGrow: 1,
        duration: 1,
        ease: 'power1.out',
      }, '<0.2')
      .to(imgCategory, {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power3",
        duration: 1,
      }, '<0.2') 
    }
  )
};

/* Featured Product */
export const featuredProductAnimation = (featuredProduct, title, image, info) => {

  const titleChars = new SplitType(title, {
    types: "words, char",
    wordClass: "featuredProduct__word",
    charClass: "featuredProduct__char"
  })

   /* featured-product__info */
  const titleInfo = info.querySelector('.featured-product__info-title');

  gsap.set(titleChars.chars, { yPercent: 50, opacity: 0 });
  gsap.set(image, { y: 300, opacity: 0, scale: 0 });
  gsap.set(titleInfo, { y: "25%", opacity: 0 });
  

  gsap.matchMedia().add(
    "(max-width: 767px)",

    () => {
      gsap.to(titleChars.chars, {
        yPercent: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 0.4,
        ease: 'expo',
        overwrite: true,
        scrollTrigger: {
          trigger: featuredProduct,
          start: "top 80%", 
          scroller: "#main-container",  
        }
      });
    
      gsap.to(image, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "expo",
        scrollTrigger: {
          trigger: image,
          start: "top-=250 80%",
          scroller: "#main-container",  
        }
      })

      gsap.to(titleInfo, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "expo",
        overwrite: true, 
        scrollTrigger: {
          trigger: titleInfo,
          start: "top 80%",
          scroller: "#main-container",  
        }
      });

    }
  ); 

  gsap.matchMedia().add(
    "(min-width: 768px)",

    () => {
      gsap.to(titleChars.chars, {
        yPercent: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 0.4,
        ease: 'expo',
        overwrite: true,
        scrollTrigger: {
          trigger: featuredProduct,
          start: "top 80%", 
          scroller: '#main-container',
        }
      });
    
      gsap.to(image, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "expo",
        scrollTrigger: {
          trigger: image,
          start: "top-=250 80%",
          scroller: '#main-container',
        }
      })

      gsap.to(titleInfo, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "expo",
        overwrite: true, 
        scrollTrigger: {
          trigger: titleInfo,
          start: "top 80%",
          scroller: '#main-container',
        }
      });
    }
  ); 
};

export const featureItemAnimation = (item, line) => {

  gsap.set(item, { y: "25%", opacity: 0 });
  gsap.set(line, { width: "0" });

  gsap.matchMedia().add(
    "(max-width: 767px)",

    () => {
      const tlFeatureItem = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 80%", 
          scroller: "#main-container",  
        }
      }) 
    
      tlFeatureItem.to(item, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "expo",
        overwrite: true 
      })
      .to(line, {
        width: "100%",
        duration: 0.8,
        ease: "power1.out",
      }, '<0.1')
    }
  );

  gsap.matchMedia().add(
    "(min-width: 768px)",

    () => {
      const tlFeatureItem = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 80%", 
          scroller: "#main-container"
        }
      }) 
    
      tlFeatureItem.to(item, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "expo",
        overwrite: true 
      })
      .to(line, {
        width: "100%",
        duration: 0.8,
        ease: "power1.out",
      }, '<0.1')
    }
  );
}

export const openHotspot = (btnHotspot, tooltip, prevHotspot) => {
  

  const tlOpen = gsap.timeline();
  
  tlOpen.to(btnHotspot, {
    zIndex: 12,
    duration: 0.01, //10ms 
    ease: "none",
  })
  .to(tooltip, {
    height: "auto",
    delay: 0.01, //10ms
    ease: "expo",
    duration: 0.5,
  })
};

export const closeHotspot = (btnHotspot, tooltip) => {

  const tlClose = gsap.timeline();

  tlClose.to(tooltip, {
    height: "0",
    ease: "expo",
    duration: 0.5, //500ms
  })
  .to(btnHotspot, {
    zIndex: 5,
    ease: "none",
    duration: 0.01, //dura 10ms
  }, '<0.1');  //Empieza 100ms despues de iniciada la animacion anterior
};

