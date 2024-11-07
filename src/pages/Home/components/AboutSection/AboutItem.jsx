import { useContext, useEffect, useRef } from "react";
import { aboutItemAnimation } from "../../../../animations";
import { PreloaderContext } from "../../../../context/PreloaderContext";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutItem = ({ title, text }) => {

  const { startAnimation } = useContext(PreloaderContext);

  const itemRef = useRef(null);

  useEffect(() => {
    if(!startAnimation) return;
    aboutItemAnimation(itemRef.current);
  }, [startAnimation]);
  
  return (
    <div className="about-s__items-content" ref={itemRef}>
      <span className="about-s__items-title">{title}</span>
      <p className="about-s__items-text">{text}</p>
    </div>
  );
};
