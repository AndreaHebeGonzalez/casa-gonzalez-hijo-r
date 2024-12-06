import { useEffect, useState } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export const useLocoScroll = (setHasScrolled, setShowBtnScroll, start = false) => {

  const [locoScroll, setLocoScroll] = useState(null);

  useEffect(() => {
    if(!start) return;

    let locoScrollInstance;

    const observer = new MutationObserver(() => {
      const scrollEl = document.querySelector('#main-container');

      if (!scrollEl) return;

      if(scrollEl) {
        observer.disconnect();

        let locoScrollInstance = new LocomotiveScroll({
          el: scrollEl,
          smooth: true,
          lerp: 0.06,
          mobile:{
            breakpoint:0,
            smooth: true,
            multiplier: 15,
            class: "is-reveal",
          },
          tablet:{
              breakpoint:0,
              smooth: true,
              multiplier: 1,
              class: "is-reveal",
          },
        });

        locoScrollInstance.on('scroll', (obj) => {
          ScrollTrigger.update();
          setHasScrolled(obj.scroll.y > 100);
          setShowBtnScroll(obj.scroll.y > 250);
        });
      
        ScrollTrigger.scrollerProxy(scrollEl, {
          scrollTop(value) {
            return arguments.length ? locoScrollInstance.scrollTo(value, 0, 0) : locoScrollInstance.scroll.instance.scroll.y;
          },
          scrollLeft(value) {
            return arguments.length ? locoScrollInstance.scrollTo(value, 0, 0) : locoScrollInstance.scroll.instance.scroll.x;
          },
          getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
          },
        });
      
        ScrollTrigger.addEventListener("refresh", () => locoScrollInstance.update());
        setLocoScroll(locoScrollInstance);
        ScrollTrigger.refresh(); 
      };
    });    

    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      if (locoScrollInstance) { 
        locoScrollInstance.destroy();
        ScrollTrigger.removeEventListener("refresh", locoScrollInstance.update);
        locoScrollInstance = null
      };
    };   
  }, [start]);

  return locoScroll;
};