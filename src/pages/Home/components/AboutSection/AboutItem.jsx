import { useContext, useEffect, useRef, useState } from "react";
import { aboutItemAnimation } from "../../../../animations";



export const AboutItem = ({ title, text, index, setRef }) => {




  /* useEffect(() => {
    if(!startAnimation) return;
    aboutItemAnimation(refCurrent.current, index);
  }, [startAnimation]); */

  

  

  return (
    <div ref={ (node) => setRef(node, index + 1) } className="about-s__item-content">
      <span className="about-s__item-number">{`0${index + 1}`}</span> 
      <span className="about-s__item-title">{title}</span>
      <p className="about-s__item-text">{text}</p>
    </div>
  );
};
