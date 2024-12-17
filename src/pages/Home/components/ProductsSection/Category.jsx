import { useContext, useEffect, useRef } from "react"
import { PreloaderContext } from "../../../../context/PreloaderContext";
import { Link } from "react-router-dom"
import { categorysAnimationMobile } from "../../../../animations";

export const Category = ({ id, category, image, link }) => {

  const { startAnimation } = useContext(PreloaderContext);

  const categoryRef = useRef(null);
  const infoRef = useRef(null);
  const imgRef = useRef(null);


  useEffect(() => {
    if(!startAnimation) return;
    /* categorysAnimationMobile(categoryRef.current, infoRef.current, imgRef.current); */
  }, [startAnimation])
  
  
  

  return (
    <div  className="product-category container" ref={categoryRef}>    
      <div className="product-category__wrapper">
        <div className= {`product-category__header ${id % 2 === 0 ? 'product-category__header--reverse':''}` } ref={ infoRef }>
          <div className="product-category__heading">
            <h3 className= "product-category__title">{ category }</h3>
            <a className="product-category__link" href={ link }>
              <img src="/icons/ico-arrow-top-right.svg" alt="Click para ir a categoría" />
              <img src="/icons/ico-arrow-top-right.svg" alt="Click para ir a categoría" />
            </a>
          </div>
          <div className="product-category__line"></div>
        </div> 
        <div className= {`product-category__img-box  ${id % 2 === 0 ? 'product-category__img-box--reverse':''}` } ref={ infoRef }>
          <picture className= {`product-category__img  ${id % 2 === 0 ? 'product-category__img--reverse':''}` }>
            <img src= { image } alt="Imagen de fusil" ref={ imgRef }/>
          </picture>
        </div>
      </div>

      
    </div>
  )
}
