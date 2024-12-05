import { useContext, useEffect, useRef } from "react"
import { PreloaderContext } from "../../../../context/PreloaderContext";
import { Link } from "react-router-dom"
import { categoryAnimation } from "../../../../animations";

export const Category = ({ category, description, image, link }) => {

  const { startAnimation } = useContext(PreloaderContext);

  const categoryRef = useRef(null);
  const infoRef = useRef(null);
  const imgRef = useRef(null);


  /* useEffect(() => {
    if(!startAnimation) return;
    categoryAnimation(categoryRef.current, infoRef.current, imgRef.current);
  }, [startAnimation, onScreen]) */
  
  
  

  return (
    <div  className="category">    
      <div /> 
      
      <div className="category__content" ref={categoryRef}>
        <picture className= "category__img">
          <img src= { image } alt="Imagen de fusil" ref={ imgRef }/>
        </picture>
        
        <div className= "category__information" ref={ infoRef }>
          <h3 className="category__title">{ category }</h3>
          <div className="category__link-box">
            <p className="category__link-text">Ver productos</p>   
            <a className="category__link" href={ link }>
              <img src="/public/icons/ico-diagonal-arrow-right.svg" alt="Click para ir a categoría" />
              <img src="/public/icons/ico-diagonal-arrow-right.svg" alt="Click para ir a categoría" />
            </a>
          </div>         
        </div>     
      </div>

      <div />
    </div>
  )
}
