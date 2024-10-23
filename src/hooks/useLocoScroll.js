import { useEffect, useState } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';



export const useLocoScroll = (start = true, setHasScrolled, setShowBtnScroll) => {

  const [locoScroll, setLocoScroll] = useState(null);

  useEffect(() => {
    if(!start) return;

    const scrollEl = document.querySelector('#main-container');
    
    const locoScrollInstance = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      smoothMobile: true,
      multiplier: 1,
      lerp: 0.06, //suavidad 
      /* class: 'is-real' */
    });

    locoScrollInstance.on('scroll', (obj) => {
      setHasScrolled(obj.scroll.y > 100);
      setShowBtnScroll(obj.scroll.y > 250);
    });

    locoScrollInstance.update();

    setLocoScroll(locoScrollInstance);

    return () => {
      if (locoScrollInstance) locoScrollInstance.destroy();
    };

  }, [start]);

  return locoScroll;
};
