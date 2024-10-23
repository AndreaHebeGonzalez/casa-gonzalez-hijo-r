import { useEffect } from "react";
import LocomotiveScroll from 'locomotive-scroll';
/* import 'locomotive-scroll/src/locomotive-scroll.scss'; */



export const useLocoScroll = (start = true) => {
  useEffect(() => {
    if(!start) return;

    const scroll = new LocomotiveScroll({
      el: document.querySelector('#main-container'),
      smooth: true, 
      multiplier: 1,
      lerp: 0.06, //suavidad del desplazamiento
      class: 'is-real'
    });

  }, [start]);
};
