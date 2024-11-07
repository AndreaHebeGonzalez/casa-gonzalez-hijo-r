import { useEffect, useState } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useLocoScroll = (setHasScrolled, setShowBtnScroll, start) => {

  const [locoScroll, setLocoScroll] = useState(null);

  useEffect(() => {

    if(!start) return;

    let locoScrollInstance;

    const observer = new MutationObserver(() => {
      const scrollEl = document.querySelector('#main-container');
      if(scrollEl) {
        observer.disconnect();

        const locoScrollInstance = new LocomotiveScroll({
          el: scrollEl,
          smooth: true,
          smoothMobile: true, 
          lerp: 0.06,
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
          getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
          },
          pinType: scrollEl.style.transform ? "transform" : "fixed"
        });
      
        ScrollTrigger.addEventListener("refresh", () => locoScrollInstance.update());
        setLocoScroll(locoScrollInstance);
    
        locoScrollInstance.scrollTo(0, { duration: 0, disableLerp: true }); 
        ScrollTrigger.refresh(); 
      };
    });    

    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      if (locoScrollInstance) { 
        locoScrollInstance.destroy();
        ScrollTrigger.removeEventListener("refresh", locoScrollInstance.update);
      };
    };   
  }, [start])

  return locoScroll;
};