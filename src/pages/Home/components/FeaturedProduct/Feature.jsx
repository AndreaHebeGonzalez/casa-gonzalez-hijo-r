import { useContext, useEffect, useRef } from "react"
import { featureItemAnimation } from "../../../../animations"
import { LocoScrollContext, PreloaderContext } from "../../../../context";



export const Feature = ({ id, title, description }) => {

  /* Contexts */
  const { startAfterHScroll } = useContext(PreloaderContext);

  /* Refs */
  const itemRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    if(!startAfterHScroll) return;
    featureItemAnimation(itemRef.current, lineRef.current);
  }, [startAfterHScroll]);
  
  return (
    <>
      <div className="featured-product__info-item" ref={ itemRef }>
        <h4 className="featured-product__item-title">{ title }</h4>
        <p className="featured-product__item-description">{ description }</p>
      </div>
      <div className="featured-product__line" ref={ lineRef }></div>
    </>
    
  )
}
