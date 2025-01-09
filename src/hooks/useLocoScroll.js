import { useContext, useEffect, useRef } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { LocoScrollContext } from "../context";

gsap.registerPlugin(ScrollTrigger);

export const useLocoScroll = (setHasScrolled, setShowBtnScroll) => {

  const { setInstance } = useContext(LocoScrollContext);
  const locoScrollRef = useRef(null);


  useEffect(() => {
    
    const observer = new MutationObserver(() => {
      const scrollEl = document.querySelector('#main-container');

      if (!scrollEl) return;

      if(scrollEl) {
        observer.disconnect();

        locoScrollRef.current = new LocomotiveScroll({
          el: scrollEl,
          smooth: true,
          lerp: 0.5,
          multiplier: 0.8,
          getDirection: true,
          inertia: 0.7,

          tablet:{
              breakpoint: 1024,
              smooth: true,
              multiplier: 1,
              getDirection: true,
              lerp: 0.5,
              inertia: 0.7,
          },

          mobile: {
            breakpoint: 768,
            smooth: true,
            multiplier: 3,
            getDirection: true,
            lerp: 0.8,
            inertia: 0.8,
          }
        });

        setInstance(locoScrollRef.current);

        locoScrollRef.current.on('scroll', (obj) => {
          ScrollTrigger.update();
          setHasScrolled(obj.scroll.y > 100);
          setShowBtnScroll(obj.scroll.y > 250);
        });
      
        ScrollTrigger.scrollerProxy(scrollEl, {

          scrollTop(value) {
            if (locoScrollRef.current) {
              return arguments.length ? locoScrollRef.current.scrollTo(value, 0, 0) : locoScrollRef.current.scroll.instance.scroll.y;
            }
            return null;
          },
          scrollLeft(value) {
            if (locoScrollRef.current) {
              return arguments.length ? locoScrollRef.current.scrollTo(value, 0, 0) : locoScrollRef.current.scroll.instance.scroll.x;
            }
            return null;
          },
          getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
          },
        });
        
        ScrollTrigger.addEventListener("refresh", () => locoScrollRef.current.update());

        ScrollTrigger.refresh(); 
      };
    });    

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      if (locoScrollRef.current) { 
        locoScrollRef.current.destroy();
        ScrollTrigger.removeEventListener("refresh", locoScrollRef.current.update);
        locoScrollRef.current = null
      };
    };   
    
  }, []);

  return locoScrollRef.current;
};