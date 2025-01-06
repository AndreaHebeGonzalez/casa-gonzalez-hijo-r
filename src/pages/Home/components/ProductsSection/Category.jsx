import { useContext, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { categorysAnimation } from "../../../../animations";
import { LocoScrollContext,  ScreenContext } from "../../../../context";

export const Category = ({ id, category, image, link, titleWrapp }) => {

  /* Context */
  const { startAnimation } = useContext(LocoScrollContext);
  
  const { screenPx } = useContext(ScreenContext);
  
  
  /* Refs */
  const categoryHeaderRef = useRef(null);
  const categoryHeadingRef = useRef(null);
  const categoryLineRef = useRef(null);
  const imgBoxRef = useRef(null);


  useEffect(() => {
    if(!startAnimation) return;
    categorysAnimation(titleWrapp, categoryHeaderRef.current, categoryHeadingRef.current, categoryLineRef.current, imgBoxRef.current,  screenPx);
  }, [startAnimation])
  
  
  

  return (
    <div  className="product-category container">    
      <div className="product-category__wrapper">
        <div className= {`product-category__header ${id % 2 === 0 ? 'product-category__header--reverse':''}` } ref={ categoryHeaderRef }>
          <div className="product-category__heading" ref={ categoryHeadingRef }>
            <div className="product-category__title-wrapper">
              <h3 className= "product-category__title">{ category }</h3>
            </div>
            <a className="product-category__link" href={ link }>
              <img src="/icons/ico-arrow-top-right.svg" alt="Click para ir a categoría" />
              <img src="/icons/ico-arrow-top-right.svg" alt="Click para ir a categoría" />
            </a>
          </div>
          <div className="product-category__line" ref={ categoryLineRef }></div>
        </div> 
        <div className= {`product-category__img-box-grid  ${id % 2 === 0 ? 'product-category__img-box-grid--reverse':''}`} ref={ imgBoxRef }>
          <div className= {`product-category__img-box-flex  ${id % 2 === 0 ? 'product-category__img-box-flex--reverse':''}` }>
            <picture className= {`product-category__img` }>
              <img src= { image } alt="Imagen de fusil" />
            </picture>
          </div> 
        </div>
      </div>
    </div>
  )
}
