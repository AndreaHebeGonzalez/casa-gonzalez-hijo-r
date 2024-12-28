import { useContext, useEffect, useRef } from "react"
import { featureItemAnimation } from "../../../../animations"
import { PreloaderContext } from "../../../../context"


export const Feature = ({ id, title, description }) => {

  const { startAnimation } = useContext(PreloaderContext);

  const itemRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    if(!startAnimation) return;
    featureItemAnimation(itemRef.current, lineRef.current);
  }, [startAnimation])
  
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
