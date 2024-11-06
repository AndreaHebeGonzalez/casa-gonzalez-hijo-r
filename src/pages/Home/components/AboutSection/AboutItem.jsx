import { useEffect, useRef } from "react";
import { scrollAnimations } from "../../../../animations";

export const AboutItem = ({ title, text}) => {
  const itemRef = useRef(null);


  /* useEffect(() => {
    scrollAnimations(itemRef.current);
  }, []); */
  
  return (
    <div className="about-s__items-content" ref={itemRef}>
      <span className="about-s__items-title">{title}</span>
      <p className="about-s__items-text">{text}</p>
    </div>
  );
};
